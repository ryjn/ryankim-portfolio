import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = ({ menuOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // disable refresh on submit
    try {
      // send "new message notice" email (to me)
      const emailToUser = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID_AUTO_REPLY,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      const emailToMe = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID_NEW_MSG,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      alert("Message sent succesfully!");
      console.log(
        "Message to user sent succesfully",
        emailToUser.status,
        emailToUser.text,
      );
      console.log(
        "Notice of new message sent successfully",
        emailToMe.status,
        emailToMe.text,
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
      console.error("Message sending failed", error);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 ${menuOpen ? "opacity-20" : "opacity-100"}`}
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded ont-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
