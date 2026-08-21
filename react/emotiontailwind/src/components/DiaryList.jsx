import Button from './Button'
import DiaryItem from './DiaryItem'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const sortOptionList = [
  {value: "latest", name:"최신순"},
  {value: "oldest", name:"등록순"},
]

// 목 데이터는 전역으로 처리한다-----디자인 확인용 임시코드-----------
const mockData = [
  //isDone : 체크박스 확인. false는 unchecked.
  { id:0, date:new Date(2026, 8-1, 2).getTime(), emotionId:1, content:"나의 감정을 선택해보세요."},
  { id:1, date:new Date(2026, 8-1, 6).getTime(), emotionId:2, content:"하루의 기분을 적어보세요."},
  { id:2, date:new Date(2026, 8-1, 8).getTime(), emotionId:4, content:"자유롭게 일기를 써봐요!!!"}
]

function DiaryList({data = mockData}) { //최종완성 후에 {data}로 다시 바꿔야함
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
    <div className='p-4'>
      <div className='pb-4 flex justify-between items-center gap-4'>
        <div className='flex-none'>
          <select value={sortType} onChange={onChangeSortType}
            className="w-36 h-10 px-4 rounded-full bg-zinc-100 text-stone-700 font-medium border-none outline-none cursor-pointer shadow-sm hover:bg-zinc-200 transition"
            >
            {sortOptionList.map((item, idx)=>
                <option key={idx} value={item.value}> {item.name} </option>
            )}
          </select>
        </div>
        <div className='flex-1 flex justify-end'>
          <Button type='POSITIVE' text={"새 일기 쓰기"} onClick={onClickNew} className='w-full'/>
        </div>
      </div>
      <div className='pb-4'> {/* border-t border-stone-200 */}
        {sortedData.map((item)=>
          <DiaryItem key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default DiaryList