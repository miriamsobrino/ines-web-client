import { Link } from 'react-router-dom';
import { getArticles } from '../../services/getArticles';
import { useEffect, useState } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { Loader } from '../Loader/Loader';
export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  return (
    <section
      id='blog'
      className='flex flex-col justify-center items-center mt-12 mb-4'
    >
      <SectionTitle>Artículos</SectionTitle>
      {loading && <Loader />}

      <ArticleCard articles={articles} />
      <Link to='/blog/articles' className='m-4'>
        <button className='border-secondary border-2 px-2 py-1 transition-all duration-300 hover:bg-secondary mt-8'>
          Ver más artículos
        </button>
      </Link>
    </section>
  );
};
