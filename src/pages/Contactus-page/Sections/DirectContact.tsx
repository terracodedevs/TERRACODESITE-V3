const DirectContact = () => {
  return (
    <div className="bg-black text-white font-lufga mt-10 xl:mt-20 px-4 md:px-0">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">Direct Contact Details</h1>
          <p className="text-2xl text-gray-300">You can reach us directly through the following.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-8xl ">
            <div className="flex bg-neutral-900  rounded-3xl shadow-lg justify-center items-center p-5 md:px-6 hover:scale-105 transition-transform duration-300">
                <ul className=" space-y-4 md:space-y-6 mt-4 ">
                    <li className="text-lg md:text-2xl">📧 Email: hello@terracodedev.com  </li>
                    <li className="text-lg md:text-2xl">📱 WhatsApp: +94 77 123 4567  </li>
                    <li className="text-lg md:text-2xl">📍 Office: Colombo, Sri Lanka </li>
                    <li className="text-lg md:text-2xl">🕐 Hours: Monday – Friday | 9:00 AM – 6:00 PM (GMT+5:30)</li>
                </ul>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 rounded-4xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1175515283394!2d79.93532640131858!3d6.845155728964695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcebb7c6e1b%3A0xa39d7c508900de37!2sTerracode%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1753870091525!5m2!1sen!2slk"   loading="lazy" className="rounded-4xl w-full h-[300px] invert-[0.91] hue-rotate-180" ></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DirectContact