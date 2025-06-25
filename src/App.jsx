import { useState } from 'react';
import Hangman from './components/Hangman.jsx';
import Keyboard from './components/Keyboard.jsx';
import './index.css';

const words = ['react', 'javascript', 'vite', 'component', 'developer'];

export default function App() {
  const [word, setWord] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);
  const incorrect = guesses.filter(letter => !word.includes(letter));

  const handleGuess = (letter) => {
    if (guesses.includes(letter)) return;
    setGuesses([...guesses, letter]);
  };

  const isWinner = word.split('').every(l => guesses.includes(l));
  const isLoser = incorrect.length >= 6;

  const reset = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
  };

  return (
    <div className="container">
      <h1>Hangman</h1>
      <Hangman incorrect={incorrect.length} />
      <p className="word">
        {word.split('').map((l, i) => (
          <span key={i} className="letter">{guesses.includes(l) || isLoser ? l : '_'}</span>
        ))}
      </p>
      <Keyboard onGuess={handleGuess} guessed={guesses} disabled={isWinner || isLoser} />
      {(isWinner || isLoser) && (
        <div className="result">
          <p>{isWinner ? '🎉 You Won!' : '❌ You Lost!'}</p>
          <button onClick={reset}>Play Again</button>
        </div>
      )}
    </div>
  );
}
