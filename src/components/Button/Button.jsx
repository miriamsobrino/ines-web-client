export const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className={`px-2 py-1 text-center justify-center ${
        disabled
          ? 'bg-gray-200 cursor-ponter-none'
          : ' border-2 border-accent bg-accent flex items-center gap-2 transtion-all duration-300 hover:border-2 hover:border-accent hover:bg-transparent'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
