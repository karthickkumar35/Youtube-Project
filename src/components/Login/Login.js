import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";

let object = [
  {
    name: "karthick",
    password: "12345",
    img: "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2F1678943366834.jpg?alt=media&token=d33b54eb-ca93-49d8-a80a-dc20d3892dea",
  },
  {
    name: "selva",
    password: "12345",
  },
  {
    name: "lingaraj",
    password: "54321",
    img: "",
  },
];
const Login = () => {
  const [inpName, setName] = useState("");
  const [formSub, setFormsub] = useState(false);
  const [found, setFound] = useState(false);

  //---------------Redux-----

  const state = useSelector(({ sample }) => sample);
  const dispatch = useDispatch();
  console.log(state);

  const inputName = (e) => {
    console.log("e", e.target.value);
    setName(e.target.value);
  };
  let navigate = useNavigate();
  const sub = (e) => {
    e.preventDefault();
    setFormsub("true");
    console.log(inpName);
    let login = object.find((e) => e.name === inpName);
    let setup = { Name: inpName };
    if (login) {
      localStorage.setItem("UserId", JSON.stringify([setup]));
      navigate("/Login2");
    } else {
      setFound(true);
    }
  };
  /*------------m--ui----*/
  return (
    <div className="login-bg background-images">
      <form onSubmit={sub}>
        <div className="LoginHeader">
          <img src={require("./images/google.png")}></img>
          <h2 className="login-head">Sign in</h2>
          <p id="loginCon">to continue to Youtube</p>
        </div>
        <TextField
          style={{ color: "#fff" }}
          className="input"
          value={inpName}
          onChange={inputName}
          id="outlined-basic"
          label="Email or Phone"
          variant="outlined"
        />
        {inpName === "" && formSub && (
          <div className="errorMsg">Enter email or phone number</div>
        )}
        <a href="" className="LoginBlueText">
          Forget email?
        </a>

        <p className="LoginContent">
          Not your computer? Use Guest mode to sign in privately.
          <a href="" className="LoginBlueText">
            Learn more
          </a>
        </p>
        <div className="LoginDisplay">
          <a href="" className="LoginBlueText">
            Create account
          </a>
          <input className="link1" type={"submit"} value={"Next"}></input>
        </div>
        {found && <div className="errorMsg">Enter crt email or phone no</div>}
      </form>
      <div className="LagDisplay">
        <FormControl variant="standard" className="LagInput">
          <InputLabel id="demo-simple-select-label">
            English(United States)
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="English(United States)"
          >
            <MenuItem value={10}>Tamil</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>Korean</MenuItem>
          </Select>
        </FormControl>
        <div className="LoginHelpDisplay">
          <a href="" className="LoginLink">
            Help
          </a>
          <a href="" className="LoginLink">
            Privacy
          </a>
          <a href="" className="LoginLink">
            Tearms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
