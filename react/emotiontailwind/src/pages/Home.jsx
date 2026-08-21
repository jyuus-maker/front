import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
// import { useContext, useEffect, useState } from 'react'
// import { getMonthRangeDate } from '../util/getMonthRangeDate.js'
// import { DiaryStateContext } from '../App';

function Home() {
//   const data = useContext(DiaryStateContext);
//   const [pivotDate, setPivotDate] = useState(new Date());
//   const [filteredData, setFilteredData] = useState([]); //초기에는 빈배열을 넣어준다
  
//   useEffect(()=>{//관련있는 변경사항 외에는 리랜더 안할것들
//     if(data.length >=1){ //배열이 1개 이상일 때만.
//       const {beginTimeStamp, endTimeStamp} = getMonthRangeDate(pivotDate);
//       setFilteredData(
//         data.filter((item)=> beginTimeStamp <= Number(item.date) && Number(item.date) <= endTimeStamp)
//       );
//     }else{ //갖고올 배열이 없을 경우 빈배열 리턴
//       setFilteredData([]);
//     }
//   },[data, pivotDate])


//   //헤더부분-----------------------------------------
//   const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;
//   //왼쪽오른쪽
//   const onDecreaseMonth = ()=>{
//     setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1))
//   };     
//   const onIncreaseMonth = ()=>{
//     setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
//   };


return (
    <div className='bg-zinc-100 min-h-screen flex justify-center p-4 p-t-2'>
        <div className='bg-white w-2xl mx-auto shadow-sm rounded-3xl p-4'>
            <Header title={"MOOD DIARY"}
            leftChild ={<Button type="CIRCLE" text={"<"} />}
            rightChild={<Button type="CIRCLE" text={">"} />}
            />
            <DiaryList />
            {/* <DiaryList data={filteredData} /> */}
        </div>
    </div>
  )
}

export default Home
{/* 
<Button text={"< 뒤로가기"} type="POSITIVE" />
<Button text={"앞으로가기 >"} type="NEGATIVE" />
<Button text={"<"} type="CIRCLE" />
*/}

//   return (
//     <div className='Home'>
//       <Header title={headerTitle} 
//         leftChild ={<Button type="" className='bt_CIRCLE' text={"<"} onClick={onDecreaseMonth} />}
//         rightChild={<Button type="" className='bt_CIRCLE' text={">"} onClick={onIncreaseMonth} />}
//       />
//       <DiaryList data={filteredData} />
//     </div>
//   )