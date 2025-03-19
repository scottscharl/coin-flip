import React, { useState } from 'react';
import { Landmark, Moon, Sun } from 'lucide-react';
import HeadsImage from './components/HeadsImage.tsx';
import './App.css';

function App() {
  const [flip, setFlip] = useState<'heads' | 'tails' | null>(null);
  const [flipCounter, setFlipCounter] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleFlip() {
    setIsFlipping(true);

    // Hide the result during animation
    const result = Math.random() >= 0.5 ? 'heads' : 'tails';

    // End animation after it completes and show result
    setTimeout(() => {
      setIsFlipping(false);
      setFlip(result);
      setFlipCounter(flipCounter + 1);
    }, 800);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-amber-100' : 'bg-gradient-to-b from-amber-50 to-amber-100'}`}
    >
      <nav
        className={`p-6 text-center relative ${darkMode ? 'text-amber-300 border-amber-800 bg-gray-800' : 'text-amber-800 border-amber-200 bg-amber-50'} border-b shadow-sm`}
      >
        <div className="absolute right-4 top-6">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-amber-300' : 'bg-amber-200 text-amber-800'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <h1 className="text-2xl font-bold">Coin Flip</h1>
      </nav>

      <main className="mx-auto flex flex-col items-center justify-center flex-grow p-8 gap-4">
        <div
          className={`relative w-32 h-32 mb-8 perspective-500 ${isFlipping ? 'animate-flip' : ''}`}
          style={{ borderRadius: '50%', overflow: 'hidden' }}
        >
          <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-400 border-amber-600 shadow-lg border-4 rounded-full coin-face">
            {!isFlipping && (
              <>
                {flip === 'heads' ? (
                  <HeadsImage darkMode={false} />
                ) : flip === 'tails' ? (
                  <Landmark size={64} color="#B45309" />
                ) : (
                  <span className="text-xl font-bold text-amber-800">?</span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col mx-auto items-center">
          <button
            className={`px-6 py-3 ${darkMode ? 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500' : 'bg-amber-700 hover:bg-amber-800 focus:ring-amber-600'} text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mb-6`}
            onClick={handleFlip}
            disabled={isFlipping}
          >
            {isFlipping ? 'Flipping...' : 'Flip the coin'}
          </button>
          <div
            className={`text-lg font-medium ${darkMode ? 'bg-gray-800 text-amber-100' : 'bg-white text-amber-900'} px-4 py-2 rounded-lg shadow`}
          >
            Number of flips:{' '}
            <span
              className={`font-bold ${darkMode ? 'text-amber-300' : 'text-amber-600'}`}
            >
              {flipCounter}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
