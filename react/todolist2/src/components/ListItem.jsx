import "../css/ListItem.css";
import { memo } from "react"
import { useContext } from "react";
import { TodoDispatchContext } from "../App";

function ListItem({id, isDone, content, date}){
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheck = ()=> {
        onUpdate(id);
    }
    const onClickDeleteBtn = ()=> {
        onDelete(id);
    };
    return(
        <div className="ListItem">
            <div className="_colPad checkbox_col" >
                <input 
                    type="checkbox"
                    checked={isDone}
                    onChange={onChangeCheck}
                    readOnly  />
            </div>
            <div className="_colPad title_col">{content}</div>
            <div className="_colPad data_col">{new Date(date).toLocaleDateString()}</div>
            <div className="_colPad btn_col">
                <button onClick={onClickDeleteBtn}>Del</button>
            </div>
        </div>
    );
}

export default memo(ListItem)