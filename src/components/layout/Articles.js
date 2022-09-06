import Article from './Article';
import './Articles.css';
import articleImg1 from '../../img/Article1.png';
import articleImg2 from '../../img/Article2.png';
import articleImg3 from '../../img/Article3.png';
import articleImg4 from '../../img/Article4.png';
import articleImg5 from '../../img/Article5.png';
import articleImg6 from '../../img/Article6.png';

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

const Articles = () => {
  const articleList = DUMMY_ARTICLES.map((article) => {
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

  return <section className='Articles'>{articleList}</section>;
};

export default Articles;
