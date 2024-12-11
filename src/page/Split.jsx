import React from "react";
import splashScreenImage from "../../public/splash-screen-image.png";
import Layout from "../component/Layout";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router";
import GeminiIntegration from "../component/GeminiBill";
import GeminiBill from "../component/GeminiBill";

function Split() {
  return (
    <Layout>
      <div className="container">
        <div className="split-wrapper h-full flex flex-col gap-4">
          <div className="split-top">
            <div className="cta">
              <Link to="/dashboard">
                <Button color="red" type="submit">
                  Back
                </Button>
              </Link>
            </div>
          </div>
          <div className="split-form-wrappper flex flex-col gap-6">
            {/* <div className="subject-form">
              <Input
                type="file"
                color="blue"
                variant="standard"
                label="Input your bill here"
                placeholder="Input your bill here"
              />
            </div> */}
            <GeminiBill  />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Split;
