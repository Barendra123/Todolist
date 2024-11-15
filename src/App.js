// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
// import ClassComponent from './Component/ClassComponent';
// import FunctionalComponent from './Component/FunctionalComponent';
// import Message from './Component/Message';
import TodoList from './Component/TodoList';
// import Employee from './Component/Employee'
// import JsonServer from './Component/JsonServer';
// import SutdentDetails from './Component/SutdentDetails'
// import Header from './Component/Header' 
// import{BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Component/Home';
// import About from './Component/About';
// import Contact from './Component/Contact';

function App() {  
  return (
    <Fragment>
      {/* <h1 className='webpage'>This is a React Application Web Page</h1> */}
    {/* <FunctionalComponent name='Jhon' time='8 AM' class='Reacts'></FunctionalComponent>
    <ClassComponent ProductName='T-shirt' Rs='5000/-' Quantity='4' Size='XL' Color='Black & White' Total='20,000/-'></ClassComponent> */}
    {/* <Message /> */}
    <TodoList />
    {/* <Employee/> */}
    {/* <JsonServer/> */}
    {/* <SutdentDetails/> */}
    {/* <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' index={true} element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes> */}
    {/* </BrowserRouter> */}
    
    </Fragment>
  );
}
export default App;
