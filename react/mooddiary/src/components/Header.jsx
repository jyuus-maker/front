import '../css/Header.css'
// import { Routes, Route } from "react-router";

function Header({leftChild, title, rightChild}) {
  return (
    <div className='Header'>
      <div className='header_left'>
        <button>{leftChild}</button>
      </div>
      <div className='header_title'>{title}</div>
      <div className='header_right'>
        <button>{rightChild}</button>
      </div>
    </div>
  )
}

export default Header