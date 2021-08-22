import { FC, memo } from 'react';
import { useLocation } from 'react-router';

// Constants
import { ROUTES } from '../../constants';

// Images
import logoDesktop from '../../images/logo-desktop.svg';

export const Header: FC = memo(() => {
  const { pathname: path } = useLocation();

  return (
    <header>
      <a href={(path === ROUTES.mainPage) ? '' : ROUTES.mainPage}>
        <img
          src={logoDesktop}
          width="147"
          height="40"
          alt="Логотип Pink"
        />
      </a>
      <nav>
        <ul>
          <li>
            <a href={(path === ROUTES.mainPage) ? '' : ROUTES.mainPage}>
              Главная
            </a>
          </li>
          <li>
            <a href={(path === ROUTES.photoPage) ? '' : ROUTES.photoPage}>
              Фотографии
            </a>
          </li>
          <li>
            <a href={(path === ROUTES.photoPage) ? '' : ROUTES.photoPage}>
              Конкурс
            </a>
          </li>
          <li>
            <a href="#">
              HTML Academy
            </a>
          </li>
        </ul>
      </nav>
      <button type="button">
        <span>Закрыть меню</span>
      </button>
    </header>
  );
});
