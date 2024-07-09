import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Button } from '../Button/Button';
import { FaCircleArrowUp } from 'react-icons/fa6';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section
      id='contact'
      className='flex flex-col justify-center items-center gap-4 mt-12 mb-10'
    >
      <SectionTitle>Contacto</SectionTitle>
      <div className='bg-secondary  lg:w-5/12 flex-col h-auto gap-8 lg:flex-row mx-8 lg:mx-auto rounded-md flex lg:px-12 lg:gap-8 p-8 lg:h-40 items-center justify-between'>
        <div className='flex flex-col gap-2 px-2 lg:text-left lg:p-0'>
          <p>
            <strong>
              ¿Necesitas una estrategia digital que impulse tu marca?
            </strong>
          </p>
          <p> Contáctame y trabajemos juntos para lograrlo</p>
        </div>
        <a
          href='mailto:inessobrinorrss@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <FaPaperPlane />
            Contactar
          </Button>
        </a>
      </div>
      <Link to='/' onClick={handleTopClick}>
        <FaCircleArrowUp
          size={30}
          className='mt-20 mb-20 transition-all duration-300 hover:text-secondary cursor-pointer'
        />
      </Link>
    </section>
  );
};
