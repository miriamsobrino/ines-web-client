export const SectionTitle = ({ children }) => {
  return (
    <div className='text-2xl w-10/12 lg:w-5/12 relative '>
      <h3 className='group z-20 font-bold bg-background px-4 inline'>
        {children}
        <span className='absolute inset-x-0 bottom-3 h-[3px] bg-accent -z-10 '></span>
      </h3>
    </div>
  );
};
