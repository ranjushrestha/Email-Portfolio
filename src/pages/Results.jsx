import React, { useEffect, useRef, useState } from "react";

const Results = () => {
const cardsData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png", 
    title: "35%+",
    text: "Average Open Rate",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", 
    title: "8-15%",
    text: "Reply Rate",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/149/149071.png", 
    title: "20+",
    text: "Domains Managed",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/561/561151.png", 
    title: "100k+",
    text: "Emails Sent Monthly",
  },
];
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-5 ml-6 mr-20">
      <h2 className="text-5xl font-bold mb-5 text-gray-600">Results That Matter</h2>
      <p className="font-semibold mb-15 text-gray-500">
        Proven track record of delivering high-performance email campaigns
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`bg-gray-300/50 rounded-2xl border border-gray-500 p-4 min-h-60 flex flex-col justify-center items-center w-full transition-transform duration-700 ease-out ${
              visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img src={card.icon} alt={`${card.title} icon`} className="w-8 h-8 mb-3" />
            <h3 className="text-5xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700 font-bold text-center break-words">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;