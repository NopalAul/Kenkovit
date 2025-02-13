"use client";

import { useState } from "react";
import { toast, ToastContainer, Zoom } from 'react-toastify'
// import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "6190642e-70b0-4ee4-b957-344f80eacbfa",
  });

  const [status, setStatus] = useState({ submitting: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success('Message sent successfully!')
      setStatus({ submitting: false });
      setFormData({ name: "", email: "", message: "", access_key: "6190642e-70b0-4ee4-b957-344f80eacbfa" });
    } else {
      toast.error('Something went wrong. Please try again.')
      setStatus({ submitting: false });
    }
  };

  return (
    <>
    <ToastContainer
      position="top-center"
      hideProgressBar={true}
      transition={Zoom}
      autoClose={3000} 
      draggable
      toastClassName={() => "flex justify-center align-center w-full py-6 px-[5vw] md:px-6 rounded-lg shadow-md bg-white text-gray-700 font-sans"}
    />

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-2xl md:text-3xl font-medium text-purple1 mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink1"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full bg-purple1 text-white py-2 rounded-lg font-medium hover:bg-purple2 transition"
        >
          {status.submitting ? "Sending..." : "Send Message"}
        </button>

        {/* {status.success === true && (
          <p className="text-green-600 text-sm text-center mt-2">Message sent successfully!</p>
        )}
        {status.success === false && (
          <p className="text-red-600 text-sm text-center mt-2">Something went wrong. Try again.</p>
        )} */}
      </form>
    </div>
    </>
  );
}
