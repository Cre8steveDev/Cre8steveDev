// Random Quote from ZenQuotes API
import { useEffect, useState, useRef } from "react";
import domtoimage from "dom-to-image";

const RandomQuote = () => {
  const [quoteObj, setQuoteObj] = useState({ quote: "", author: "" });
  const [copySuccess, setCopySuccess] = useState(null);

  //   define quote ref and copybuttonRef
  const quoteRef = useRef(null);
  const copyRef = useRef(null);

  //   set copySuccess to false on render
  useEffect(() => {
    setTimeout(() => setCopySuccess(null), 2000);
  }, [copySuccess]);

  //   Make call to teh API

  //   define the calling function
  const retrieveQuote = async () => {
    try {
      const response = await fetch(
        "https://programming-quotesapi.vercel.app/api/random"
      );

      const data = await response.json();
      //   setQuote({ quote: data.q, author: data.a });
      setQuoteObj({ quote: data.quote, author: data.author });
    } catch (error) {
      setQuoteObj({
        quote: "Easy There Soldier! Too many requests at once.",
        author: "This was Hard Coded 😂",
      });
    }
  };

  useEffect(() => {
    retrieveQuote();
  }, []);

  //   Handle Copy Event
  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API not supported");
      await navigator.clipboard.writeText(
        `${quoteObj.quote} by ${quoteObj.author}`
      );
      setCopySuccess(true);
    } catch (err) {
      alert("Error Occured: ", err.message);
    }
  };

  //   Handle Download Image
  const handleDownload = () => {
    if (quoteRef.current) {
      domtoimage
        .toPng(quoteRef.current, {
          quality: 1,
          filter: (node) => node !== copyRef.current,
          //   height: quoteRef.current.offsetHeight * 2,
          //   width: quoteRef.current.offsetWidth * 2,
        })
        .then(function (dataUrl) {
          let link = document.createElement("a");
          link.download = `${quoteObj.author}-quote.png`;
          link.href = dataUrl;
          link.click();
        });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {quoteObj.quote === "" && (
        <div
          id="loading"
          className="w-full max-w-[510px] h-[70%] max-h-[500px] bg-white p-11 rounded-2xl shadow-2xl flex flex-col justify-center items-center"
        >
          <img src="walk-loading.gif" alt="" />
          <p>Loading Random Quote</p>
        </div>
      )}

      {quoteObj.quote.length > 2 && (
        <>
          <div
            ref={quoteRef}
            id="quote"
            className="w-full max-w-[500px] h-[70%] max-h-max bg-white p-11 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center relative"
          >
            <h1 className="mb-3 text-xl sm:text-3xl font-medium text-darkBlue">
              {quoteObj.quote}
            </h1>
            <p className="text-lg sm:text-xl mt-2">- {quoteObj.author}</p>

            <button
              ref={copyRef}
              className={`absolute bottom-5 cursor-pointer p-2 shadow-xl shadow-violet-500 rounded-md ${
                copySuccess ? "bg-green-700" : "bg-violet-800"
              } text-white text-sm box-border hover:scale-75 transition ease-out`}
              onClick={handleCopy}
            >
              {copySuccess === true ? "Copied Successfully" : "Copy Quote"}
            </button>
          </div>

          <button onClick={handleDownload} className="mt-3">
            Download Quote
          </button>
        </>
      )}
    </div>
  );
};

export default RandomQuote;
