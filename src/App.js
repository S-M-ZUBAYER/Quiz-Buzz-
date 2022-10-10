import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CourseQuizzes from './components/CourseQuizzes/CourseQuizzes';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home.js/Home';
import Statistics from './components/Statistics/Statistics';
import Root from './layout/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/home/:courseId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`),
          element: <CourseQuizzes></CourseQuizzes>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
