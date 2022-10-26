import './App.css';
import Main from './Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Quizes from './components/Quizes';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [


        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'/home/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quizes></Quizes>
          
        },
        {
          path: '/stats',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Stats></Stats>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:"*",
      element:<ErrorPage></ErrorPage>
     
    },
   
  ]);
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
