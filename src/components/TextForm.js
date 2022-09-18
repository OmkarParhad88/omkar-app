import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted in upper case", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted in lower case", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const titleClick = () => {
    const convert = (item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    }
    let arr = text.split(" ")
    setText(arr.map(convert).join(" "))
    props.showAlert(" Converted in title case", "success")
  }
  const clearClick = () => {
    setText("")
    props.showAlert(" Text was cleared", "danger")
  }
  return (
    <>
      <div className="mb-3 container" style={{ color: props.mode === "#082032" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-2" style={{ background: props.mode === "#082032" ? "gray" : "white" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={titleClick}>Convert to TitleCase</button>
        <button className="btn btn-danger mx-1" onClick={clearClick}>Clear all Text</button>
      </div> 
      <div className="container my-2" style={{ color: props.mode === "#082032" ? "white" : "black" }}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string
}

export default TextForm

