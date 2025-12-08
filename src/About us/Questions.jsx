import { useState } from "react";

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does it works?",
      a: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
    },
    { q: "Can I rent a car without a credit card?", 
        a: "Yes, exactly you can rent a car here but you should come to our office." },
    { q: "What are the requirements for renting a car?", 
        a: "Yes, exactly you can rent a car here but you should come to our office." },
    {
      q: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
      a: "Yes, exactly you can rent a car here but you should come to our office."
    },
    {
      q: "Does Car Rental offer coverage products for purchase with my rental?",
      a: "Yes, exactly you can rent a car here but you should come to our office.Yes, exactly you can rent a car here but you should come to our office.Yes, exactly you can rent a car here but you should come to our office."
    }
  ];

  return (
    <div className="w-full bg-gray-00 min-h- mt-10 py-12 px-4 md:px-10">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
        Top Car Rental Questions
      </h2>

      {/* FAQ Container */}
      <div className="w-8xl -mr-10 -ml-10 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
          >
            {/* Question Button */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className=" flex justify-between items-center text-left"
            >
              <span className="font-semibold text-lg">{item.q}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? "▴" : "▾"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && item.a && (
              <p className="text-gray-600 text-sm mt-3 leading-relaxed text-left">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
