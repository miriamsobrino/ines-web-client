import { SectionTitle } from '../SectionTitle/SectionTitle';
import { MdArrowOutward } from 'react-icons/md';
export const Clients = () => {
  return (
    <section
      id='clients'
      className='flex flex-col justify-center items-center gap-4 m-10'
    >
      <SectionTitle>Clientes</SectionTitle>
      <div className='lg:flex lg:flex-row grid grid-cols-2 items-center gap-8 m-4 '>
        <img
          className='max-w-28 max-h-28 object-contain'
          src='./Ferrarini_Logo.webp'
        />
        <img
          className='max-w-28 max-h-28 object-contain'
          src='./logo-rasif.webp'
        />
        <img
          className='max-w-28 max-h-28 object-contain'
          src='./Logo-NutNut.png'
        />
        <img
          className='max-w-28 max-h-28 object-contain'
          src='./MC_logo.webp'
        />
      </div>
      <div className='lg:w-[40%] flex flex-col gap-2 text-center'>
        <p className='text-balance'>
          A través de la agencia <strong>Recetags Media</strong> me encargo de
          ayudar a diferentes marcas a elevar su presencia en Instagram.
        </p>
      </div>
      <div className='flex lg:flex-row flex-col gap-4'>
        <div>
          <img
            className='max-w-[400px] max-h-[400px] object-contain '
            src='./mockup-1.webp'
          />
          <a
            href='https://instagram.com/ferrarini_es'
            className='flex items-center justify-center gap-2 mx-auto hover:text-secondary transition-all duration-300 hover:scale-105 '
          >
            @ferrarini_es
            <MdArrowOutward />
          </a>
        </div>
        <div>
          <img
            className='max-w-[400px] max-h-[400px] object-contain'
            src='./mockup-2.webp'
          />
          <a
            href='https://instagram.com/rasifmadrid'
            className='flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:text-secondary hover:scale-105'
          >
            @rasifmadrid
            <MdArrowOutward />
          </a>
        </div>
        <div>
          <img
            className='max-w-[400px] max-h-[400px] object-contain'
            src='./mockup-3.webp'
          />
          <a
            href='https://instagram.com/nutnutspain'
            className='flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:text-secondary hover:scale-105'
          >
            @nutnutspain
            <MdArrowOutward />
          </a>
        </div>
        <div>
          <img
            className='max-w-[400px] max-h-[400px] object-contain'
            src='./mockup-4.webp'
          />
          <a
            href='https://instagram.com/mamachicobrasa'
            className='flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:text-secondary hover:scale-105'
          >
            @mamachicobrasa
            <MdArrowOutward />
          </a>
        </div>
      </div>
    </section>
  );
};
