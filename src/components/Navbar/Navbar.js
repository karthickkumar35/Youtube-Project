import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Icon } from "@iconify/react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logedin } from "../Redux/stateSlice";
import { user } from "../Redux/stateSlice";
import { search } from "../Redux/stateSlice";

const Navbar = () => {
  const state = useSelector(({ sample }) => sample);
  const dispatch = useDispatch();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    dispatch(logedin(false));
    navigate("/Home");
    localStorage.clear();
  };
  console.log(state.user);
  let homepage = () => {
    navigate("/Home");
  };
  return (
    <div className="NavFull">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-col-1">
            <div className="navbar-menu">
              <MenuIcon />
            </div>
            <div className="navbar-icon" onClick={homepage}>
              <img
                className="youtube-icon"
                src={require("./Image/youtube.jpg")}
              />
            </div>
          </div>
          <div className="navbar-col-2">
            <div className="navbar-search-card">
              {/* <TextField className='navbar-search-input' id="outlined-basic"   placeholder='search' size='small' /> */}
              <input
                className="navbar-search-input"
                placeholder="search"
                onChange={(e) => dispatch(search(e.target.value))}
              />
              <div className="navbar-search-icon">
                <SearchIcon className="cursorP" />
              </div>
            </div>
            <div className="navbar-mike">
              <KeyboardVoiceIcon className="cursorP" />
            </div>
          </div>

          {state.isLoggedIn ? (
            <div className="navbar-col-1">
              <div className="navbar-cam-icon">
                <VideoCameraBackOutlinedIcon className="cursorP" />
              </div>
              <div className="navbar-msg-icon">
                <NotificationsNoneOutlinedIcon className="cursorP" />
              </div>
              <SearchIcon className="d-mdz-none" />
              <div className="navbar-profile">
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      {/* <AccountCircle /> */}
                      {[state.user]?.map((value, index) => {
                        return (
                          <>
                            <img
                              className="userImage"
                              src={`${value.img}`}
                            ></img>
                          </>
                        );
                      })}
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {[state.user]?.map((value, index) => {
                        return (
                          <div key={index}>
                            <div className="userRow">
                              <img className="userImage" src={value.img}></img>
                              <div className="usercon">
                                <p className="userName">{value.name}</p>
                                <p className="useremail">{value.mail}</p>
                                <a className="usermanage">
                                  Manage your Google Account
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <MenuItem onClick={handleClose}>Switch Account</MenuItem>
                      <MenuItem onClick={Logout}>Logout</MenuItem>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="NavbarSignIn">
              <Icon className="icon" icon="mdi:dots-vertical" />
              <Link to="/Login" className="log-sign">
                <Icon className="log-icon" icon="mdi:user-circle-outline" />{" "}
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
