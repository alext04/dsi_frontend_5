
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import RootLayout from "./layouts/RootLayout";
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
]);
function App() {
 

  return <RouterProvider router={router} />;
}

export default App
