import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("#EEF2E6");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const blackMode = () => {
    // dark
    setMode("#082032")
    document.body.style.backgroundColor = "#334756"
    showAlert(" Dark mode has been enabled", "success");
  }
  const greenMode = () => {
    // green
    setMode("#76BA99")
    document.body.style.backgroundColor = "#CED89E";
    showAlert(" Light mode has been enabled", "success");
  }
  const redMode = () => {
    // red
    setMode("#FA7070")
    document.body.style.backgroundColor = "#FBF2CF";
    showAlert(" Light mode has been enabled", "success");
  }
  const whiteMode = () => {
    // white
    setMode("#EEF2E6")
    document.body.style.backgroundColor = "white";
    showAlert(" Light mode has been enabled", "success");
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Welcome" about="About us" blackMode={blackMode} redMode={redMode} greenMode={greenMode} whiteMode={whiteMode} mode={mode} />
        <Alert alert={alert} />
      {/* <Routes>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode} />}>
          </Route>
        </Routes>
      </Router> */}
      <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode} />
    </>
  );
}

export default App;
