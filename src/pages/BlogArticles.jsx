import React from 'react';
import { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { getArticles } from '../services/getArticles';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const BlogArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8);
  const navigate = useNavigate();

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

  const navigateToDetail = (id) => {
    navigate(`/blog/articles/${id}`);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <section className='flex flex-col gap-4 justify-center items-center m-20'>
      <SectionTitle>Artículos</SectionTitle>
      {loading && <Loader />}

      <div className='flex flex-col mt-2 md:grid-cols-2 md:grid lg:grid lg:grid-cols-4 text-left gap-8 lg:w-[80%] mx-auto w-full justify-center items-center '>
        {currentArticles.map((article) => (
          <li key={article._id} className='flex flex-col gap-4 items-start'>
            <img
              className='max-w-80 min-w-80 min-h-60 max-h-60 object-cover'
              src={article.file}
              alt={article.title}
              onError={(e) => {
                console.log(e); // URL de imagen de reemplazo en caso de error
              }}
            />
            <div className='flex flex-col gap-2 justify-between h-40'>
              <h4 className='text-lg font-bold text-wrap w-80'>
                {article.title}
              </h4>
              <p className='text-sm text-wrap w-80 line-clamp-3 '>
                {article.summary}
              </p>
              <Button onClick={() => navigateToDetail(article._id)}>
                Leer más...{' '}
              </Button>
            </div>
          </li>
        ))}
      </div>
      <div className='flex gap-4 mt-8'>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          <IoIosArrowBack />
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <IoIosArrowForward />
        </Button>
      </div>
    </section>
  );
};

export default BlogArticles;
