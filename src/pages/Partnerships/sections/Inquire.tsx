import TerraButton from "@/components/button";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/toast";

interface FormData {
  firstName: string;
  email: string;
  package: string;
  businessName: string;
  businessStage: string;
  website: string;       // optional
  meetingDate: string;
  message: string;
  notes: string;         // optional
  agreeToTerms: boolean;
}

interface InquireProps {
  defaultPackage?: string;
  onClose?: () => void;
}

const Inquire = ({ defaultPackage = "", onClose }: InquireProps) => {
  const { showToast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    package: defaultPackage,
    businessName: "",
    businessStage: "",
    website: "",
    meetingDate: "",
    message: "",
    notes: "",
    agreeToTerms: false,
  });

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const {
      firstName,
      email,
      package: selectedPackage,
      businessName,
      businessStage,
      meetingDate,
      message,
      agreeToTerms,
    } = formData;

    // Validate required fields
    if (
      !firstName ||
      !email ||
      !selectedPackage ||
      !businessName ||
      !businessStage ||
      !meetingDate ||
      !message
    ) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    if (!agreeToTerms) {
      showToast("Please agree with Terms and Privacy Policy.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(String(serviceId), String(templateId), formRef.current, {
        publicKey: String(publicKey),
      });

      showToast("Thank you! Your message has been sent successfully.", "success");

      // Reset form
      setFormData({
        firstName: "",
        email: "",
        package: defaultPackage,
        businessName: "",
        businessStage: "",
        website: "",
        meetingDate: "",
        message: "",
        notes: "",
        agreeToTerms: false,
      });

      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      showToast("Oops! Something went wrong. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center container mx-auto font-lufga">
      <div className="md:w-10/12 px-4 py-9 relative max-h-[90vh]">
        {/* Scrollable form container */}
        <div className="space-y-6 overflow-y-auto scrollbar-hide pr-2 max-h-[90vh]">
          {/* Heading */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FDA10A] font-light">
              Let’s Talk About Your Business
            </h2>
            <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light max-w-3xl">
              Share a few details and choose a convenient date. Our team will review your request and
              reach out to confirm the meeting.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <label className="text-white text-xl font-medium">Tell us your name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChanges}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-white text-xl font-medium">Where can we reach you?</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChanges}
                  placeholder="Your email or phone number"
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
                />
              </div>
            </div>

            {/* Package */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-xl font-medium">Partnership Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleInputChanges}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
              >
                <option value="Founder Growth Partnership">Founder Growth Partnership</option>
                <option value="Gold Partnership">Gold Partnership</option>
                <option value="Elite Partnership">Elite Partnership</option>
              </select>
            </div>

            {/* Business Name */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-xl font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChanges}
                placeholder="Your business or company name"
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
              />
            </div>

            {/* Business Stage */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-xl font-medium">Current Business Stage</label>
              <select
                name="businessStage"
                value={formData.businessStage}
                onChange={handleInputChanges}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
              >
                <option value="">Select stage</option>
                <option>Startup</option>
                <option>Growing Business</option>
                <option>Scaling Business</option>
                <option>Enterprise</option>
              </select>
            </div>

            {/* Website / Social Page (Optional) */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-xl font-medium">Website or Social Page</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChanges}
                placeholder="Website, LinkedIn, Instagram, or any relevant link"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300"
              />
            </div>

            {/* Meeting Date */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-xl font-medium">Preferred Meeting Date</label>
              <input
                type="date"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleInputChanges}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300 appearance-none"
              />
            </div>

            {/* Main Message */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-lg font-medium">
                Tell us about your business
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChanges}
                placeholder="Tell us about your business, your current systems, and what you want to improve..."
                rows={6}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300 resize-none"
              />
            </div>

            {/* Optional Notes */}
            <div className="flex flex-col space-y-4">
              <label className="text-white text-lg font-medium">Optional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChanges}
                placeholder="Anything else you would like us to review before the meeting"
                rows={4}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] transition-all duration-300 resize-none"
              />
            </div>

            {/* Terms + Submit */}
            <div className="flex flex-col justify-start items-start md:flex-row md:items-center gap-3 md:justify-between">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChanges}
                  className="mr-2"
                  required
                />
                <label className="text-gray-300 text-lg">I agree with Terms and Privacy Policy</label>
              </div>

              <TerraButton
                type="submit"
                label={isSubmitting ? "Sending..." : "Submit"}
                iconSrc={isSubmitting ? "" : "/button/Arrow.svg"}
                isLoading={isSubmitting}
              />
            </div>
          </form>
        </div>

        {/* Scroll down arrow */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <svg
            className="w-6 h-6 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Inquire;