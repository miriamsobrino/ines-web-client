import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticleById } from '../services/getArticles';
import { Loader } from '../components/Loader/Loader';

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        setLoading(true);
        const data = await getArticleById(id);
        setArticle(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los detalles del artículo:', error);
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [id]);

  return (
    <div className='flex flex-col items-center gap-4 px-8 w-full md:w-full lg:px-0 lg:w-[40%] mx-auto text-left mt-20'>
      {loading && <Loader />}
      <img className='w-12/12 ' src={article.file} />
      <h2 className='text-2xl font-bold'>{article.title}</h2>
      <p className='text-base mb-10 '>{article.summary}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default BlogDetail;
