import React from "react";
import "../../assets/styles/globals.css";

export default function Footer() {
  return (
    <footer className="text-center py-6">
      <p>© {new Date().getFullYear()} | Cake | All rights reserved</p>
      Designed by{" "}
      <a href="https://hanzelsabio.vercel.app/" target="_blank">
        Hanzel Sabio
      </a>
    </footer>
  );
}
