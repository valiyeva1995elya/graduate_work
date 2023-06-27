import { Routes, Route } from "react-router-dom";
import Main from "./components/main/index";
import University from './components/university/index';
import PrivateRoute from "./components/utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import HomePage from "./components/home";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/university" element={<University />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthRootComponent />} />
        <Route path="/register" element={<AuthRootComponent />} />
      </Routes>
    </>
  );
}

export default App;
