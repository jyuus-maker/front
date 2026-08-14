// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { Link, Routes, Route } from "react-router";
// import { useParams } from 'react-router'
import emotion1 from "./assets/images/emotion1.png"
import emotion2 from "./assets/images/emotion2.png"
import emotion3 from "./assets/images/emotion3.png"
import emotion4 from "./assets/images/emotion4.png"
import emotion5 from "./assets/images/emotion5.png"


function App() {
//   //사용방법1
//   const params = useParams();
//   //사용방법2
//   const {id} = useParams();
  return (
    <div className='App'>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/edit"}>Edit</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      {/* 임포트로 불러오는 이미지 */}
      <div>
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
      </div>

      <Routes> {/* 끝에 -s가 붙어야 함 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
