import '../css/Edit.css'
import Header from '../components/Header'
import Button from '../components/Button'
// import { Routes, Route } from "react-router";
// import { useParams } from 'react-router'

function Edit() {
  // const params = useParams();
  // console.log(params);
  // const {id} = useParams();
  return (
    <div className='Edit'>
      <Header title={"일기 수정하기"}
        leftChild={ <Button type="POSITIVE" text={"긍정btn"} onClick={()=>{alert("POSITIVE Button");}} /> }
        rightChild={<Button type="NEGATIVE" text={"부정btn"} onClick={()=>{alert("NEGATIVE Button");}} />}
      />
      <h1> 새 일기 쓰기 화면</h1>
      <h1>Edit Page</h1>
      {/* <h1>{params.id}</h1>
      <h1>{id}번내용 출력</h1> */}
      <h1>Edit Page</h1>
    </div>
  )
}

export default Edit