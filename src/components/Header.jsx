import React from "react";
import './header.css'
const user = [
  {
    name: "Learn & Build",
    deacription: "Welcome to Javascript",
    image:
      "https://th.bing.com/th/id/OIP.NraLp4k9YvDof6O9eMwGkwHaF7?pid=ImgDet&rs=1",
  },
  {
    name: "Learn & Core",
    deacription: "Welcome to React",
    image:
      "https://th.bing.com/th/id/OIP.X7n6rGRdw2XXSzuIV7qwPQHaHw?pid=ImgDet&rs=1",
  },
  {
    name: "Learn & Develop",
    deacription: "Welcome to Angular",
    image:
      "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/ironman-marvel-samuel-whitton.jpg",
  },
  {
    name: "Learn & Teach",
    deacription: "Welcome to Vue",
    image:
      "https://th.bing.com/th/id/OIP.HZAPZXSC1BxpUQMotMHVpQHaHL?pid=ImgDet&w=2550&h=2473&rs=1",
  },
];

const Header = () => {
  return (
    <>
      {user.map((element, index) => {
        console.log(element, index);
        return (
          <div key={element.name}>
            <p style={false ? { color:"grey", fontSize:20, } : { color:'red', fontSize:40}}>Hi, myself {element.name}</p>
            <img src={element.image}  className="header_img"/>
            <p>{element.deacription}</p>
          </div>
        );
      })}

{/* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button> */}
      {/* 
      <img src={user[0].image} />
      <p>{user[0].deacription}</p>

      <p>Hi, myself {user[1].name}</p>
      <img src={user[1].image} />
      <p>{user[1].deacription}</p>

      <p>Hi, myself {user[2].name}</p>
      <img src={user[2].image} />
      <p>{user[2].deacription}</p>

      <p>Hi, myself {user[3].name}</p>
      <img src={user[3].image} />
      <p>{user[3].deacription}</p> */}
    </>
  );
};

export default Header;
