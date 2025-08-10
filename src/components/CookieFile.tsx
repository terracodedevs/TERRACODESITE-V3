import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 z-50 inset-x-0 bg-white text-black p-4 md:px-8 md:py-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          We use cookies to improve your experience. By clicking Accept you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 border border-black text-black rounded hover:bg-white hover:text-black transition"
          >
            Decline
          </button>
          <Link to="/" className="underline text-nowrap text-sm hover:text-orange-400">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
