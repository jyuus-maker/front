import '../css/Button.css'
// import { Routes, Route } from "react-router";

function Button({type='', text, onClick, className = ''}) {
  return (
      // <button className={type ? `btn_${type}` : ''} onClick={onClick}>{text}</button>
      <button className={`btn ${type ? `btn_${type}` : ''} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button


// <div className='FLEX'>
//   <button className='btn_POSITIVE'>버튼</button>
//   <button className='btn_NEGATIVE'>버튼</button>
//   <button className=''>버튼</button>
//   <button className='btn_POSITIVE bt_LIST'>수정하기</button>
//   <button className='btn_NEGATIVE bt_LIST'>수정하기</button>
//   <button className='bt_LIST'>수정하기</button>
// </div>
// <div className='FLEX'>
//   <button className='btn_POSITIVE bt_CIRCLE'>◀&nbsp;</button>
//   <button className='btn_POSITIVE bt_CIRCLE'>&nbsp;▶</button>
//   <button className='btn_NEGATIVE bt_CIRCLE'>◀&nbsp;</button>
//   <button className='btn_NEGATIVE bt_CIRCLE'>&nbsp;▶</button>
//   <button className='bt_CIRCLE'>◀&nbsp;</button>
//   <button className='bt_CIRCLE'>&nbsp;▶</button>
// </div>