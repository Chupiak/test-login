import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import mops from './components/2mba.jpg.webp';

function App() {
  const User = {
    email: "chupyak@gmail.com",
    password: "123",
    name: "Mykola",
    fullName: "Mykola Chupiak",
    country: "Ukraine",
    age: 44,
    job: "Developer"
  }

  const [user,setUser] = useState({name:"", email:"", country: "", age:"", job:"", fullName:"" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email === User.email && details.password === User.password && details.name === User.name) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        age: User.age,
        job: User.job,
        country: User.country,
        fullName: User.fullName
      });
    } else {
      console.log("Details do not match!");
      setError("Incorrect login or password");
    }
  }

  const Logout = () => {
    setUser({name:"", email: ""});
  }
  return (
      <div className="App">



        {(user.email !== "") ? (

            <div className="welcome">
              <img src={mops} alt="welcome" width={422} height={300}/>
              <h2><center><span>{user.name}</span>, welcome to 2MBA ! </center></h2>
              <h5>FULL NAME : <span>{user.fullName}</span>  </h5>
              <h5>COUNTRY : <span>{user.country}</span>  </h5>
              <h5>JOB : <span>{user.job}</span> </h5>
              <h5>AGE: <span>{user.age}</span>  </h5>
              <button onClick={Logout}> Logout</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error}/>
        )}
      </div>
  );
}
export default App
