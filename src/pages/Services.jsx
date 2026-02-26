import React from "react";

const Services = () => {
  const cardsData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/61/61449.png",
      title: "Cold Email Infrastructure Setup",
      text: "Complete setup of domains, DNS records, email accounts, and warming protocols for maximum deliverability."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/60/60525.png",
      title: "Deliverability & Domain Warming",
      text: "Strategic domain warming, inbox placement optimization, and ongoing deliverability monitoring."
    },
    {
      icon:  "https://cdn-icons-png.flaticon.com/512/29/29302.png",
      title: "Campaign Strategy & Copywriting",
      text: "Data-driven campaign strategy with high-converting email copy that generates replies."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
      title: "List Building & Lead Qualification",
      text: "Targeted lead list building with accurate data and proper segmentation for your ICP."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/combo-chart.png",
      title: "Ongoing Campaign Optimization",
      text: "Continuous A/B testing, performance analysis, and optimization to improve reply rates."
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png",
      title: "CRM & Automation Setup",
      text: "Full integration with your CRM and automation workflows for seamless lead management."
    }
  ];

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-bold mb-5 text-gray-600 text-center sm:text-left">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-[#d1d5db] rounded-2xl border border-gray-500 p-4 flex flex-col w-full hover:shadow-xl transition"
          >
            <img
              src={card.icon}
              alt={`${card.title} favicon`}
              className="w-6 h-6 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm w-full break-words">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;