import '../css/DiaryList.css'
import Button from './Button'
import DiaryItem from './DiaryItem'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const sortOptionList = [
  {value: "latest", name:"최신순"},
  {value: "oldest", name:"등록순"},
]

function DiaryList({data}) {
  const [sortType, setSortType] = useState("latest"); //스테이트는 언제나 펑션의 최상단에 넣어야 함
  const navigate = useNavigate();

  const onChangeSortType = (e) =>{
    setSortType(e.target.value);
  }

  const onClickNew = ()=>{
    navigate("./new");
  }

  const getSortedData = ()=>{
    return data.toSorted((a, b)=>{
      if(sortType==="latest"){
        return Number(b.date) - Number(a.date)
      }else{
        return Number(a.date) - Number(b.date)
      }
    })
  }

  const sortedData = getSortedData();

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper FLEX'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((item, idx)=>
              <option key={idx} value={item.value}> {item.name} </option>
            )}
          </select>
        </div>
        <div className='right_col'>
          <Button type='POSITIVE' text={"새 일기 쓰기"} onClick={onClickNew} className='bt_LIST'/>
        </div>
      </div>
      <div className='list_wrapper'>
        {sortedData.map((item)=>
          <DiaryItem key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default DiaryList