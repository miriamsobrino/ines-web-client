import { Outlet } from 'react-router-dom';
import { HeaderLogo } from '../components/HeaderLogo/HeaderLogo';

const AppLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeaderLogo />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
