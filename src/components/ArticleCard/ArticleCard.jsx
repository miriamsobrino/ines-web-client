import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const ArticleCard = ({ articles }) => {
  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/blog/articles/${id}`);
    console.log(id);
  };
  return (
    <div>
      <ul className=' flex-col flex lg:flex-row gap-8 mt-4 lg:mt-10 justify-center items-start text-left lg:gap-12 '>
        {articles.slice(0, 2).map((article) => (
          <li key={article._id} className='flex flex-col  gap-4 '>
            <img
              className='max-w-80 min-w-80 min-h-60 max-h-60 object-cover'
              src={article.file}
              alt={article.title}
            />
            <div className='flex flex-col gap-2 justify-between h-40'>
              <h4 className='text-lg font-bold text-wrap w-80'>
                {article.title}
              </h4>
              <p className='text-sm text-wrap w-80 line-clamp-3 '>
                {article.summary}
              </p>
              <Button onClick={() => navigateToDetail(article._id)}>
                Leer más...
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
