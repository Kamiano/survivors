"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactBody() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      // Parse JSON from the server to extract exact API validation failures
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch email payload. Please try again.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsPending(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "carole@survivors.or.ke",
      description: "For general inquiries, partnerships, and advocacy initiatives.",
      href: "mailto:carole@survivors.or.ke"
    },
    {
      icon: Phone,
      title: "Call Direct",
      value: "+254 724 352 288",
      description: "Mon-Fri from 8:00 AM to 5:00 PM EAT.",
      href: "tel:+254724352288"
    },
    {
      icon: MapPin,
      title: "Our Headquarters",
      value: "Busia Road opposite Kenya Power Office",
      description: "In community hubs and advocacy centers globally.",
      href: "#"
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E61F72]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">

        {/* Title and Header Block */}
        <div className="space-y-4 mb-12 text-left">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#E63946]" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
              Connect With Us
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 leading-[1.15]">
            Let&apos;s build something <span className="font-semibold text-[#E63946]">powerful</span> together.
          </h3>

          <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base max-w-2xl">
            Have questions about our core programs, looking to collaborate on grassroots initiatives, or seeking support? Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Form Card Frame */}
        <div className="w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-neutral-100 shadow-[0_30px_70px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        required
                        disabled={isPending}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="block py-3 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E63946] transition-colors duration-300 peer disabled:opacity-50"
                        placeholder=" "
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-[#E63946] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
                        Your Full Name
                      </label>
                    </div>

                    {/* Email Input */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="email"
                        required
                        disabled={isPending}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="block py-3 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E63946] transition-colors duration-300 peer disabled:opacity-50"
                        placeholder=" "
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-[#E63946] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      required
                      disabled={isPending}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="block py-3 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E63946] transition-colors duration-300 peer disabled:opacity-50"
                      placeholder=" "
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-[#E63946] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
                      Subject Line
                    </label>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative z-0 w-full group">
                    <textarea
                      rows={4}
                      required
                      disabled={isPending}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="block py-3 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E63946] transition-colors duration-300 resize-none peer disabled:opacity-50"
                      placeholder=" "
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-[#E63946] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
                      Write your message here...
                    </label>
                  </div>

                  {/* Operational Error Prompt */}
                  {errorMessage && (
                    <p className="text-xs font-semibold text-rose-500 bg-rose-50 border border-rose-100 rounded-lg p-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* Action Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={!isPending ? { y: -2 } : {}}
                      whileTap={!isPending ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isPending}
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-xl w-full sm:w-auto text-center cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span>{isPending ? "Sending..." : "Send Message"}</span>
                        {!isPending && (
                          <MessageSquare size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        )}
                      </span>
                      {!isPending && (
                        <div className="absolute inset-0 translate-y-full bg-[#E63946] transition-transform duration-300 group-hover:translate-y-0" />
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                /* Success Notification Layout */
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-4"
                >
                  <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-neutral-900">Message Dispatched!</h4>
                    <p className="text-sm text-neutral-500 font-light max-w-sm">
                      Thank you for reaching out to Survivors Organization. Our team has received your details securely and will follow up shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={i}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col items-start p-5 rounded-2xl border border-neutral-100 bg-neutral-50/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-white border border-neutral-100 text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300 shadow-2xs mb-4">
                  <Icon size={16} />
                </div>
                <div className="space-y-1 w-full">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {method.title}
                  </h4>
                  <p className="text-sm font-semibold text-neutral-800 group-hover:text-[#E63946] transition-colors truncate">
                    {method.value}
                  </p>
                  <p className="text-xs text-neutral-500 font-light leading-snug">
                    {method.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}