import React, { useState } from 'react';
import GithubCorner from 'react-github-corner';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value)

    if (!e.target.value) {
      setImage(null)
      return
    }

    const style = {
      font: 'Chicken_McNuggets',
      align: 'center',
      size: 20,
      background: 'transparent',
      lineHeight: '1.6em',
    };
    const textImage = window.TextImage(style);
    const img = textImage.toImage(e.target.value);
    setImage(img);
    // console.log(img)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Chicken McNuggets Font Generator</p>
        <textarea placeholder="type your message here" rows="6" onChange={handleTextChange}></textarea>
        {image &&
          <>
            <div id="result" dangerouslySetInnerHTML={{ __html: image.outerHTML }} />
            <a download={`${text}.png`} href={image.src} target="_blank" rel="noreferrer">Download image</a>
          </>
        }
      </header>
      <GithubCorner href="https://github.com/iownthegame/Chicken-McNuggets-Font-Generator" />
    </div>
  );
}

export default App;
