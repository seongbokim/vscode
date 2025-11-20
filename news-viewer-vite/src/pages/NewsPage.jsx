import { useParams } from 'react-router-dom';
import Categories from '../componets/Categories.jsx';
import NewsList from '../componets/NewsList.jsx';

const NewsPage = () => {
  const params = useParams();

  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
