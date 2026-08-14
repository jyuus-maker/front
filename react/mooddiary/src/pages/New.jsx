import '../css/New.css'
import Header from '../components/Header'
import Button from '../components/Button'
// import { Routes, Route } from "react-router";
// import { useSearchParams } from 'react-router'

function New() {
  return (
    <div className='New'>
      <Header title={"새 일기 쓰기"}
        leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
      />
      <h1> 새 일기 쓰기 화면</h1>
    </div>
  )
}

export default New