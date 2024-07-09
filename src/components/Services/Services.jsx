import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import { LuCalendarCheck } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';
import { FiTrendingUp } from 'react-icons/fi';
import { GoMegaphone } from 'react-icons/go';
export const Services = () => {
  return (
    <section
      id='services'
      className='flex justify-center flex-col items-center mt-10 mb-10'
    >
      <SectionTitle>Servicios</SectionTitle>
      <div className='grid lg:flex grid-cols-2 mx-auto lg:w-[60%] gap-8 justify-center items-center mt-8'>
        <ServiceItem icon={<GoMegaphone size={30} />}>
          Gestión de redes sociales
        </ServiceItem>
        <ServiceItem icon={<FiEdit size={28} />}>
          Creación y edición de contenido
        </ServiceItem>
        <ServiceItem icon={<LuCalendarCheck size={30} />}>
          Calendarización de contenidos
        </ServiceItem>
        <ServiceItem icon={<FiTrendingUp size={30} />}>
          Análisis de métricas
        </ServiceItem>
      </div>
    </section>
  );
};
