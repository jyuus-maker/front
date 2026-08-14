import '../css/New.css'
// import { Routes, Route } from "react-router";
import { useSearchParams } from 'react-router'

function New() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(setSearchParams);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  return (
    <div className='New'>
      <h1>New Page</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>

    </div>
  )
}

export default New