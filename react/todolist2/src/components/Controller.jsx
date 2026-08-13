function Controller({dispatch}) {
  return (
    <>
    <div>
      <button onClick={ ()=> dispatch({type:"DECREASE", value:-1}) }>-1</button>
      <button onClick={ ()=> dispatch({type:"DECREASE", value:-5}) }>-5</button>
      <button onClick={ ()=> dispatch({type:"INCREASE", value: 5}) }>5</button>
      <button onClick={ ()=> dispatch({type:"INCREASE", value: 1}) }>1</button>
    </div> 
    </>
  )
}

export default Controller
