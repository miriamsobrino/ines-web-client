import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '../components/Button/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyCSELZ-9irBiIsogUpmYtfGkcATL42r6Zs',
  authDomain: 'ines-web-f0de7.firebaseapp.com',
  projectId: 'ines-web-f0de7',
  storageBucket: 'ines-web-f0de7.appspot.com',
  messagingSenderId: '1021252511603',
  appId: '1:1021252511603:web:8c35758e584c8ff2d10706',
  measurementId: 'G-B6KGJBP15D',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const AdminCreate = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const storageRef = ref(storage, `articles/${files.name}`);
      await uploadBytes(storageRef, files);
      const downloadUrl = await getDownloadURL(storageRef);

      console.log('URL de descarga del archivo:', downloadUrl);
      const articleData = {
        title,
        summary,
        content,
        file: downloadUrl,
      };

      const response = await fetch(
        'https://ines-web-server.vercel.app/articles',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(articleData),
          credentials: 'include',
        }
      );

      if (response.ok) {
        navigate('/admin/edit');
      } else {
        const errorData = await response.json();
        console.error('Error al crear el artículo:', errorData);
        alert('Error al crear un nuevo artículo');
      }
    } catch (e) {
      alert('Error adding a new article');
    }
  };
  const navigateToLogin = () => {
    navigate('/admin');
  };
  return (
    <div className=' mt-20 flex-col flex gap-8 justify-center items-center mx-auto'>
      {isLoggedIn ? (
        <>
          <h2 className='text-2xl mb-4'>Crear artículo</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-[40%]'>
            <input
              className='px-2'
              placeholder='Título'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className='px-2'
              placeholder='Descripción'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <input type='file' onChange={handleFileChange} />
            <div className='editor-container'>
              <ReactQuill
                theme='snow'
                className='h-60 mb-10'
                value={content}
                onChange={(newValue) => setContent(newValue)}
                modules={modules}
                formats={formats}
              />
            </div>
            <Button className='text-center'>Guardar</Button>
          </form>
        </>
      ) : (
        <div className='w-[60%] flex flex-col mx-auto justify-center gap-4'>
          <p>
            No estás autorizado para ver esta página. <br />
            Por favor, inicia sesión.
          </p>
          <Button onClick={navigateToLogin}>Login</Button>
        </div>
      )}
    </div>
  );
};

export default AdminCreate;
