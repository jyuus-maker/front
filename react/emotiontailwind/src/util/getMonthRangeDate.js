export const getMonthRangeDate=(date)=>{
    const beginTimeStamp= new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp  = new Date(date.getFullYear(), date.getMonth()+1, 0, 23, 59, 59).getTime(); 
    //날짜 자리의 숫자가 0이라면, 전달의 마지막날을 의미하게 됨. (=전날 23시 50분 59초)

    //시작일과 끝일에 해당하는 데이터를 보내주거나, 데이터가 없으면 빈데이터를 보냄
    return {beginTimeStamp, endTimeStamp}
}