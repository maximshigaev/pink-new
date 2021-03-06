import { FC, memo } from 'react';


export const Features: FC = memo(() => {
  return (
    <section>
      <h2>Преимущества приложения</h2>
      <p>Устали от серости мегаполиса?</p>
      <p>Нам есть, что вам предложить!</p>
      <ul>
        <li>
          <h3>Поднимает настроение</h3>
          <p>Приложение позволит вам победить осеннюю хандру и депрессию буквально в несколько кликов!</p>
        </li>
        <li>
          <h3>Меняет мир вокруг</h3>
          <p>Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект</p>
        </li>
        <li>
          <h3>Заводит новых друзей</h3>
          <p>Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых</p>
        </li>
      </ul>
      <div>
        <h3>Эффект на 24 часа!</h3>
        <p>
          Британские ученые провели исследования и доказали, что положительный эффект от использования приложения
          длится целые сутки!
        </p>
        <a href="" >Узнать больше об исследовании</a>
      </div>
    </section>
  );
});
