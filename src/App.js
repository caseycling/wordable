import { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';

import './App.css';

function App() {
  const [dailyWord, setDailyWord] = useState('');
  const [guess, setGuess] = useState([]);

  const getDailyWord = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then(res => res.json())
      .then(randoWord => setDailyWord(randoWord[0]));
  };

  const captureKeyDown = (event) => {
    const letter = event.key;

    if (letter === 'Backspace') {
      setGuess((prevGuess) => prevGuess.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(letter)) {
      setGuess((prevGuess) => [...prevGuess, letter.toUpperCase()]);
      console.log(guess)
    }
  };

  useEffect(() => {
    getDailyWord();
    window.addEventListener('keydown', captureKeyDown);

    console.log(guess)
    
    return () => {
      window.removeEventListener('keydown', captureKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <Grid captureKeyDown={captureKeyDown} guess={guess} />
      <div>{guess.join('')}</div>
    </div>
  );
}

export default App;