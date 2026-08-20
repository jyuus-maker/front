function Header({leftChild, title, rightChild}) {
  return (
    <div className='Header py-[10px] px-0 pb-[15px] flex items-center border-b border-[#e0e0e0]'>
      <div className='header_left w-[15%] flex justify-start'>
        {leftChild}
      </div>
      <div className='header_title flex-1 text-[25px] font-normal text-center justify-center flex'>
        {title}
      </div>
      <div className='header_right w-[15%] flex justify-end text-right'>
        {rightChild}
      </div>
    </div>
  )
}

export default Header