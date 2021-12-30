import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Preview, Result } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
