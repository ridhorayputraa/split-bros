import React from "react";
import splashScreenImage from "../../public/splash-screen-image.png";
import Layout from "../component/Layout";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Dashboard() {
  const { expenses, history } = useSelector((state) => state.bill);
  console.log(history);
  return (
    <Layout>
      <div className="container">
        <div className="dashboard-wrapper h-full flex flex-col gap-4">
          <div className="dw-top">
            <div className="dw-top-title">
              <p>Hello, Ray</p>
            </div>
            <div className="dw-top-title">
              <h6 className="text-xl">Split your bill with bros</h6>
            </div>
          </div>
          <div className="dw-spending-card">
            <div className="spending-card-wrapper">
              <div className="spending-card-title">
                <h4 className="text-2xl font-bold">Today Spending</h4>
              </div>
              <div className="spending-card-desc">
                <h6 className="text-xl">
                  <h4>Total Expenses: Rp. {expenses}</h4>
                </h6>
              </div>
            </div>

            <div className="spending-card-wrapper">
              <div className="spending-card-title">
                <p className="font-grey">
                  Disclaimer: This data can only longer for 24 hours
                </p>
              </div>
            </div>
          </div>
          <div className="cta">
            <Link to="/split">
              <Button fullWidth color="green" type="submit">
                Lets Split
              </Button>
            </Link>
          </div>
          <div className="history-wrapper flex flex-col gap-3">
            <div className="history-title">
              <p>History (24 Hours)</p>
            </div>
            <div className="history-list-wrapper flex flex-col gap-3">
              {history.map((item, index) => (
                <div className="history-card-list" key={index}>
                  <div className="hcl-left">
                    <div className="hcl-left-title">
                      <p className="font-bold text-lg">{item.name}</p>
                    </div>
                    <div className="hcl-left-desc">
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                  <div className="hcl-right text-end">
                    <div className="hcl-left-title">
                      <p className="font-bold text-lg">Rp. {item.amount}</p>
                    </div>
                    <div className="hcl-left-desc">
                      <p className="text-gray-600">{item.people} Bro's</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
