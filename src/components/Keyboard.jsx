import React from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function Keyboard({ onGuess, guessed, disabled }) {
  return (
    <div className="keyboard">
      {letters.map((l) => (
        <button
          key={l}
          onClick={() => onGuess(l)}
          disabled={guessed.includes(l) || disabled}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
