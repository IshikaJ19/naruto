// App.jsx or Routes.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './component/characterList';
import CharacterDetails from './component/characterDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
