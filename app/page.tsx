"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function fetchCounter() {
      const res = await fetch("/api/counter");
      const data = await res.json();
      setCount(data.count || 0);
    }
    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    const res = await fetch("/api/counter", {
      method: "POST",
    });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Counter</h1>
        <h2 className="text-6xl font-extrabold text-gray-800 mb-8">{count}</h2>
        <button
          onClick={incrementCounter}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}
