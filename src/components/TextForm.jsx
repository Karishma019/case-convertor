import React, { useState } from "react";
import { toast } from "react-toastify";

function TextForm({ mode }) {
  const [text, setText] = useState("");

  const caseUpper = () => {
    if (text.length > 0) {
      setText(text.toUpperCase());

      toast("converted into Upper Text!!!!");
    } else {
      return;
    }
  };

  const caseLower = () => {
    if (text.length > 0) {
      setText(text.toLowerCase());

      toast("converted into Lower Text!!!!");
    } else {
      return;
    }
  };

  const caseSentence = () => {
    if (text.length > 0) {
      const convertedtext = [...text]
        .map((text, index) =>
          index === 0 ? text.toUpperCase() : text.toLowerCase()
        )
        .join("");
      setText(convertedtext);
      toast("converted into Sentence Text!!!!");
    } else {
      return;
    }
  };

  const caseInverse = () => {
    if (text.length > 0) {
      const convertedtext = [...text]
        .map((text) =>
          text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase()
        )
        .join("");
      setText(convertedtext);
      toast("converted into Inverse Text!!!!");
    } else {
      return;
    }
  };

  const caseAlternative = () => {
    if (text.length > 0) {
      const convertedText = [...text]
        .map((text, index) =>
          index % 2 === 0 ? text.toUpperCase() : text.toLowerCase()
        )
        .join("");

      setText(convertedText);
      toast("converted into Alternative Text!!!!");
    } else {
      return;
    }
  };

  const caseCapitalize = () => {
    if (text.length > 0) {
      const convertedText = text
        .split(" ")
        .map((text) =>
          [...text]
            .map((text, index) =>
              index === 0 ? text.toUpperCase() : text.toLowerCase()
            )
            .join("")
        )
        .join(" ");

      setText(convertedText);
      toast("converted into Captilized Text!!!!");
    } else {
      return;
    }
  };

  const textToSpeak = () => {
    const voice = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(voice);
    toast("Voice Activated!!!!");
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(text).then(() => {
      toast("Copied the text!!!!");
    });
  };

  function countLines(text) {
    // Split the text by newline characters
    let linesArray = text.split(/\r\n|\r|\n/);

    // Count the number of lines
    return linesArray.length;
  }

  function countSentences(text) {
    // Split the text into sentences using regular expression
    let sentencesArray = text.split(/[.!?]+/);

    // Remove any empty strings from the array
    sentencesArray = sentencesArray.filter(
      (sentence) => sentence.trim() !== ""
    );

    // Return the count of sentences
    return sentencesArray.length;
  }

  const linescount = countLines(text);
  const sentenceCount = countSentences(text);

  const btnsData = [
    { type: "UPPER CASE", convert: caseUpper },
    { type: "lower case", convert: caseLower },
    { type: "Sentence case", convert: caseSentence },
    { type: "iNverSe CAsE", convert: caseInverse },
    { type: "aLtErNaTiVe CaSe", convert: caseAlternative },
    { type: "Capitalize Case", convert: caseCapitalize },
    { type: "Text To Speak", convert: textToSpeak },
    { type: "Copy To ClipBoard", convert: copyToClipBoard },
  ];

  return (
    <div
      className={`py-10 ${
        mode === "dark"
          ? "text-white bg-slate-800"
          : "text-slate-900 bg-slate-100"
      }`}
    >
      <div className="container">
        <h1 className="mx-auto text-3xl py-5 text-center -sm:text-2xl">
          Type or Paste your Text here to Analyze it
        </h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="12"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text"
          className="w-full p-2 h-92 -sm:h-64  focus:outline-none focus:ring focus:ring-slate-300 rounded-lg text-slate-600 shadow-md"
        ></textarea>
        <div className="flex justify-between my-2 font-semibold">
          <div>
            <p>
              Word Count :{" "}
              {text.length === 0 ? 0 : text.trim().split(" ").length}
            </p>
            <p>No. of characters : {text.split(" ").join("").length}</p>
          </div>
          <div>
            <p>No. of lines : {text.length === 0 ? 0 : linescount}</p>
            <p>No. of Sentences : {sentenceCount}</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap my-5 -sm:gap-3 -sm:flex-start">
          {btnsData.length !== 0 &&
            btnsData.map((btn) => {
              return (
                <button
                  key={btn.type}
                  onClick={btn.convert}
                  className=" text-white text-md -sm:text-sm bg-indigo-500 rounded-md py-2 -sm:py-1 -sm:px-2 px-3 shadow-md shadow-indigo-500/50 hover:shadow-none transition ease-in-out"
                >
                  {btn.type}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TextForm;
