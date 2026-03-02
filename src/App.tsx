import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/shared/components';
import { CharacterPage, CharactersPage } from '@/pages';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={<CharactersPage />}
            />
            <Route
              path='/character'
              element={<CharacterPage />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
