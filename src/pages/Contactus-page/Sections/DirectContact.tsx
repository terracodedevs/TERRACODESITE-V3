const DirectContact = () => {
  return (
    <div className="bg-black text-white font-lufga mt-10 xl:mt-20 ">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">Direct Contact Details</h1>
          <p className="text-2xl text-gray-300">You can reach us directly through the following.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-8xl ">
            <div className="flex bg-neutral-900  rounded-3xl shadow-lg justify-center items-center px-6">
                <ul className="list-disc list-inside space-y-6 mt-4 ">
                    <li className="text-2xl">📧 Email: hello@terracodedev.com  </li>
                    <li className="text-2xl">📱 WhatsApp: +94 77 123 4567  </li>
                    <li className="text-2xl">📍 Office: Colombo, Sri Lanka </li>
                    <li className="text-2xl">🕐 Hours: Monday – Friday | 9:00 AM – 6:00 PM (GMT+5:30)</li>
                </ul>
            </div>
            <div>
                <img src="public/location.png" alt="Contact Us" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default DirectContact