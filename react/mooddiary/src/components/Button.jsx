import '../css/Button.css'
// import { Routes, Route } from "react-router";

function Button({type, text, onClick}) {
  return (
      <button className={type ? `btn_${type}` : ''} onClick={onClick}>{text}</button>
  )
}

export default Button