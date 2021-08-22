import { FC, memo } from 'react';

// Components
import {
  Header,
  Download,
  Features,
  Reviews,
  Prices,
  Contacts,
  Footer,
} from '../';

export const MainPage: FC = memo(() => {
  return (
    <>
      <Header />
      <main>
        <h1>Приложение Pink</h1>
        <Download />
        <Features />
        <Reviews />
        <Prices />
        <Contacts />
      </main>
      <Footer />
    </>
  );
});
