export const ServiceItem = ({ children, icon }) => {
  return (
    <div className='bg-secondary h-36 w-36 rounded-full items-center flex flex-col justify-center p-8 text-sm'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        {icon}
        <p>{children}</p>
      </div>
    </div>
  );
};
