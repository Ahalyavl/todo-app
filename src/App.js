import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTitle from './components/SearchTitle';
import DeleteTitle from './components/DeleteTitle';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTodo/>}/>
          <Route path='/search' element={<SearchTitle/>}/>
          <Route path='/delete' element={<DeleteTitle/>}/>
          <Route path='/viewAll' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
