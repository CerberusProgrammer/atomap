import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

if (!navigator.geolocation) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: "Geolocation isn't supported by this browser.",
  });
  throw new Error("Geolocation is not supported by this browser.");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
