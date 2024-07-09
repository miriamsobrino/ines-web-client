const BASE_URL = 'https://ines-web-server.vercel.app';

export const getArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/articles`);
    if (!response.ok) {
      throw new Error('Error al obtener los artículos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/articles/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del artículo');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateArticle = async (articleId, formData) => {
  try {
    for (const entry of formData.entries()) {
      console.log('FormData entry:', entry);
    }
    const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
      method: 'PUT',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el artículo');
    }

    const updatedArticle = await response.json();
    console.log('Updated article:', updatedArticle);
    return updatedArticle;
  } catch (error) {
    throw error;
  }
};
export const deleteArticle = async (articleId) => {
  try {
    const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el artículo');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
