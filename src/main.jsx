import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

// Font
import "/assets/fonts/VisbyCF-Bold.otf";
import "/assets/fonts/VisbyCF-BoldOblique.otf";
import "/assets/fonts/VisbyCF-DemiBold.otf";
import "/assets/fonts/VisbyCF-DemiBoldOblique.otf";
import "/assets/fonts/VisbyCF-ExtraBold.otf";
import "/assets/fonts/VisbyCF-ExtraBoldOblique.otf";
import "/assets/fonts/VisbyCF-Heavy.otf";
import "/assets/fonts/VisbyCF-HeavyOblique.otf";
import "/assets/fonts/VisbyCF-Light.otf";
import "/assets/fonts/VisbyCF-LightOblique.otf";
import "/assets/fonts/VisbyCF-Medium.otf";
import "/assets/fonts/VisbyCF-Regular.otf";
import "/assets/fonts/VisbyCF-RegularOblique.otf";
import "/assets/fonts/VisbyCF-Thin.otf";
import "/assets/fonts/VisbyCF-ThinOblique.otf";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
