import {useState} from 'react';
import './FAQs.css';

const FAQlist = [
  {
    id: '1',
    question: 'Is beauty consultation handled thoroughly?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: '2',
    question: 'Can I be beautiful in an instant time?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: '3',
    question:
      'Are there any side effects to the treatment methods or treatments at this clinic?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: '4',
    question: 'Do professionals have accreditation in their respective fields?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const FAQs = () => {
  const [isShowAnswer, setIsShowAnswer] = useState(null);
  const toggleAnswer = (id) => {
    setIsShowAnswer((prevState) => (prevState === id ? null : id));
  };

  return (
    <section className='FAQs'>
      <div className='FAQs__wrapper'>
        <div className='FAQs__title'>Services FAQ's</div>
        <ul className='FAQs__list'>
          {FAQlist.map((item) => (
            <li className='FAQs__item' key={item.id}>
              <div
                className={`FAQs__question ${
                  isShowAnswer === item.id ? 'FAQs__active' : ''
                }`}
                onClick={() => toggleAnswer(item.id)}
              >
                {item.question}
              </div>
              {isShowAnswer === item.id && (
                <div className='FAQs__answer'>{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
