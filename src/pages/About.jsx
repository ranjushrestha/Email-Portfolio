import React from "react";

// Sample data object
const aboutData = {
  name: "RAJU SHRESTHA",
  location: "KATHMANDU, NEPAL",
  email: "shrestharaju160@gmail.com",
  infoSections: [
    {
      title: "Cold Email Infrastructure",
      description: [
        "Specialized in building and managing cold email infrastructures including domain setup, mailbox provisioning, and sending account configuration.",
        "Experience with domain warming, sending rotation, deliverability optimization, and scalable outreach systems designed for consistent inbox placement.",
      ],
    },
    {
      title: "Email Server Deployment",
      description: [
        "Experienced in deploying and configuring email servers such as Mailcow, Zimbra, MDaemon, MailWizz, O365, GSuite, Zoho, and other SMTP-based systems in cloud or on-prem environments.",
        "Setting up domains, mailboxes, SMTP services, and securing email servers for reliable sending and high deliverability.",
      ],
    },
    {
      title: "B2B Expertise",
      description: [
        "Experience working with SaaS companies, agencies, consultants, and service-based businesses running outbound lead generation campaigns.",
        "Skilled in building cold email systems that help businesses generate qualified leads and book meetings.",
      ],
    },
    {
      title: "Performance Focus",
      description: [
        "Focused on maximizing inbox placement, improving reply rates, and maintaining strong sender reputation.",
        "Experienced in creating automated outreach sequences and scalable lead generation workflows.",
      ],
    },
    {
      title: "Technical Mastery",
      description: [
        "Strong understanding of DNS configuration including SPF, DKIM, DMARC, MX records, and email authentication standards.",
        "Experienced in domain rotation, inbox health monitoring, email security configuration, and maintaining high deliverability for outreach campaigns.",
      ],
    },
  ],
};

const About = ({ data = aboutData }) => {
  return (
    <div className="mt-10 px-4 lg:mt-4 lg:ml-8">
      {/* Heading */}
      <h2 className="text-4xl sm:text-7xl text-gray-700 font-semibold text-center sm:text-left">
        {data.name}
      </h2>

      {/* Intro */}
      <p className="pt-2 font-semibold text-base text-gray-500 max-w-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1">
        <span>{data.location} .</span>
        <a
          href={`mailto:${data.email}`}
          className="text-amber-900 text-base hover:underline"
        >
          {data.email.toUpperCase()}
        </a>
      </p>

      {/* Info Sections */}
      <div className="mt-10 space-y-4">
        {data.infoSections.map((section, index) => (
          <div key={index}>
            <h3 className=" text-gray-500 font-semibold">
              {section.title}
            </h3>

            <ul className="list-disc ml-6 mt-2 text-gray-500">
              {section.description.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
