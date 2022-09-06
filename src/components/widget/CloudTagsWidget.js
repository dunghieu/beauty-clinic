import Widget from '../UI/Widget';
import './CloudTagsWidget.css';

const DUMMY_TAGS = [
  {
    id: 't1',
    title: 'beauty',
  },
  {
    id: 't2',
    title: 'cute',
  },
  {
    id: 't3',
    title: 'skin',
  },
  {
    id: 't4',
    title: 'glow',
  },
  {
    id: 't5',
    title: 'style',
  },
  {
    id: 't6',
    title: 'clinic',
  },
  {
    id: 't7',
    title: 'style',
  },
  {
    id: 't8',
    title: 'greate',
  },
  {
    id: 't9',
    title: 'cute',
  },
];

const CloudTagsWidget = () => {
  const cloudTags = DUMMY_TAGS.map((post) => (
    <li className='CloudTags__item' key={post.id}>
      <span className='CloudTags__title'>{post.title}</span>
    </li>
  ));

  return (
    <Widget className='CloudTags__content' widgetName='Cloud Tags'>
      <ul className='CloudTags__list'>{cloudTags}</ul>
    </Widget>
  );
};

export default CloudTagsWidget;
