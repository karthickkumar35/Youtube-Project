import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logedin } from "../Redux/stateSlice";
import { Icon } from "@iconify/react";
import "./Login.scss";
import { user } from "../Redux/stateSlice";

let object = [
  {
    name: "karthick",
    password: "12345",
    mail: "karthick444@gmail.com",
    img: "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2FWhatsApp%20Image%202023-05-03%20at%203.20.50%20PM.jpeg?alt=media&token=3f7624ac-2d47-45dd-9130-4450129cd40d",
  },
  {
    name: "lingaraj",
    password: "asdfg",
    mail: "lingaraj86@gmail.com",
    img: "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2F1678943366834.jpg?alt=media&token=d33b54eb-ca93-49d8-a80a-dc20d3892dea",
  },
  {
    name: "selva",
    password: "54321",
    mail: "selva86@gmail.com",
    img: "https://firebasestorage.googleapis.com/v0/b/fir-b763d.appspot.com/o/Images%2FWhatsApp%20Image%202023-05-04%20at%2012.32.31%20PM.jpeg?alt=media&token=e7f9508f-123c-4870-baf2-15cf650c8a25",
  },
];
const Login = () => {
  const [inpDes, setDes] = useState("");
  const [formSub, setFormsub] = useState(false);
  const [found, setFound] = useState(false);

  //---------------Redux-----
  let UserId = JSON.parse(localStorage.getItem("UserId"));
  const state = useSelector(({ sample }) => sample);
  const users = useSelector(({ sample }) => sample.user);
  const dispatch = useDispatch();
  console.log(state);

  const inputDes = (e) => {
    console.log("e", e.target.value);
    setDes(e.target.value);
  };
  let navigate = useNavigate();
  let LoginAcc = () => {
    navigate("/Login");
  };
  let UId = UserId[0].Name;
  const sub = (e) => {
    e.preventDefault();
    setFormsub("true");
    console.log(inpDes);
    let login = object.find((e) => e.name == UId && e.password === inpDes);
    if (login) {
      navigate("/Home");
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      dispatch(logedin(true));
      localStorage.setItem("user", JSON.stringify(login));
      dispatch(user(login));
      console.log(login);
    } else {
      setFound(true);
    }
  };
  console.log(users);
  /*------------m--ui----*/
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-bg background-images">
      <form onSubmit={sub}>
        <div className="LoginHeader">
          <img src={require("./images/google.png")}></img>
          <h2 className="login-head">Hi User</h2>
          <p id="AccontLog" onClick={LoginAcc}>
            <Icon
              className="AccountIcon"
              style={{ color: "#1a73e8" }}
              icon="mdi:user-circle"
            />
            {UserId?.map((value, index) => {
              return <p className="AccUserId">{value.Name}</p>;
            })}
            <Icon
              className="AccountIcon"
              icon="material-symbols:keyboard-arrow-down-rounded"
            />
          </p>
        </div>
        <FormControl
          style={{ color: "#fff" }}
          className="input"
          type={"password"}
          value={inpDes}
          onChange={inputDes}
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          focused
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {inpDes === "" && formSub && (
          <div className="errorMsg">The password Is Required</div>
        )}
        <div className="LoginDisplay" style={{ marginTop: "50px" }}>
          <a href="" className="LoginBlueText">
            Forget password?
          </a>
          <input className="link1" type={"submit"} value={"Login"}></input>
        </div>
        {found && <div className="errorMsg">Enter crt password</div>}
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
