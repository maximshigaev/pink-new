import { FC, memo } from 'react';

export const Prices: FC = memo(() => {
  return (
    <section>
      <h2>Тарифы и цены</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>База</h3>
              <span>1,99 usd</span>
            </th>
            <th>
              <h3>Стандарт</h3>
              <span>3,99 usd</span>
            </th>
            <th>
              <h3>Анлим</h3>
              <span>9,99 usd</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Розовый фильтр</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Смайлики</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Комментарии</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
});
