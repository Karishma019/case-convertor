import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <ToastContainer
        theme={`${mode === "light" ? "dark" : "light"}`}
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
      />
      <Header mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} />
      <Footer mode={mode} />
    </>
  );
}

export default App;
