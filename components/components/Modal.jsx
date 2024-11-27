// components/Modal.js   whatsapp
import React from 'react';
import { useLanguageContext } from '@/context/languageContext';
const Modal = ({ isOpenW, onCloseW, message }) => {
  if (!isOpenW) return null;

  const {language} = useLanguageContext()

  return (
    <div className="fixed w-56 flex items-center justify-center bg-opacity-50 right-10  bottom-20">
      <div className="bg-[#F3F3F3] rounded-lg p-6 1shadow-lg">
        {/* <h2 className="text-lg font-bold mb-4">Welcome to our SANDnSEA website</h2> */}
        <p className=''>{message}</p>
        <button
          onClick={onCloseW}
          className="mt-4 primary-btn1 text-white px-4 py-2 rounded"
        >
  {language === "en" ? "Close":"Fermer"}        
        </button>
      </div>
    </div>
  );
};

export default Modal;