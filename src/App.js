import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [dailyWord, setDailyWord] = useState('');

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
    .then(res => res.json())
    .then(randoWord => setDailyWord(randoWord[0]))
  }, [])

  return (
    <div className="App">
      {dailyWord}    
    </div>
  );
}

export default App;
