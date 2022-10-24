import './App.css';
import Main from './Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/stats',
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
