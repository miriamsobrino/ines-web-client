import { IoMdMail } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { TbPaperclip } from 'react-icons/tb';
import { Badge } from '../Badge/Badge';
import { toast, Toaster } from 'sonner';

export const Info = () => {
  const handleCopyEmail = () => {
    const email = 'inessobrinorrss@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success('Correo copiado al portapapeles'); // Mostrar notificación de éxito
      })
      .catch((err) => {
        toast.error('Error al copiar el correo'); // Mostrar notificación de error
        console.error('Error al copiar el correo:', err);
      });
  };
  return (
    <div>
      <Toaster position='top-center' />
      <section className='flex-col text-center mt-20 px-8 py-2 lg:p-0 lg:flex-row flex justify-center items-center lg:text-left gap-8 lg:w-[80%] mx-auto lg:mt-28'>
        <div className='  w-60 h-60 round-full overflow-hidden'>
          <img
            src='./img-logo.webp'
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div className=' w-full lg:w-[34%]'>
          <h1 className='text-3xl font-bold'>Inés Sobrino</h1>
          <span className='text-lg bg-accent px-2'>
            Community & Social Media Manager
          </span>

          <div className='mx-auto w-full justify-center lg:justify-start flex gap-2 mt-4'>
            <Badge
              icon={<TbPaperclip className='text-lg' />}
              onClick={handleCopyEmail}
            >
              Correo electrónico
            </Badge>
            <Badge icon={<FaInstagram className='text-lg' />}>
              <a
                href='https://www.instagram.com/inessobrinosocial/ '
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </Badge>
          </div>
          <div className=' mt-4 flex flex-col gap-2'>
            <p>
              Desde hace años <strong>las redes sociales son mi pasión</strong>{' '}
              y con el tiempo, se han convertido en una parte fundamental de mi
              vida. Ahora, <strong>mi misión es ayudar </strong>a marcas
              personales o pequeñas empresas a potenciar al máximo sus redes
              sociales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
