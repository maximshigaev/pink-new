import { FC, memo } from 'react';

export const Reviews: FC = memo(() => {
  return (
    <section>
      <h2>Отзывы</h2>
      <button>
        <span>Предыдущий отзыв</span>
      </button>
      <ul>
        <li>
          <blockquote>
            <p>
              «Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи!
              А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»
            </p>
            <cite>Николай Петров</cite>
            <p>25 лет, водитель трамвая</p>
          </blockquote>
        </li>
      </ul>
      <button>
        <span>Предыдущий отзыв</span>
      </button>
      <ul>
        <li>
          <button>
            <span>Первый отзыв</span>
          </button>
        </li>
        <li>
          <button>
            <span>Второй отзыв</span>
          </button>
        </li>
        <li>
          <button>
            <span>Третий отзыв</span>
          </button>
        </li>
      </ul>
    </section>
  );
});
