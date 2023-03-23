import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateCategory } from "./components/createCategory/CreateCategory";
import { CreateUser } from "./components/createUser/CreateUser";
import { Layout } from "./components/layout/Layout";
import { UserList } from "./components/userlist/UserList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout>
              <CreateCategory />
            </Layout>
          }
        ></Route>
        <Route
          path="/createUser"
          element={
            <Layout>
              <CreateUser />
            </Layout>
          }
        ></Route>
        <Route
          path="/userList/:category/:subCategory"
          element={
            <Layout>
              <UserList />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
