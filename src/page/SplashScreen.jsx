import React from "react";
import splashScreenImage from "../../public/splash-screen-image.png";
import Layout from "../component/Layout";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router";

function SplashScreen() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="splash-screen-wrapper h-full flex flex-col justify-center items-center text-center gap-12">
          <div className="spw-top flex flex-col gap-3">
            <div className="subject-wrapper">
              <div className="subject-desc">
                <p className="text-lg">Welcome To</p>
              </div>
              <div className="subject-desc">
                <h1 className="text-5xl">SplitBros</h1>
              </div>
            </div>
            <div className="image">
              <img src={splashScreenImage} alt="Split bros Assets" />
            </div>
          </div>
          <div className="cta w-full">
            <Link className="w-full" to="/dashboard">
              <Button fullWidth color="green">
                Let's go
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SplashScreen;
