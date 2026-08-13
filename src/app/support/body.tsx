"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Upload, ShieldCheck, Globe, CreditCard, Info, MessageSquare, CheckCircle2 } from "lucide-react";

export default function BankTransferSupport() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'local' | 'international'>('local');

  // Form States integrated with your API structure
  const [formState, setFormState] = useState({ name: "", email: "", reference: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const bankDetails = {
    accountName: "Survivors INITIATIVE CBO",
    accountNo: "****************",
    bankName: "Cooperative Bank of Kenya",
    branch: "Busia",
    branchCode: "040",
    swift: "KCOOKENA", // Corrected official SWIFT (with letter O)
    swiftFull: "KCOOKENAXXX",
    bankAddressLocal: "P.O.BOX ************, Kenya",
    bankAddressIntl: "Co-operative House, Haile Selassie Avenue, P.O. Box 48231-00100, Nairobi, Kenya"
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage("");

    // Prepare content for your existing `/api/contact` API
    const donationPayload = {
      name: formState.name,
      email: formState.email,
      subject: `[Donation Receipt Submission] - ${formState.name}`,
      message: `Hello Survivors org Admin,\n\nI have submitted a direct bank donation. Here are my verification details:\n\n- Donor Name: ${formState.name}\n- Email: ${formState.email}\n- Location Selected: ${activeTab === 'local' ? 'Inside Kenya' : 'Outside Kenya'}\n- Transaction Reference / Receipt Note:\n${formState.reference}\n\nPlease verify this against your bank records.\n\nThank you!`
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch verification details. Please try again.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", reference: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden font-sans">
      {/* Decorative Blur Gradients matching your Contact page */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E61F72]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Title and Header Block */}
        <div className="space-y-4 mb-16 text-left">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#E63946]" />
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
              Support Our Mission
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 leading-[1.15]">
            Direct Bank <span className="font-semibold text-[#E63946]">Transfer</span>
          </h3>

          <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base max-w-2xl">
            You can support our advocacy, community programs, and grassroots initiatives directly through manual bank transfers. Safe, secure, and fully direct.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Block: Bank Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-neutral-100 shadow-[0_30px_70px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-100 text-[#E63946]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 text-lg">Official Survivors org Accounts</h4>
                <p className="text-xs text-neutral-500 font-light">Verify these details prior to transfer completion</p>
              </div>
            </div>

            {/* Local vs. International Toggle Tabs */}
            <div className="flex bg-neutral-100/70 p-1 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('local')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'local'
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-500 hover:text-neutral-800'
                  }`}
              >
                <CreditCard className="w-4 h-4" />
                Inside Kenya
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('international')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'international'
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-500 hover:text-neutral-800'
                  }`}
              >
                <Globe className="w-4 h-4" />
                Outside Kenya (Intl)
              </button>
            </div>

            {/* Details Fields */}
            <div className="space-y-6">
              {/* Account Name */}
              <div className="pb-4 border-b border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Account Name</span>
                <p className="text-neutral-800 font-semibold mt-1 text-sm md:text-base tracking-wide">{bankDetails.accountName}</p>
              </div>

              {/* Account Number with Clipboard Action */}
              <div className="pb-4 border-b border-neutral-100 flex justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Account Number</span>
                  <p className="text-neutral-900 font-bold text-lg md:text-xl mt-1 tracking-wider">{bankDetails.accountNo}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(bankDetails.accountNo, 'acc')}
                  className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-neutral-500 hover:text-[#E63946] transition-all duration-300 shrink-0"
                  title="Copy Account Number"
                >
                  {copiedField === 'acc' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Bank Name */}
              <div className="pb-4 border-b border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Bank Name</span>
                <p className="text-neutral-800 font-medium mt-1 text-sm md:text-base">{bankDetails.bankName}</p>
              </div>

              {activeTab === 'local' ? (
                <>
                  <div className="pb-4 border-b border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Branch Name & Code</span>
                    <p className="text-neutral-800 font-medium mt-1 text-sm md:text-base">
                      {bankDetails.branch} (Branch Code: {bankDetails.branchCode})
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Bank Branch Address</span>
                    <p className="text-neutral-600 text-xs md:text-sm font-light mt-1 leading-relaxed">{bankDetails.bankAddressLocal}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Corrected SWIFT block with Clipboard Action */}
                  <div className="pb-4 border-b border-neutral-100 flex justify-between items-center gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">SWIFT Code / BIC</span>
                      <p className="text-neutral-900 font-bold text-sm md:text-base mt-1 tracking-widest">{bankDetails.swift}</p>
                      <span className="text-[10px] text-neutral-400 block mt-1 font-light">Use {bankDetails.swiftFull} if your bank requires 11 characters</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankDetails.swift, 'swift')}
                      className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-neutral-500 hover:text-[#E63946] transition-all duration-300 shrink-0"
                      title="Copy SWIFT Code"
                    >
                      {copiedField === 'swift' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="pb-4 border-b border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Bank Head Office Address</span>
                    <p className="text-neutral-600 text-xs md:text-sm font-light mt-1 leading-relaxed">{bankDetails.bankAddressIntl}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Recipient Bank Branch Address</span>
                    <p className="text-neutral-600 text-xs md:text-sm font-light mt-1 leading-relaxed">{bankDetails.bankAddressLocal}</p>
                  </div>
                </>
              )}
            </div>

            {/* International Wire Warning/Remittance Suggestion */}
            {activeTab === 'international' && (
              <div className="mt-8 p-5 bg-neutral-50 border border-neutral-100 rounded-2xl flex gap-3.5">
                <Info className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Note for International Donors</h5>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    To bypass hefty wire transfer fees (which can reach up to $50 per transaction), we recommend using global modern remittance services such as <strong>Wise</strong>, <strong>Remitly</strong>, or <strong>WorldRemit</strong>. These let you deposit directly into our Co-operative Bank account instantly and securely with very minimal rates.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Block: Submission Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-neutral-100 shadow-[0_30px_70px_rgba(0,0,0,0.03)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="donation-verify-form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-1">
                      <h4 className="font-semibold text-neutral-800 text-base md:text-lg">Thank You for Your Support!</h4>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
                        We are incredibly grateful for your generosity. Please drop your details here so we can personally verify your transfer, ensure your gift goes directly to our community programs, and reach out to thank you properly!
                      </p>
                    </div>

                    {/* Name Input - Matching Contact styling */}
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

                    {/* Email Input - Matching Contact styling */}
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

                    {/* Transaction Reference / Memo Text Area */}
                    <div className="relative z-0 w-full group">
                      <textarea
                        rows={3}
                        required
                        disabled={isPending}
                        value={formState.reference}
                        onChange={(e) => setFormState({ ...formState, reference: e.target.value })}
                        className="block py-3 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E63946] transition-colors duration-300 resize-none peer disabled:opacity-50"
                        placeholder=" "
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-[#E63946] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
                        Transaction Ref / Bank Code / Message...
                      </label>
                    </div>

                    {errorMessage && (
                      <p className="text-xs font-semibold text-rose-500 bg-rose-50 border border-rose-100 rounded-xl p-4">
                        {errorMessage}
                      </p>
                    )}

                    {/* Action Button - Brand Matched */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={!isPending ? { y: -2 } : {}}
                        whileTap={!isPending ? { scale: 0.98 } : {}}
                        type="submit"
                        disabled={isPending}
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-xl w-full text-center cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                          <span>{isPending ? "Submitting..." : "Verify Donation"}</span>
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
                  /* Success Notification Layout - Matches style and animations of contact page */
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-neutral-900">Verification Sent!</h4>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm mx-auto">
                        Thank you for your generosity! Your donation notification was delivered securely to Survivors Org. Our audit team will cross-reference and verify it shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}