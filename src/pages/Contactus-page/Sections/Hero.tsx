import TerraButton from '@/components/button'
import { Rocket } from 'lucide-react'
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
}

const Hero = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        message: '',
        agreeToTerms: false
      });

      const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        
        // Reset form after submission
        setFormData({
          firstName: '',
          email: '',
          message: '',
          agreeToTerms: false
        });
        
        alert('Thank you! Your message has been submitted successfully.');
      };

  return (
    <div className="bg-black text-white font-lufga mt-10 xl:mt-20 px-4 md:px-4 container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  items-center'>
        {/* Left Side - Intro Text */}
        <div className="flex flex-col  gap-4">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-4 lg:w-fit max-w-md xl:w-full text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className="xl:w-10 xl:h-10 text-[#FDA10A] mr-4" />
                <h1 className=" text-xl xl:text-2xl text-nowrap ">We’d love to hear from you.</h1>
            </div>
            <div className="flex flex-col mt-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">Let’s Build Something<br />Brilliant.</h1>
                <p className="text-2xl text-gray-300 mt-4">Drop Us a Message</p>
                <p className="text-lg text-gray-400 mt-2">We’ll get back to you within 24 hours.</p>
            </div>
        </div>
        {/* Right Side - Contact Form */}
        <div>
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Email Row */}
              <div className="grid gap-4">
                <div className="flex flex-col  space-y-4">
                  <label htmlFor="firstName" className="text-white text-xl font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputsChange}
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
                    value={formData.email}
                    onChange={handleInputsChange}
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
                  value={formData.message}
                  onChange={handleInputsChange}
                  placeholder="Enter your Message"
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex flex-col justify-start items-start md:flex-row md:items-center gap-3 md:justify-between">
                <div>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputsChange}
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
        </div>

  )
}

export default Hero