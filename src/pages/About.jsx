import React from "react";

const About = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl text-gray-600 font-bold mb-6 text-center sm:text-left">
        RAJU SHRESTHA
      </h2>

      {/* Intro paragraph */}
      <p className="pt-4 font-semibold text-base text-gray-500 max-w-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1">
        <span>KATHMANDU, NEPAL</span>
        <span className="mx-2 relative -top-0.5">•</span>
        <a
          href="mailto:shrestharaju160@gmail.com"
          className="text-amber-900 text-base hover:underline break-all"
        >
          SHRESTHARAJU16060@GMAIL.COM
        </a>
      </p>

      {/* 4 Info Sections */}
      <div className="mt-10 space-y-6">
        <div>
          <h3 className="text-xl text-gray-500 font-semibold">Cold Email Infrastructure</h3>
          <p className="text-gray-500 mt-1">
            Specialized in cold email infrastructure setup, domain warming,
            deliverability optimization, and campaign scaling.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-gray-500 font-semibold">B2B Expertise</h3>
          <p className="text-gray-500 mt-1">
            Experience working with SaaS, agencies, consultants, and service-based
            businesses.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-gray-500 font-semibold">Performance Focus</h3>
          <p className="text-gray-500 mt-1">
            Focused on inbox placement, reply rate optimization, and automated
            lead generation systems.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-gray-500 font-semibold">Technical Mastery</h3>
          <p className="text-gray-500 mt-1">
            Strong understanding of DNS setup (SPF, DKIM, DMARC), domain rotation,
            and inbox health management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;