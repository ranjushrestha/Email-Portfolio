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
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-5 text-gray-600 text-center sm:text-left sm:text-5xl">
        Results That Matter
      </h2>
      <p className="font-semibold mb-10 text-gray-500 text-center sm:text-left">
        Proven track record of delivering high-performance email campaigns
      </p>

      {/* Grid: 2 cols on mobile, 4 cols on md and up */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`bg-gray-300/50 rounded-2xl border border-gray-500 p-6 min-h-[12rem] 
              flex flex-col justify-center items-center w-full max-w-xs transition-transform duration-700 
              ease-out ${
              visible[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className="w-10 h-10 mb-3"
            />
            <h3 className="text-2xl font-semibold mb-2 lg:text-4xl lg:font-bold">
              {card.title}
            </h3>
            <p className="text-gray-700 font-semibold text-center break-words">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;