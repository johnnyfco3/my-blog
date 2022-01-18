import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className='page-body'> 
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles-list' element={<ArticlesListPage />} />
          <Route path='/article/:name' element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
