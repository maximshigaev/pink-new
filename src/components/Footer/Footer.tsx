import { FC, memo } from 'react';
import { useLocation } from 'react-router';

// Constants
import { ROUTES } from '../../constants';

// Images
import footerLogoDesktop from '../../images/logo-footer-desktop.svg';

export const Footer: FC = memo(() => {
  const { pathname: path } = useLocation();

  return (
    <footer>
      <a href={(path === ROUTES.mainPage) ? '' : ROUTES.mainPage}>
        <img
          src={footerLogoDesktop}
          width="147"
          height="40"
          alt="Логотип Pink"
        />
      </a>
      <ul>
        <li>
          <a href="">
            <span>
              Twitter
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              Facebook
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              Youtube
            </span>
          </a>
        </li>
      </ul>
      <p>
        <span>Разработано</span>
        <a href="">
          <span>HTML Academy</span>
        </a>
      </p>
    </footer>
  );
});
