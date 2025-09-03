import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

// Toast Types
type ToastType = 'success' | 'error';

// Toast Component Props
interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

// Toast Context Props
interface ToastContextProps {
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}

// Create Context
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Toast Component
const ToastComponent: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-dismiss after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex items-center justify-between w-full max-w-xs p-4 rounded-lg shadow-lg transition-all duration-300 animate-fade-in"
      style={{
         backgroundColor: type === 'success' ? '#FDA10A' : '#FDA10A',
      }}
    >
      <div className="flex items-center">
        {type === 'success' ? (
          <CheckCircle className="w-6 h-6 mr-2 text-white" />
        ) : (
          <XCircle className="w-6 h-6 mr-2 text-red-300" />
        )}
        <p className="text-white font-medium">{message}</p>
      </div>
      <button onClick={onClose} className="text-white hover:text-gray-200">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

// Toast Provider Props
interface ToastProviderProps {
  children: ReactNode;
}

// Toast Provider
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('success');

  const showToast = (message: string, type: ToastType) => {
    setMessage(message);
    setType(type);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastComponent
        message={message}
        type={type}
        isVisible={isVisible}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
};

// Custom hook to use Toast
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Export all needed parts
export default {
  ToastProvider,
  useToast
};