'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegCopy, FaShareAlt } from 'react-icons/fa';

export default function ChatBot() {
  const [messages, setMessages] = useState(
    new Array(10).fill('give me some examples of disabilities')
  );

  return (
    <div className="min-h-screen bg-[#0D0D11] text-white flex flex-col items-center justify-center p-6">
      {/* Sidebar */}
      <div className="absolute top-6 left-6 bg-[#1A1A1D] p-4 rounded-lg w-72">
        <h2 className="text-lg font-semibold">Today</h2>
        <div className="mt-2 space-y-2 overflow-auto max-h-80">
          {messages.map((msg, index) => (
            <p key={index} className="text-sm text-gray-400">
              {msg}
            </p>
          ))}
        </div>
        <button className="flex items-center text-sm text-gray-300 mt-3">
          <FaShareAlt className="mr-2" /> Share
        </button>
      </div>

      {/* Logo and Main Message */}
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image src="/logo.svg" alt="Kraftwave Logo" width={64} height={64} />
        </div>
        <h1 className="text-xl font-medium">How Can I Help You Today</h1>
      </div>

      {/* Message Input */}
      <div className="absolute bottom-10 flex items-center w-[60%] bg-[#18181B] p-4 rounded-lg">
        <input
          type="text"
          placeholder="message kraftwave..."
          className="flex-1 bg-transparent text-white outline-none"
        />
        <button className="text-white p-2">
          <FaRegCopy />
        </button>
        <button
          className="ml-3 text-white"
          onClick={() => setMessages([...messages, 'New message'])}
        >
          ✈️
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-2 text-xs text-gray-500">
        Breaking barriers for individuals with disabilities.
      </footer>
    </div>
  );
}
