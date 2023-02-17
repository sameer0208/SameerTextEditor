// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Route,Routes } from 'react-router-dom';
let fname = prompt("Arey apna naam likho ispr: ");
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }

  const toggleMode = ()=>{
      if(mode==='light' || mode==='red' || mode==='blue' || mode==='green'){
        setMode('dark');
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        showAlert("Dark Mode has been enabled","success");
        document.title='Sameer Text Editor - Dark';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Light Mode has been enabled","success");
        document.title='Sameer Text Editor - Light';
      }
  }
  const greenMode = ()=>{
    if(mode==='green'){
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode has been enabled","success");
      document.title='Sameer Text Editor - Light';
    }
    else{
      setMode('green');
      document.body.style.backgroundColor="#035503";
      document.body.style.color="white";
      showAlert("Green Mode has been enabled","success");
      document.title='Sameer Text Editor - Green';
    }
  }
    const redMode = ()=>{
      if(mode==='red'){
        setMode('light');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Light Mode has been enabled","success");
        document.title='Sameer Text Editor - Light';
      }
      else{
        setMode('red');
        document.body.style.backgroundColor="#690505";
        document.body.style.color="white";
        showAlert("Red Mode has been enabled","success");
        document.title='Sameer Text Editor - Red';
      }
    }
    
      const blueMode = ()=>{
        if(mode==='blue'){
          setMode('light');
          document.body.style.backgroundColor="white";
          document.body.style.color="black";
          showAlert("Light Mode has been enabled","success");
          document.title='Sameer Text Editor - Light';
        }
        else{
          setMode('blue');
          document.body.style.backgroundColor="#04045a";
          document.body.style.color="white";
          showAlert("Blue Mode has been enabled","success");
          document.title='Sameer Text Editor - Blue';
        }
      }
      

  return (
    <>
    
    <h1 className="center">Hi {fname}<br/>Welcome to Sameer Text Editor</h1>
    <Navbar item1="Home" item2="About" toggleMode={toggleMode} greenMode={greenMode} redMode={redMode} blueMode={blueMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the Text Here" toggleMode={toggleMode} greenMode={greenMode} redMode={redMode} blueMode={blueMode} showAlert={showAlert}/>}>
            
          </Route>
    </Routes>
      </div>
    </>
  );
}

export default App;
