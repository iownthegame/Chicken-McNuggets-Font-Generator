import React, { useState } from 'react';
import GithubCorner from 'react-github-corner';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    const value = e.target.value.trim();
    setText(value)

    if (!value) {
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
    const img = textImage.toImage(value);
    setImage(img);
    // console.log(img)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>麥克雞塊體產生器</h2>
        <div id="title">Chicken McNuggets Font Generator</div>
        <textarea placeholder="type your message here" rows="6" onChange={handleTextChange}></textarea>
        {image &&
          <>
            <div id="result" dangerouslySetInnerHTML={{ __html: image.outerHTML }} />
            <a className="download" download={`${text}.png`} href={image.src} target="_blank" rel="noreferrer">Download image</a>
          </>
        }
      </header>
      <GithubCorner href="https://github.com/iownthegame/Chicken-McNuggets-Font-Generator" />
    </div>
  );
}

export default App;
