import "../css/ListItem.css";

function ListItem({id, content, isDone, date, onUpdate, onDelete}){
    // 1. 컴포넌트 내부 상단 (return문 위쪽)
    const writeTime = new Date(date); // 작성 시점의 고정된 Date 객체

    const year = writeTime.getFullYear();
    const month = writeTime.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const currentDate = writeTime.getDate();

    // 요일 매핑 배열
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = dayNames[writeTime.getDay()];

    // 1자리 숫자 앞에 0을 붙여 두 자리 규격을 맞춰주는 함수
    const tenCalc = (num) => (num < 10 ? '0' + num : num);

    // 24시간 체계 적용 (시와 분을 두 자릿수로 고정)
    const hours24 = tenCalc(writeTime.getHours());
    const minutes = tenCalc(writeTime.getMinutes());

    // 최종 포맷팅: 2026/8/12(수) 16:00
    const formattedCreatedDate = `${year}/${month}/${currentDate}(${dayOfWeek})`;
    const formattedCreatedTime = `${hours24}:${minutes}`;

    //인풋체인지
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    }

    //버튼기능
    const onClickDeleteBtn = ()=>{
        onDelete(id);
    }

    return(
        <div className="ListItem">
            <div className="_colPad checkbox_col">
                <input 
                    type="checkbox" 
                    checked={isDone} 
                    onChange={onChangeCheckbox}
                    readOnly/>
            </div>

            <div className="_colPad title_col">
                {content}
            </div>

            {/* JSX 렌더링 영역 (리턴 영역) */}
            <div className="_colPad data_col">
                {formattedCreatedDate}<br />
                {formattedCreatedTime}
            </div>

            <div className="_colPad btn_col">
                <button
                    onClick={onClickDeleteBtn}
                    >DEL</button>
            </div>
        </div>
    );
}

export default ListItem