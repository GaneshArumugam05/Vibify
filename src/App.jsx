import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './components/Homescreen';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homescreen />} />
    </Routes>
  </BrowserRouter>
);

export default App;
