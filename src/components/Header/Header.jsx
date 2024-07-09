import { Link } from 'react-scroll';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);

    if (isMenuOpen) {
      setIsMenuOpen(false);
      setActiveLink(null);
    }
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveLink(null);
  };
  return (
    <header>
      <nav className=' flex w-full justify-between py-4 px-8 lg:p-4 lg:w-[80%] items-center mx-auto left-0 right-0 fixed top-0 z-50 bg-background'>
        <span className='font-brown-sugar text-3xl hover:scale-110 transition-all duration-100 ease-out'>
          <Link to='/' onClick={handleTopClick} className='cursor-pointer '>
            Inés Sobrino
          </Link>
        </span>
        <div className='lg:hidden ' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
        <ul
          className={`lg:flex gap-8 ${
            isMenuOpen
              ? 'block absolute top-12 right-4 mt-2 bg-background w-full pl-10'
              : 'hidden'
          } lg:block`}
        >
          <li
            className={`lg:hover:scale-110 mb-1 border-slate-200 border-b-2 lg:border-0 transition-all duration-200 ease-in-out cursor-pointer ${
              activeLink === 'services' ? 'active' : ''
            }`}
          >
            <Link
              to='services'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleLinkClick('services')}
              className={activeLink === 'services' ? 'active' : ''}
            >
              <span className='group'>
                Servicios
                <span className='absolute inset-x-0 bottom-0 h-[2px] bg-transparent lg:group-hover:bg-accent '></span>
              </span>
            </Link>
          </li>
          <li
            className={`lg:hover:scale-110 mb-1 border-slate-200 border-b-2 lg:border-0 transition-all duration-200 ease-in-out cursor-pointer ${
              activeLink === 'blog' ? 'active' : ''
            }`}
          >
            <Link
              to='blog'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleLinkClick('blog')}
              className={activeLink === 'blog' ? 'active' : ''}
            >
              <span className='group'>
                Artículos
                <span className='absolute inset-x-0 bottom-0 h-[2px] bg-transparent lg:group-hover:bg-accent'></span>
              </span>
            </Link>
          </li>
          <li
            className={`lg:hover:scale-110 mb-1 border-slate-200 border-b-2 lg:border-0 transition-all duration-200 ease-in-out cursor-pointer ${
              activeLink === 'clients' ? 'active' : ''
            }`}
          >
            <Link
              to='clients'
              smooth={true}
              offset={-200}
              duration={500}
              onClick={() => handleLinkClick('clients')}
              className={activeLink === 'clients' ? 'active' : ''}
            >
              <span className='group'>
                Clientes
                <span className='absolute inset-x-0 bottom-0 h-[2px] bg-transparent lg:group-hover:bg-accent'></span>
              </span>
            </Link>
          </li>
          <li
            className={`lg:hover:scale-110 mb-1  transition-all duration-200 ease-in-out cursor-pointer ${
              activeLink === 'contact' ? 'active' : ''
            }`}
          >
            <Link
              to='contact'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleLinkClick('contact')}
              className={activeLink === 'contact' ? 'active' : ''}
            >
              <span className='group'>
                Contacto
                <span className='absolute inset-x-0 bottom-0 h-[2px] bg-transparent lg:group-hover:bg-accent'></span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
