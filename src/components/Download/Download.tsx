import { FC, memo } from 'react';

export const Download: FC = memo(() => {
  return (
    <section>
      <h2>Скачивание приложения</h2>
      <p>Взгляните на жизнь иначе!</p>
      <button type="button">Скачать приложение</button>
      <ul>
        <li>
          <a href="">
            <span>
              Apple
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              Android
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              Microsoft
            </span>
          </a>
        </li>
      </ul>
      <p>Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8</p>
    </section>
  );
});
