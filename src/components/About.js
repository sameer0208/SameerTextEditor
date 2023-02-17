import React from 'react'
import '../App.css';
// import official from '../images/official.jpg';
export default function About() {
  return (
    <div className='container'>
      <a href='https://www.linkedin.com/in/sayyed-sameer-basir-6b3195215/'><button type="button" className="btn btn-outline-primary my-4 ntbn" target="_blank">LinkedIn</button></a>
      <a href='https://www.youtube.com/@learningwithsameer2863/'><button type="button" className="btn btn-outline-danger my-4 ntbn" target="_blank">YouTube</button></a>
      <a href='https://www.instagram.com/sameer_k_0208/'><button type="button" className="btn btn-outline-warning my-4 ntbn" target="_blank">Instagram</button></a>
      <h1>SAYYED SAMEER BASIR</h1>
      <qoute>CEO & FOUNDER OF SAMEER TEXT EDITOR</qoute>
      {/* <img src={require(official).default} height={256} width={256}/> */}
    </div>
  )
}
