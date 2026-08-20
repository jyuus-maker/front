import '../css/Home.css'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import Editor from './Editor';
// import { Routes, Route } from "react-router";

function Home() {
  return (
    <div className='Home'>
      <Header title={"Home"}
        // leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        // rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
        leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
      />
      {/* <h1>Home Page</h1> */}
      <div>
        <DiaryList />
        <Editor 
            initData={{date:new Date().getTime(), emotionId:1, content:"이전에 작성했던 일기" }}
            onSubmit={ ()=>{alert("작성 버튼 클릭함");} }/>
      </div>
    </div>
  )
}

export default Home