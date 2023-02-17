import React,{useState} from "react";
import '../App.css';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!","success");
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!!","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopyClick = (event) =>{
        var text = document.getElementById("txtBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!!","success");
    }
    const handleExtraSpaceClick = (event) =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!!","success");
    }
    const [text,setText] = useState('Enter text here');
     const [mystyle,setMyStyle] = useState({
         color:"black",
         backgroundColor:"white"
     })
     const [btnText,setBtnText] = useState("Enable Dark Mode");
     let toggleStyle = ()=>{
         if(mystyle.color === "black"){
             setMyStyle({
                 color:"white",
                 backgroundColor:"black",
                 border: '1px solid white',
                 boxShadow:'1px 2px 5px black'
             })
             setBtnText("Enable Light Mode");
             props.showAlert("Text Editor is on Dark Mode!!","success");
         }
         else{
             setMyStyle({
                 color:"black",
                 backgroundColor:"white"
             })
             setBtnText("Enable Dark Mode");
             props.showAlert("Text Editor is on Light Mode!!","success");
         }
     }
  return (
    <>
    <div style={{backgroundColor:props.mode==='light'?'dark':'light'}}>
    <div className="container my-3">
        <button className="btn btn-dark" onClick={toggleStyle}>{btnText}</button></div>
      <div className="mb-3" style={{backgroundColor:props.mode==='light'?'dark':'light'}} >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="txtBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={mystyle}
        ></textarea>
      </div>
      <div style={{backgroundColor:props.mode==='light'?'dark':'light'}}>
      <button disabled={text.length===0} className="btn btn-primary ntbn" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-success ntbn" onClick={handleLowClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-danger ntbn" onClick={handleClearClick}>Clear All</button>
      <button disabled={text.length===0} className="btn btn-secondary ntbn" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.split(/[ ]+/).length!==3} className="btn btn-info ntbn" onClick={handleExtraSpaceClick}>Unwanted Space Removal</button>
      </div>
      
    </div>
    <div className="container" style={{backgroundColor:props.mode==='light'?'dark':'light'}}>
        <h4>Your Text Summary</h4>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in Text Box to preview it here"}</p>
    </div>
    </>
  );
}
