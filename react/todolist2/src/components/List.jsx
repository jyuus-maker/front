import "../css/List.css";
import ListItem from "./ListItem";
import { useMemo, useState } from "react";
import { memo } from "react"

function List({todo, onUpdate, onDelete}){
    const [search, setSearch] = useState("");
    const onChangeSearch = (e)=>{ setSearch(e.target.value); };
    const getSearchResult = ()=>{
        return search === "" ? todo : //서치가 공란이면 투두 그대로 반환
        todo.filter((item)=>
            item.content
            .toLowerCase()
            .includes(search.toLowerCase())
        )
    }

    //할 일 분석 - 총 개수, 완료 할일, 미완료 할일
    const analyzeTodo = useMemo(()=>{ //useMemo 를 사용해서 콜백함수로 변경
        console.log("analyzeTodo 호출됨");
        const totalCount = todo.length;
        const doneDoneCount = todo.filter((item)=> item.isDone).length; //JS 조건문에서는 값이 true인 경우에만 필터를 통과시킴. (== true를 생략 가능)
        const notDoneCount = totalCount - doneDoneCount;
        return {totalCount, doneDoneCount, notDoneCount };
    }, [todo]);

    const { totalCount, doneDoneCount, notDoneCount } = analyzeTodo;

    return(
        <div className="List">
            <h3>Todo List</h3>
            <div>
                {/* 외부에 analyzeTodo() 호출 해놨기 때문에 변수만 써도 됨. (사실상 전역화) */}
                <div>총 할일 : {totalCount} 건</div> 
                <div>완료 할일 : {doneDoneCount} 건</div>
                <div>미완료 할일 : {notDoneCount} 건</div> 
                <p></p>
            </div>
            <input className="searchbar" type="text" 
                value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <div className="">
                {
                    [...getSearchResult()].map(
                        (item) => {
                            return <ListItem
                                        key={item.id}{...item}
                                        onUpdate={onUpdate}
                                        onDelete={onDelete}
                                    />
                        }
                    )
                }
            </div>
        </div>
    );
}

export default memo(List)