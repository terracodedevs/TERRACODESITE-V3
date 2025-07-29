import TerraButton from "@/components/button"
import React, { useState} from 'react';

interface FormData {
  firstName: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
}

const Questions = () => {
     const [formdata, setData] = useState<FormData>({
        firstName: '',
        email: '',
        message: '',
        agreeToTerms: false
      });

       const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmits = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formdata);
    
    // Reset form after submission
    setData({
      firstName: '',
      email: '',
      message: '',
      agreeToTerms: false
    });
    
    alert('Thank you! Your message has been submitted successfully.');
  };
  return (
    <div className="flex justify-center">
    <div className="w-2/3 mx-auto px-4 py-12">
    <div className="space-y-6">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">Still Have Questions?</h2>
              <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light">We're Here to Help.</p>
            </div>

            <form onSubmit={handleSubmits} className="space-y-6">
              {/* First Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <label htmlFor="firstName" className="text-white text-xl font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formdata.firstName}
                    onChange={handleInputChanges}
                    placeholder="Enter First Name"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <label htmlFor="email" className="text-white text-xl font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleInputChanges}
                    placeholder="Enter your Email"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-4">
                <label htmlFor="message" className="text-white text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formdata.message}
                  onChange={handleInputChanges}
                  placeholder="Enter your Message"
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex md:flex-row items-center gap-3 justify-between">
                <div>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formdata.agreeToTerms}
                  onChange={handleInputChanges}
                  required
                  className="mt-1 w-4 h-4 text-[#f56d04] bg-neutral-800 border-neutral-600 rounded focus:ring-[#f56d04] focus:ring-2"
                />
                <label htmlFor="agreeToTerms" className="text-gray-300 text-xl mx-2">
                  I agree with Terms and Privacy Policy
                </label>
                </div>
                {/* Submit Button */}
                
              {/* <button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="flex w-1/3 items-center justify-between bg-amber-600 rounded-4xl p-6 text-2xl "
              >
                Submit
                <Send className="w-5 h-5" />
              </button> */}
              <TerraButton type='submit' label='Submit'    />
              </div>
            </form>
          </div>
        </div>
        </div>
        
  )
}

export default Questions