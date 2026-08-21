function Header({ leftChild, title, rightChild }) {
  return (
    <header className="grid grid-cols-3 items-center px-4 py-3 border-b border-stone-200">
      <div className="flex justify-start">
        {leftChild}
      </div>
      <div className="flex justify-center text-2xl font-extrabold text-stone-800">
        {title}
      </div>
      <div className="flex justify-end">
        {rightChild}
      </div>
    </header>
  )
}

export default Header