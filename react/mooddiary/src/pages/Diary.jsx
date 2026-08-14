import '../css/Diary.css'
import Header from '../components/Header'
import Button from '../components/Button'
// import { Routes, Route } from "react-router";

function Diary() {
  return (
    <div className='Diary'>
      <Header title={"다이어리 리스트"}
        leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
      />
      <h1>Diary Page</h1>
    </div>
  )
}

export default Diary