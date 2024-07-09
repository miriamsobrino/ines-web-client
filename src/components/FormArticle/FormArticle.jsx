import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import ReactQuill from 'react-quill';
import { getArticleById, updateArticle } from '../../services/getArticles';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'react-quill/dist/quill.snow.css';

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

export const FormArticle = ({ title, articleId, onClose, onSubmit }) => {
  const [titleValue, setTitleValue] = useState('');
  const [summaryValue, setSummaryValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

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

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const article = await getArticleById(articleId);
        setTitleValue(article.title);
        setSummaryValue(article.summary);
        setContentValue(article.content);
        setFile(article.file);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (articleId) {
      fetchArticleDetails();
    } else {
      setLoading(false);
    }
  }, [articleId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    try {
      setLoading(true);
      const storageRef = ref(storage, `articles/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      setFileUrl(downloadUrl);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fileUrl) {
      setError(
        new Error('Debe cargar un archivo antes de enviar el formulario.')
      );
      return;
    }

    try {
      setLoading(true);
      console.log(fileUrl);
      let formData = new FormData();
      formData.set('title', titleValue);
      formData.set('summary', summaryValue);
      formData.set('content', contentValue);

      formData.set('file', fileUrl);

      const updatedArticle = await updateArticle(articleId, formData);
      console.log('Updated article after submission:', updatedArticle);
      setLoading(false);
      onSubmit();
    } catch (error) {
      setError(error);
    }
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error al cargar el artículo: {error.message}</div>;
    }
  };
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg w-[60%]'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <button onClick={onClose}>
            <MdClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Título'
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className='border-2 border-gray-300 rounded px-2 py-1 mb-2 w-full'
          />
          <input
            type='text'
            placeholder='Descripción'
            value={summaryValue}
            onChange={(e) => setSummaryValue(e.target.value)}
            className='border-2 border-gray-300 rounded px-2 py-1 mb-2 w-full'
          />
          <input type='file' onChange={handleFileChange} />
          <div className='editor-container'>
            <ReactQuill
              value={contentValue}
              onChange={(newValue) => setContentValue(newValue)}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className='flex justify-end'>
            <Button type='submit'>Guardar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
