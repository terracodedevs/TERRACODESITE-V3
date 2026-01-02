import { useNavigate, useSearch } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle, Edit } from 'lucide-react';
import api from '@/api/axios';

const PaymentDetails = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false });
  
  interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    country: string;
    phoneNumber: string;
    currency: string;
    note: string;
    items: string;
    discountCode: string;
    amount: string;
    agreeToTerms: string;
  }
  
  const {
    firstName = '',
    lastName = '',
    companyName = '',
    email = '',
    phoneNumber = '',
    country = '',
    note = '',
    items = '',
    discountCode = '',
    amount = '0',
    currency = 'LKR',
    agreeToTerms = ''
  } = searchParams as FormData;

  const packageNames: { [key: string]: string } = {
    starter: 'Starter Package',
    professional: 'Professional Package',
    business: 'Business Package',
    custom: 'Custom Package'
  };

  const handleEdit = () => {
    navigate({ 
      to: '/payments',
      search: searchParams
    });
  };

  const handleConfirmPayment = async () => {
    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        email: email,
        phone: phoneNumber,
        address: " ",
        note: note,
        city: " ",
        country: country,
        items: items,
        agree_to_terms: Boolean(agreeToTerms),
        amount: amount,
        currency: currency,
      };
  
      const response = await api.post("api/payment-hash", payload);
  
      // Example: backend returns payment hash / redirect URL
      console.log("Payment initiated:", response.data);
  
      // Optional: navigate to payment gateway or success page
      // navigate({ to: "/payment-success", search: response.data });
  
    } catch (error: any) {
      console.error("Payment error:", error);
  
      const message =
        error?.response?.data?.message || "Payment initiation failed";
  
      alert(message);
    }
  };


  return (
    <div className="bg-black text-white font-lufga min-h-screen py-10 xl:py-20 px-4 md:px-4 mb-32">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate({ to: '/payments' })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Form
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#FDA10A]">
                Review Your Order
              </h1>
              <p className="text-xl text-gray-300 mt-2">Please review your details before confirming payment</p>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FDA10A] mb-4 pb-2 border-b border-neutral-700">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">First Name</p>
                <p className="text-white text-lg font-medium">{firstName}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Last Name</p>
                <p className="text-white text-lg font-medium">{lastName}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white text-lg font-medium">{email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                <p className="text-white text-lg font-medium">{phoneNumber}</p>
              </div>
              {country && (
                <div>
                  <p className="text-gray-400 text-sm mb-1">Country</p>
                  <p className="text-white text-lg font-medium">{country}</p>
                </div>
              )}
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FDA10A] mb-4 pb-2 border-b border-neutral-700">
              Company Information
            </h2>
            <div>
              <p className="text-gray-400 text-sm mb-1">Company Name</p>
              <p className="text-white text-lg font-medium">{companyName}</p>
            </div>
          </div>

          {/* Project Details */}
          {note && (
            <div>
              <h2 className="text-2xl font-semibold text-[#FDA10A] mb-4 pb-2 border-b border-neutral-700">
                Project Details
              </h2>
              <div>
                <p className="text-gray-400 text-sm mb-1">Note</p>
                <p className="text-white text-lg leading-relaxed">{note}</p>
              </div>
            </div>
          )}

          {/* Package Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FDA10A] mb-4 pb-2 border-b border-neutral-700">
              Package Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Selected Package</p>
                <p className="text-white text-lg font-medium">{packageNames[items] || 'N/A'}</p>
              </div>
              {discountCode && (
                <div>
                  <p className="text-gray-400 text-sm mb-1">Discount Code</p>
                  <p className="text-orange-400 text-lg font-medium">{discountCode}</p>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="bg-neutral-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#FDA10A] mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                <span className="text-gray-300 text-lg">Package</span>
                <span className="text-white text-lg font-medium">{packageNames[items]}</span>
              </div>
              {discountCode && (
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="text-gray-300 text-lg">Discount Applied</span>
                  <span className="text-orange-400 text-lg font-medium">{discountCode}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-4 bg-[#FDA10A]/10 rounded-lg px-4 mt-4">
                <span className="text-white text-2xl font-semibold">Total Amount</span>
                <span className="text-[#FDA10A] text-3xl font-bold">
                  {currency} {Number(amount).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-end">
          <button
            onClick={handleEdit}
            className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 border border-neutral-700"
          >
            <Edit className="w-5 h-5" />
            Return to Edit
          </button>
          <button
            onClick={handleConfirmPayment}
            className="flex items-center justify-center gap-2 border-2 border-orange-500
             hover:border-white text-orange-400 hover:bg-gradient-to-r from-[#f56d04] to-[#fb9709]
              hover:text-white transition-all font-extrabold duration-700 cursor-pointer px-8 py-3 rounded-full shadow-lg shadow-[#FDA10A]/20"
          >
            Confirm Payment
            <CheckCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;