import React from 'react';
import { getArticles, deleteArticle } from '../services/getArticles';
import { useState, useEffect } from 'react';
import { ArticleList } from '../components/ArticleList/ArticleList';
import { Button } from '../components/Button/Button';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FormArticle } from '../components/FormArticle/FormArticle';
import { useNavigate } from 'react-router-dom';
import { DeletePopUp } from '../components/DeletePopUp/DeletePopUp';
import { useAuth } from '../context/AuthContext';
import { Loader } from '../components/Loader/Loader';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';

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
const AdminEdit = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const navigateToCreatePage = () => {
    navigate('/admin/create');
  };

  const navigateToLogin = () => {
    navigate('/admin');
  };

  const handleOpenForm = () => {
    if (selectedArticleId) {
      setShowEditForm(true);
    }
  };
  const handleCloseForm = () => {
    setShowEditForm(false);
  };
  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedArticle = articles.find(
      (article) => article._id === selectedId
    );
    setSelectedArticleId(selectedArticle);
  };

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      const updatedArticles = await getArticles();
      console.log(updatedArticles);
      setArticles(updatedArticles);
      setShowEditForm(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (selectedArticleId) {
      console.log(selectedArticleId.file);
    }
  }, [selectedArticleId]);

  const handleOpenDeletePopUp = () => {
    if (selectedArticleId) {
      setShowDeletePopUp(true);
    }
  };
  const handleDeleteArticle = async () => {
    try {
      setLoading(true);
      await deleteArticle(selectedArticleId._id);
      const storageRef = ref(storage, `${selectedArticleId.file}`);
      await deleteObject(storageRef);
      const updatedArticles = articles.filter(
        (article) => article._id !== selectedArticleId._id
      );
      setArticles(updatedArticles);
      setSelectedArticleId(null);
      setShowDeletePopUp(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleCancelDeleteArticle = () => {
    setShowDeletePopUp(false);
  };

  const isLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className='mt-20 flex-col flex gap-8 w-[40%] mx-auto'>
      {isLoggedIn ? (
        <>
          <h2 className='text-2xl'>Elige un artículo</h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              <ArticleList articles={articles} onChange={handleSelectChange} />
              <div className='flex gap-8 justify-center'>
                <div
                  className='flex gap-2 items-center'
                  onClick={handleOpenForm}
                >
                  <Button>
                    Editar artículo
                    <MdEdit size={18} />
                  </Button>
                </div>
                <div
                  className='flex gap-2 items-center'
                  onClick={handleOpenDeletePopUp}
                >
                  <Button>
                    Borrar artículo
                    <FaTrash />
                  </Button>
                </div>
                <div
                  className='flex gap-2 items-center'
                  onClick={navigateToCreatePage}
                >
                  <Button>
                    Crear un nuevo artículo
                    <FaPlus />
                  </Button>
                </div>
              </div>
              <button onClick={isLogout}>Logout</button>
              {showEditForm && (
                <FormArticle
                  title='Editar artículo'
                  articleId={selectedArticleId}
                  onClose={handleCloseForm}
                  onSubmit={handleFormSubmit}
                />
              )}
              {showDeletePopUp && (
                <DeletePopUp
                  onConfirm={handleDeleteArticle}
                  onCancel={handleCancelDeleteArticle}
                />
              )}
            </>
          )}
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

export default AdminEdit;
