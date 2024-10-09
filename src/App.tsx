import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

const App = () => {
   return (
      <RouterProvider
         router={createBrowserRouter([
            {
               path: "/",
               element: <RootLayout />,
               children: [
                  {
                     index: true,
                     element: <Home />,
                  },
                  {
                     path: "profile",
                     element: <Profile />,
                  },
                  {
                     path: "about",
                     element: <About />,
                  },
               ],
            },
         ])}
      />
   );
};

export default App;
