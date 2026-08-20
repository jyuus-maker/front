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
      <div className='menu_wrapper flex p-0 m-0 mt-[10px] justify-between items-center gap-[20px]'>
        <div className='left_col'>
          <select className='w-[100px] text-[16px] py-[10px] px-[15px] bg-[rgb(236,236,236)] border-none rounded-[10px] outline-none cursor-pointer' value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((item, idx)=>
              <option key={idx} value={item.value}> {item.name} </option>
            )}
          </select>
        </div>
        <div className='right_col flex-1'>
          <Button type='POSITIVE' text={"새 일기 쓰기"} onClick={onClickNew} className='bt_LIST w-full'/>
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