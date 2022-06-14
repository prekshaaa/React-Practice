import React, {useState} from "react";

export default function TextForm(){
    const convertToUppercase = () => {
        console.log("Converted to Uppercase");
        let convertedText = text.toUpperCase();
        setText(convertedText);
    }

    const convertToLowercase = () => {
        console.log("Converted to Lowercase");
        let convertedText = text.toLowerCase();
        setText(convertedText);
    }

    const convertIt=(event)=>{
    console.log("Converting");
    setText(event.target.value)
    }
    const [text, setText] = useState("Enter text to convert")   
    return (
        <>
        <div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form">Enter the text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={convertIt}></textarea>
                <button type="btn btn primary mx-3" placeholder={text} onClick = {convertToUppercase}>Uppercase</button>
                <button type="btn btn primary mx-3" placeholder={text} onClick = {convertToLowercase}>Lowercase</button>
            </div>
        </div>
        <div className="container my-4">
            <h2>Text Summary</h2>
            <p>Words: {text.split("").length} , Characters: {text.length} , Reading Time: {0.008*text.split("").length} Minutes  </p>
        </div>
        </>
    )
}