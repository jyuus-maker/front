function Button({ type = 'DEFAULT', text, onClick, className = '' }) {
  let bgStyle = 'bg-zinc-300 hover:bg-zinc-400 shadow-zinc-200';
  let sizeStyle = 'px-3 py-2 w-30 h-10';

  switch (type) {
    case 'POSITIVE': 
      bgStyle = 'bg-emerald-400 hover:bg-emerald-500 shadow-emerald-200'; 
      break;
    case 'NEGATIVE': 
      bgStyle = 'bg-pink-400 hover:bg-pink-500 shadow-pink-200'; 
      break;
    case 'CIRCLE':
      sizeStyle = 'w-10 h-10 p-0 flex items-center justify-center pb-[2px]';
      break;
  }

  return (
    <button 
      className={`${sizeStyle} rounded-full text-md text-amber-50 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-[1px] active:scale-95 ${bgStyle} ${className}`} 
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button