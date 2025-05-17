import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative h-screen bg-gray-900 text-white flex items-center justify-center text-center">
      {/* Blurry top bar (stays fixed) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gray-800 bg-opacity-30 backdrop-blur-lg shadow-md flex items-center justify-center">
        <h2 className="text-xl font-semibold">My Portfolio</h2>
      </div>

      {/* Content that fades up */}
      <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Showcasing my data analytics projects</p>

        {/* Button */}
        <button onClick={handleClick} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Check Out →
        </button>
      </div>
    </div>
  );
}

export default App
