import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../hooks/useForm";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  // Validation rules
  const validations = {
    fullName: {
      required: true,
      message: "Full Name is required",
      validate: (value) => ({
        requirement: /^[A-Za-z\s]{3,}$/.test(value.trim()),
        message:
          "Full Name must be at least 3 letters.",
      }),
    },
    email: {
      required: true,
      message: "Email is required",
      validate: (value) => ({
        requirement:
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
        message: "Email is invalid.",
      }),
    },
    message: {
      required: true,
      message: "Message cannot be empty",
      validate: (value) => ({
        requirement: value.trim().length >= 10,
        message: "Message must be at least 10 characters.",
      }),
    },
  };

  const { formData, errors, handleChange, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validations,
  });

  const sendEmail = (data) => {
    setSending(true);
    setStatus("Sending… Please wait");

    emailjs
      .send(
        "service_2nt3qim",
        "template_bvdcly9",
        data,
        "LpHjbhNZFWTD7fl6K"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setSending(false);
      })
      .catch(() => {
        if (!navigator.onLine) {
          setStatus(
            "You are offline. Please check your internet connection."
          );
        } else {
          setStatus("Failed to send message. Please try again.");
        }
        setSending(false);
      });
  };

  return (
    <div className="mt-5 ml-6 mr-20 flex justify-start">
      <div>
        <h2 className="text-5xl font-bold mb-5 text-gray-600">
          Let's Work Together
        </h2>
        <p className="font-semibold text-gray-500">
          Ready to scale your outreach and generate qualified leads on autopilot?
        </p>

        <form
          onSubmit={handleSubmit(sendEmail)}
           noValidate
          className="max-w-sm mt-10 p-6 rounded space-y-3"
        >
          {status && (
            <p
              className={`mb-4 ${
                status.includes("success")
                  ? "text-green-600"
                  : status.includes("offline")
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-400 focus:border-gray-600 outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-400 focus:border-gray-600 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-400 focus:border-gray-600 outline-none resize-none h-32"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-gray-600 text-white p-3 rounded-2xl hover:bg-gray-700 disabled:opacity-50 flex items-center justify-center"
          >
            {sending ? "Sending… Please wait" : "Let's Scale Your Outreach"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;