import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] text-gray-900 px-6 pt-12 pb-24 flex flex-col items-center">
      <header className="w-full max-w-6xl flex items-center justify-between py-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold tracking-tight">Mason Ventures</h1>
        <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm">
          Get a Free Quote
        </button>
      </header>

      <main className="w-full max-w-6xl mt-20 text-center">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Sell Your Mineral Rights With Confidence
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          We buy mineral rights across Texas. Mason Ventures offers a streamlined, transparent process and competitive offers.
        </p> 
        <button className="text-lg px-8 py-4 bg-blue-800 text-white rounded-full">
          Request an Offer
        </button>
      </main>

      <section className="mt-32 w-full max-w-6xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Why Mason Ventures?</h3>
        <p className="text-md text-gray-700 mb-2">✔ Fast, no-hassle quotes</p>
        <p className="text-md text-gray-700 mb-2">✔ Trusted by mineral owners across Texas</p>
        <p className="text-md text-gray-700 mb-2">✔ Texas-based team with deep local knowledge</p>
      </section>

      <footer className="mt-32 text-center text-sm text-gray-500">
        <p>Email: info@masonventures.com | Phone: (123) 456-7890</p>
        <p>© {new Date().getFullYear()} Mason Ventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
