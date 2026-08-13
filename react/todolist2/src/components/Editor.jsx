import "../css/Editor.css";
import { useRef, useState } from "react";

function Editor({onCreate}){ 
    const [content,setContent] = useState("");
    const inputRef = useRef(null);
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    };
    const onSubmit = ()=>{
        onCreate(content);
        setContent("");
    }
    return(
        <div className="Editor">
            <h3>새로운 Todo 작성하기</h3>
            <div className="editor_warpper">
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    placeholder="새 글 입력..."/>
                <button onClick={onSubmit}>+</button>
            </div>
        </div>
    );
}

export default Editor