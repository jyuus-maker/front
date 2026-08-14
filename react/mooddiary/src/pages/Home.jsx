import '../css/Home.css'
import Header from '../components/Header'
import Button from '../components/Button'
// import { Routes, Route } from "react-router";

function Home() {
  return (
    <div className='Home'>
      <Header title={"Home"}
        leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
      />
      <h1>Home Page</h1>
    </div>
  )
}

export default Home