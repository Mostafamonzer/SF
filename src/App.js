import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';

let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'About' , element:<About/>},
    {path:'portofolio' , element:<Portofolio/>},
    {path:'contact' , element:<Contact/>},
 
  ] }
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
