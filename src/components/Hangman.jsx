import React from 'react';

export default function Hangman({ incorrect }) {
  return (
    <div className="hangman">
      <p>Incorrect Guesses: {incorrect} / 6</p>
    </div>
  );
}
