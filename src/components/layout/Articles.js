import Article from './Article';
import './Articles.css';
import articleImg1 from '../../img/Article1.png';
import articleImg2 from '../../img/Article2.png';
import articleImg3 from '../../img/Article3.png';
import articleImg4 from '../../img/Article4.png';
import articleImg5 from '../../img/Article5.png';
import articleImg6 from '../../img/Article6.png';
import Pagination from '../UI/Pagination';
import {useMemo, useState} from 'react';

const DUMMY_ARTICLES = [
  {
    id: 'a1',
    articleImg: articleImg1,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
  {
    id: 'a2',
    articleImg: articleImg2,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
  {
    id: 'a3',
    articleImg: articleImg3,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
  {
    id: 'a4',
    articleImg: articleImg4,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
  {
    id: 'a5',
    articleImg: articleImg5,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
  {
    id: 'a6',
    articleImg: articleImg6,
    articleCategory: 'Category',
    articleTitle: 'Article Title',
    articleDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu ante.',
  },
];
let PageSize = 3;

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return DUMMY_ARTICLES.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const articleList = currentTableData.map((article) => {
    return (
      <Article
        key={article.id}
        articleImg={article.articleImg}
        articleCategory={article.articleCategory}
        articleTitle={article.articleTitle}
        articleDescription={article.articleDescription}
      />
    );
  });

  return (
    <section className='Articles'>
      {articleList}
      <Pagination
        className='Articles__pagination'
        currentPage={currentPage}
        totalCount={DUMMY_ARTICLES.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default Articles;
