import PostLists from './pages/postLists';
import PostDetails from './pages/PostDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryList from './pages/CategoryList'

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<PostLists/>} />
        <Route path='/posts/:id' element={<PostDetails/>} />
        <Route path='/posts/category/:id' element={<CategoryList/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
