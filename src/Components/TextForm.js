import React, {useState} from "react";

export default function TextForm(){
    const convertToUppercase = () => {
        console.log("Converted to Uppercase");
        let convertedText = text.toUpperCase();
        setText(convertedText);
    }

    const convertIt=(event)=>{
    console.log("Converting");
    setText(event.target.value)
    }
    const [text, setText] = useState("Enter text to convert")   
    return (
        <div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form">Enter the text</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={convertIt}></textarea>
                <button type="button" placeholder={text} onClick = {convertToUppercase}>Uppercase</button>
            </div>
        </div>
    )
}