import { Button } from '../Button/Button';

export const DeletePopUp = ({ onConfirm, onCancel }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-500 bg-opacity-50'>
      <div className='bg-white py-8 rounded-lg w-[20%]'>
        <div className='flex flex-col gap-4 justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Borrar artículo</h2>
          <div className='flex gap-2'>
            <Button onClick={onConfirm}>Confirmar </Button>
            <button onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
