export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='mb-4'>
      <small>&copy;{year} | Inés Sobrino</small>
    </div>
  );
};
