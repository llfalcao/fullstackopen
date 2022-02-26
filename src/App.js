import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Unicafe from './pages/Unicafe';
import Anecdotes from './pages/Anecdotes';
import Courses from './pages/Courses';
import Notes from './pages/Notes';
import Phonebook from './pages/Phonebook';
import Countries from './pages/Countries';

const Header = () => {
  return <Link to="/">Home</Link>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="unicafe" element={<Unicafe />} />
          <Route path="anecdotes" element={<Anecdotes />} />
          <Route path="courses" element={<Courses />} />
          <Route path="notes" element={<Notes />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="countries" element={<Countries />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
