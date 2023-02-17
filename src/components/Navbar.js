import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
      <li><Link to="/">{props.item1}</Link></li>
      <li><Link to="/about">{props.item2}</Link></li>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'red':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.redMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
</div> */}
<div className={`text-${props.mode==='light'?'red':'light'}`}>
  <div className="btn-danger rounded mx-2" onClick={props.redMode} style={{height:'30px', width:'30px'}}></div>
</div>
<div className={`text-${props.mode==='light'?'blue':'light'}`}>
  <div className="btn-primary rounded mx-2" onClick={props.blueMode} style={{height:'30px', width:'30px'}}></div>
</div>

      {/* <div className={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.greenMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
</div> */}
<div className={`text-${props.mode==='light'?'green':'light'}`}>
  <div className="btn-success rounded mx-2" onClick={props.greenMode} style={{height:'30px', width:'30px'}}></div>
</div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </nav>
    </div>
  )
}
