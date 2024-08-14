
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage';
import StudentLogin from './Components/StudentLogin';
import ResultPage from './Components/ResultPage';
import NewSudent from './Components/NewSudent';
import EditResult from './Components/EditResult';
import EditPage from './Components/EditPage';

function App() {


  return (
    <div className="w-3/4 flex flex-wrap justify-center my-[100px] mx-auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/studentLogin' element={<StudentLogin/>}/>
        <Route path='/resultPage' element={<ResultPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/addResult' element={<NewSudent/>}/>
        <Route path='/editResult' element={<EditResult/>}/>
        <Route path='/editPage/:ParamId' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
