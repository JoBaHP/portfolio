import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
/* import contact from "../public/assets/1.jpg"; */

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFeedback({ type: "idle", message: "" });
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: "info", message: "Sending your message..." });
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await fetch(
        "https://getform.io/f/cebb5ba3-4e44-40ec-b268-216f06385b9e",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setFeedback({
        type: "success",
        message: "Thanks for reaching out! I’ll get back to you shortly.",
      });
      setQuery({ name: "", email: "", message: "", phone: "", subject: "" });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFeedback({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or email me at jovan@build-up.us.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-[1240px] m-auto px-2 py-8 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 bg-white dark:bg-[#111827]">
            <div className="lg:p-4 h-full ">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 object-cover"
                  src="/assets/contact.jpg"
                  alt="contact-image"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority={false}
                />
              </div>
              <div>
                <h2 className="py-2">Jovan R.</h2>
                <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
                <p className="py-4 text-gray-600 dark:text-gray-300">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-gray-600 dark:text-gray-300">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/jovan-raosavljevic/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/JoBaHP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:jovan@build-up.us">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl lg:p-4 bg-white dark:bg-[#111827]">
            <div className="p-4">
              <form
                onSubmit={formSubmit}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-gray-600 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100 focus:outline-none focus:border-[#5651e5] focus:ring-1 focus:ring-[#5651e5] transition-colors"
                      type="text"
                      name="name"
                      value={query.name}
                      required
                      onChange={handleParam()}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 text-gray-600 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100 focus:outline-none focus:border-[#5651e5] focus:ring-1 focus:ring-[#5651e5] transition-colors"
                      type="text"
                      name="phone"
                      value={query.phone}
                      onChange={handleParam()}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100"
                    type="email"
                    name="email"
                    value={query.email}
                    onChange={handleParam()}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100"
                    type="text"
                    name="subject"
                    value={query.subject}
                    onChange={handleParam()}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-gray-600 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100 focus:outline-none focus:border-[#5651e5] focus:ring-1 focus:ring-[#5651e5] transition-colors"
                    rows="10"
                    name="message"
                    value={query.message}
                    onChange={handleParam()}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {feedback.type !== "idle" && (
                  <div
                    className={`mt-4 rounded-xl border p-4 text-sm font-medium ${feedback.type === "success"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400 dark:text-emerald-200"
                      : feedback.type === "error"
                        ? "border-rose-500 bg-rose-500/10 text-rose-700 dark:border-rose-400 dark:text-rose-200"
                        : "border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400 dark:text-indigo-200"
                      }`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">

            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#5651e5]"
                size={50}
              />
            </div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
