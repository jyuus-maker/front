import "../css/Editor.css";
import { useRef, useState } from "react";

function Editor({onCreate}){ //자식이 props를 받는다.
    //인풋 기능구현
    const [content, setContent] = useState(""); //초기값이 없어서  input의 placeholder값이 보임.
    const inputRef = useRef(null); //인풋의 정보 변화감지
    const onChangeContent = (e)=>{ //입력기는 onChange, 클릭기는 onClick
        setContent(e.target.value);
    }
    const onKeyDown = (e) => {
        if(e.key === "Enter"){  //엔터의 키값이 13임. 기존방식 (e.keyCode === 13)
            onSubmit(); //엔터를 쳐도 onSubmit() 호출됨
        }
    }

    //버튼 기능구현
    const onSubmit = ()=>{
        if(content.trim() === ""){
            inputRef.current.focus(); //인풋창에 포커스를 주고
            return; //처리 못하게 리턴으로 함수 종료
        }
        onCreate(content); //문제가 없다면 콘텐츠를 onCreate로 보내줌
        setContent(""); //스테이트를 공란으로 바꿔줌
    }

    return(
        <div className="Editor">
            <h4>새로운 Todo 작성하기 🖍</h4>
            <div className="editor_warpper">
                <input 
                    ref={inputRef}
                    value={content} 
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}> + </button>
            </div>
        </div>
    );
}

export default Editor