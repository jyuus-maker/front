import './App.css'

function App() {

  return (
    <div>
      <div className='bg-amber-100 p-7 m-2.5 rounded-3xl shadow-inner'>
        <p className='text-6xl text-amber-300 font-extrabold text-shadow-md text-shadow-amber-400'>Hello TailwindCSS</p>
        <p className='text-[40px] text-stone-700 font-serif'>Good to see you</p>
        <p className='text-3xl text-[rgb(24,87,58)] font-bold'>Have a nice day</p>
      </div>
      <div className='w-2xs p-7 m-2.5 bg-gray-800 rounded-3xl text-amber-50 align-middle border-3 border-amber-400 shadow-inner'>
        <p className='text-xl'>
          BOX
        </p>
      </div>
      <div className='w-md h-50 p-7 m-2.5 bg-gray-600 rounded-3xl text-amber-50 align-middle border-6 border-amber-500 shadow-inner'>
        <p className='text-xl'>
          BOX
        </p>
      </div>
    </div>
  )
}

export default App
