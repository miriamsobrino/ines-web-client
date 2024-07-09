export const ArticleList = ({ articles, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value=''>Seleccionar artículo</option>
      {articles.map((article) => (
        <option key={article._id} value={article._id}>
          {article.title}
        </option>
      ))}
    </select>
  );
};
