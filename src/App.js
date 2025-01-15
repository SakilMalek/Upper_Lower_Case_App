import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  const [MyStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [btnText, setbtnText] = useState("Enable Dark Mode")
  const toggleStyle = () => {

    if (MyStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        // border: "2px solid",
        // borderColor: "yellow"
      })
      setbtnText("Enable Light Mode")
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtnText("Enable Dark Mode")

    }
  }

  const [Mode, setMode] = useState("light")
  const [Text, setText] = useState("Enable Dark Mode")
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      setText("Enable Light Mode")
      document.body.style.backgroundColor = "#263621"
    }
    else {

      setMode("light")
      setText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <>
      <BrowserRouter>
        <div >
          <Navbar Mode={Mode} toggleMode={toggleMode} Text={Text} />
          <Routes>
            <Route exact path="/about" element={<About Mode={Mode} toggleStyle={toggleStyle} btnText={btnText} />
            }>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text here to analyze" Mode={Mode} />
            }>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <div>
        <Navbar Mode={Mode} toggleMode={toggleMode} Text={Text} />
        <TextForm heading="Enter the text here to analyze" Mode={Mode} />
      </div> */}
    </>

  );
}

export default App;
