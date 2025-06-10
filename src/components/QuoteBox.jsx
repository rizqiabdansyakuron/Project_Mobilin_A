// import React, { useEffect, useState } from "react";

// const QuoteBox = () => {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const res = await fetch("https://api.adviceslip.com/advice");
//         const data = await res.json();
//         setQuote(data.slip.advice);
//         setAuthor("Unknown");
//       } catch (err) {
//         console.error("Failed to fetch quote:", err);
//         setQuote("Be the change that you wish to see in the world.");
//         setAuthor("Mahatma Gandhi");
//       }
//     };

//     fetchQuote();
//   }, []);

//   return (
//     <div className="bg-white shadow-md p-4 rounded-lg my-4">
//       <p className="italic">"{quote}"</p>
//       <p className="text-right mt-2 font-semibold">- {author}</p>
//     </div>
//   );
// };

// export default QuoteBox;
