import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <header>
      <nav className=' flex justify-between py-4 px-8 lg:p-4  w-full lg:w-[80%] items-center mx-auto left-0 right-0 fixed top-0 z-50 bg-background'>
        <span className='font-brown-sugar text-3xl hover:scale-110 transition-all duration-100 ease-out'>
          <Link to='/'>Inés Sobrino</Link>
        </span>
      </nav>
    </header>
  );
};
