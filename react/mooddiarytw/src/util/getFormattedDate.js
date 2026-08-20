export const getFormattedDate = (targetDate) =>{ //jsx에서 가져다 쓰기 위해 export를 꼭 붙여줌
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;  //월은 0부터 시작하기때문에.
    let date = targetDate.getDate();

    //월일을 2자릿수 기준으로.
    if(month < 10) { month=`0${month}`; }
    if(date  < 10) { date= `0${date}`; }

    return `${year}-${month}-${date}`;
}

export const getYMDformatted = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;  //월은 0부터 시작하기때문에.
    let date = targetDate.getDate();

    //월일을 2자릿수 기준으로.
    if(month < 10) { month=`0${month}`; }
    if(date  < 10) { date= `0${date}`; }
    
    return `${year}년 ${month}월 ${date}일`;
}