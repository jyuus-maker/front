import "../css/List.css";
import ListItem from './ListItem'
import { useState } from "react";

function List({todo,onUpdate, onDelete}){
    const [search, setSearch] = useState("");
    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    };

    const getSearchResult = ()=>{
        return search === "" ? todo : 
        todo.filter((item)=> 
            item.content
                .toLowerCase()
                .includes(search.toLowerCase())
                //컨텐츠를 가져와서 -> 소문자로 모두 바꾼다음 -> 포함된 내용을 가져옴
            )
    };

    return(
        <div className="List">
            <h4>Todo List 📑</h4>
            <input 
                className="searchbar" 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
                />
            <div className="listitem_warpper">
                {
                    [...getSearchResult()]
                    // .sort((a, b) => b.date - a.date) // 최신 타임스탬프 숫자가 맨 위로 오도록 내림차순 정렬
                    .sort((a, b) => b.id - a.id) // ID값이 클수록 맨 위로 오도록 내림차순 정렬
                    .map((item) => {
                    return <ListItem 
                                key={item.id} {...item}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                            />
                    })
                }
            </div>
        </div>
    );
}

export default List