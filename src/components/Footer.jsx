import React from "react";

function Footer({ mode }) {
  return (
    <footer>
      <p
        className={`text-center py-5 text-lg -sm:text-sm ${
          mode === "light" ? "text-slate-800" : "text-white bg-slate-900"
        }`}
      >
        Design by @karishma
      </p>
    </footer>
  );
}

export default Footer;
