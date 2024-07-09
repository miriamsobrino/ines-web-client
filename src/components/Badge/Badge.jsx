export const Badge = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-1 text-sm border-secondary bg-transparent border-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-secondary '
    >
      {icon}
      {children}
    </button>
  );
};
