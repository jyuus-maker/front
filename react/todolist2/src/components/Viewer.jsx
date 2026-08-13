import "../css/View.css";

function Viewer({count}) {
  return (
    <>
    <div>
      <h3>현재 카운트</h3>
      <h1>{count}</h1>
    </div>
    </>
  )
}

export default Viewer
