import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import Base64 from "base64-js";
import MarkdownIt from "markdown-it";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addExpense, setTotalExpense } from "../redux/billSlice.js";
import dayjs from "dayjs";
import { Button, Input } from "@material-tailwind/react";

const GeminiBill = () => {
  const [file, setFile] = useState(null);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [brosCount, setBrosCount] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_SOME_KEY;
  console.log(API_KEY, "API KEY");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMenus([]);
    setError("");
  };

  const processBill = async () => {
    if (!file) {
      setError("Please upload a bill image.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Convert the image to Base64
      const imageBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
      });

      // Create Gemini API content

      // Create Gemini API content
      const contents = [
        {
          role: "user",
          parts: [
            { inline_data: { mime_type: "image/jpeg", data: imageBase64 } },
            {
              text: `Extract the menu items and their prices from this bill image. 
                       For each item, list them individually, even if the quantity is greater than 1. 
                       Do not multiply the price. Provide only the name of the menu and its price for each occurrence, one item per line. 
                       At the end of the list, calculate and include the total price. Format: "Total - [calculated total price]". 
                       Do not include any introductory text or additional comments.`,
            },
          ],
        },
      ];

      // const contents = [
      //   {
      //     role: "user",
      //     parts: [
      //       { inline_data: { mime_type: "image/jpeg", data: imageBase64 } },
      //       {
      //         text: `Extract the menu items and their prices from this bill image.
      //                For each item, list them individually, even if the quantity is greater than 1.
      //                Do not multiply the price. Provide only the name of the menu and its price for each occurrence, one item per line.
      //                At the end of the list, calculate the total price and evenly distribute a 10% tax across all items.
      //                For each item, include its name, original price, tax amount, and new price (original price + tax).
      //                Finally, provide the total price (including tax). Format:
      //                - "[Menu Item Name]: [Original Price], Tax: [Tax Amount], New Price: [New Price]"
      //                - "Total (with tax): [Calculated Total Price]"
      //                Do not include any introductory text or additional comments.`,
      //       },
      //     ],
      //   },
      // ];

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
        ],
      });

      const result = await model.generateContentStream({ contents });
      const buffer = [];
      const md = new MarkdownIt();

      for await (const response of result.stream) {
        buffer.push(response.text());
      }

      // Parse the response and generate menu items
      const menuItems = [];
      buffer
        .join("")
        .split("\n")
        .forEach((item, index) => {
          if (item.startsWith("Total -")) {
            const extractedTotal = parseFloat(
              item
                .replace("Total -", "")
                .trim()
                .replace(/\./g, "")
                .replace(/,/g, "")
            );
            setTotalPrice(extractedTotal); // Update the totalPrice state
          } else {
            menuItems.push({
              id: index,
              name: item.split(" - ")[0]?.trim(),
              price: item.split(" - ")[1]?.trim(),
              customer: "",
            });
          }
        });

      if (isNaN(totalPrice) || totalPrice <= 0) {
        throw new Error("Failed to extract a valid total price.");
      }

      dispatch(setTotalExpense(totalPrice));
      setMenus(menuItems);
    } catch (e) {
      setError("Failed to process the bill. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomerChange = (id, value) => {
    const updatedMenus = menus.map((menu) =>
      menu.id === id ? { ...menu, customer: value } : menu
    );
    setMenus(updatedMenus);
  };

  const handleSubmit = () => {
    const now = dayjs();
    const expiration = now.add(24, "hour").toISOString();

    const dataToStore = menus.map((menu) => ({
      ...menu,
      expiration,
    }));
    localStorage.setItem("billData", JSON.stringify(dataToStore));

    dispatch(
      addExpense({
        amount: totalPrice,
        historyItem: {
          name: merchantName || "Merchant",
          date: now.format("DD, MMMM, YYYY"),
          amount: totalPrice,
          people: brosCount,
        },
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="gemini-bill-processor flex flex-col gap-4">
      <div className="input-section flex flex-col gap-4">
        <Input
          variant="outlined"
          type="file"
          accept="image/*"
          label="Input your bill here"
          onChange={handleFileChange}
        />
        <Button
          color="green"
          fullWidth
          onClick={processBill}
          disabled={loading}
        >
          {loading ? "Processing..." : "Upload and Process"}
        </Button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="output-section">
        {menus.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="menu-list flex flex-col gap-3">
              {menus.map((menu) => (
                <div className="subject-form flex flex-col gap-2" key={menu.id}>
                  <label>
                    <strong>{menu.name}</strong> - Rp {menu.price}
                  </label>
                  <Input
                    color="blue"
                    variant="outlined"
                    label={`Your bros name (${menu.name})`}
                    placeholder={`Input your bros name for ordering : ${menu.name}`}
                    value={menu.customer}
                    onChange={(e) =>
                      handleCustomerChange(menu.id, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
            <div className="subject-form flex flex-col gap-2">
              <label>
                <strong>How many your bros ?</strong>
              </label>
              <Input
                color="blue"
                variant="outlined"
                label="How many your bros ?"
                placeholder="How many your bros ?"
                value={brosCount}
                onChange={(e) => setBrosCount(e.target.value)} // Update brosCount state
              />
            </div>
            <div className="subject-form flex flex-col gap-2">
              <label>
                <strong>Put the merchant name</strong>
              </label>
              <Input
                color="blue"
                variant="outlined"
                label="Put the merchant name"
                placeholder="Put the merchant name"
                value={merchantName}
                onChange={(e) => setMerchantName(e.target.value)} // Update merchantName state
              />
            </div>
            <div className="cta">
              <Button onClick={handleSubmit} color="green" fullWidth>
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiBill;
