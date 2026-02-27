import React from "react";

// Sample data object
const aboutData = {
  name: "RAJU SHRESTHA",
  location: "KATHMANDU, NEPAL",
  email: "shrestharaju160@gmail.com",
  infoSections: [
    {
      title: "Cold Email Infrastructure",
      description:
        "Specialized in cold email infrastructure setup, domain warming, deliverability optimization, and campaign scaling.",
    },
    {
      title: "B2B Expertise",
      description:
        "Experience working with SaaS, agencies, consultants, and service-based businesses.",
    },
    {
      title: "Performance Focus",
      description:
        "Focused on inbox placement, reply rate optimization, and automated lead generation systems.",
    },
    {
      title: "Technical Mastery",
      description:
        "Strong understanding of DNS setup (SPF, DKIM, DMARC), domain rotation, and inbox health management.",
    },
  ],
};

const About = ({ data = aboutData }) => {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl text-gray-600 font-bold mb-6 text-center sm:text-left">
        {data.name}
      </h2>

      {/* Intro paragraph */}
      <p className="pt-4 font-semibold text-base text-gray-500 max-w-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1">
        <span>{data.location}.</span>
        <a
          href={`mailto:${data.email}`}
          className="text-amber-900 text-base hover:underline"
        >
          {data.email.toUpperCase()}
        </a>
      </p>

      {/* Info Sections */}
      <div className="mt-10 space-y-2">
        {data.infoSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl text-gray-500 font-semibold">{section.title}</h3>
            <p className="text-gray-500 mt-1">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;