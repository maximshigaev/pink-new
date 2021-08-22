import { FC, memo } from 'react';

export const Contacts: FC = memo(() => {
  return (
    <section>
      <h2>Контакты</h2>
      <p>Остались вопросы? Свяжитесь с нами!</p>
      <dl>
        <dt>Звоните:</dt>
        <dd>+7 (812) 555-66-66</dd>
        <dt>Приезжайте в гости:</dt>
        <dd>ул. Большая Конюшенная, 19/8</dd>
        <dt>Пишите:</dt>
        <dd>mail@htmlacademy.ru</dd>
      </dl>
    </section>
  );
});
