function Button({type='', text, onClick, className = ''}) {
  const baseClass = "h-[48px] border-none outline-none cursor-pointer rounded-full text-white text-[18px] font-light flex items-center justify-center transition-all duration-200 ease-in-out hover:-translate-y-[1px] active:translate-y-[1px] [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]";

  let typeClass = "bg-[#d6d6d6] shadow-[0_4px_10px_-2px_rgba(214,214,214,0.5)] hover:bg-[#c7c7c7] hover:shadow-[0_10px_20px_-4px_rgba(214,214,214,0.8)] active:shadow-[0_4px_10px_-2px_rgba(214,214,214,0.5)]";

  if (type === 'POSITIVE') {
    typeClass = "bg-[#a8e6cf] shadow-[0_8px_16px_-4px_rgba(168,230,207,0.5)] hover:bg-[#93dec3] hover:shadow-[0_10px_20px_-4px_rgba(168,230,207,0.8)] active:shadow-[0_4px_10px_-2px_rgba(168,230,207,0.5)]";
  } else if (type === 'NEGATIVE') {
    typeClass = "bg-[#ffb7b2] shadow-[0_4px_10px_-2px_rgba(255,183,178,0.5)] hover:bg-[#ffa09b] hover:shadow-[0_10px_20px_-4px_rgba(255,183,178,0.8)] active:shadow-[0_4px_10px_-2px_rgba(255,183,178,0.5)]";
  }

  let customClass = 'min-w-[110px] px-[16px]';
  if (type === 'CIRCLE' || className.includes('bt_CIRCLE')) {
    customClass = 'w-[48px] h-[48px] min-w-0 p-0 text-[1.8em] rounded-full';
  }
  if (type === 'LIST' || className.includes('bt_LIST')) {
    customClass += ' h-[36px] text-[16px] text-[#3f3f3f] [text-shadow:none]';
  }

  return (
    <button 
      className={`${baseClass} ${typeClass} ${customClass} ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;