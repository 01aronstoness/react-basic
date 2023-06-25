import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ApiService from "../services";
import Drawer from "@mui/material/Drawer";

const Login = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const [users, setUser] = useState([]);
  const [drawerOpen, handleDrawerOpen] = useState(false);
  useEffect(() => {
    ApiService.getUserAPI().then((res) => {
      console.log(res);
      setUser(res);
    });
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    ApiService.postUserAPI(data).then((res) => {
      console.log(res);
    });
    //   console.log( "sdsdsd", getUserAPI())
  }, []);
  return (
    <>
      <p>Login called {params.id}</p>
      {/*  */}
      <button
        onClick={() => {
          navigate("/singup", { state: { name: "nishant" } });
        }}
      >
        Singup
      </button>
      <button
        onClick={() => {
            handleDrawerOpen(true)
        }}
      >
        Draer Open
      </button>
      <Drawer open={drawerOpen}
      anchor="right"
      hideBackdrop={false}
    //   onClose={}
      >
        {users.map((ele, index) => {
          return (
            <div key={index}>
              <div className="profile-card text-center shadow bg-light p-4 my-5 rounded-3">
                <div className="profile-photo shadow">
                  <img
                    src="/images/user-img-3.jpg"
                    alt="profile Photo"
                    className="img-fluid"
                  />
                </div>
                <h3 className="pt-3 text-dark">{ele.name}</h3>
                <p className="text-secondary">{ele.company.name}</p>
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                        {ele.username}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                        {ele.address.city}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default Login;
