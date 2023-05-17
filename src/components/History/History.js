import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./History.scss";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import LeftSideNavbar from "../leftSideNavbar/LeftSideNavbar";

const History = () => {
  const state = useSelector(({ sample }) => sample);
  const [com, setCom] = useState(false);
  const [Fradio, setFradio] = useState(true);
  const [Sradio, setSradio] = useState(false);
  let changeCom = () => {
    setCom(true);
    setSradio(true);
    setFradio(false);
  };
  let changeCom1 = () => {
    setCom(false);
    setSradio(false);
    setFradio(true);
  };
  return (
    <>
      <LeftSideNavbar />
      <div className="Histories" style={{ marginLeft: "18%" }}>
        {state.isLoggedIn ? (
          <div className="His-in">
            {com ? (
              <div className="HistoryLogInCom">
                <h2>Community</h2>
                <p>You have no activity on Community posts</p>
              </div>
            ) : (
              <div className="HistoryLogIn">
                <h2 className="HistoryLogInTitle">Watch history</h2>
                <p className="HistoryLogInCon">Today</p>
              </div>
            )}
            <div className="HistoryLoginRight">
              {com ? (
                <></>
              ) : (
                <div className="HistoryLoginRightSearch">
                  <TextField
                    className="HistoryLoginRightSearchInput"
                    id="input-with-icon-textfield"
                    placeholder="Search watch history"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon className="HistorySearchIcon" />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </div>
              )}
              <p className="HistoryLoginRightTitle">History type</p>
              <div className="HistoryLoginRightDisplay">
                <label className="HistoryRadio" for="HistoryRadio1">
                  Watch history
                </label>
                <input
                  className="HistoryRadioBtn"
                  type="radio"
                  onClick={changeCom1}
                  name="HistoryRadio"
                  id="HistoryRadio1"
                  checked={Fradio}
                ></input>
              </div>
              <div className="HistoryLoginRightDisplay ">
                <label className="HistoryRadio" for="HistoryRadio2">
                  Community
                </label>
                <input
                  className="HistoryRadioBtn"
                  type="radio"
                  onClick={changeCom}
                  name="HistoryRadio"
                  id="HistoryRadio2"
                  checked={Sradio}
                ></input>
              </div>

              <div className="clearHistory">
                <div className="clearHistoryBor">
                  <Icon
                    className="clearHistoryIcon"
                    icon="material-symbols:delete-outline-rounded"
                  />
                  <p className="clearHistoryCon">Clear all watch history</p>
                </div>
              </div>
              <div className="clearHistory">
                <div className="clearHistoryBor">
                  <Icon
                    className="clearHistoryIcon"
                    icon="material-symbols:pause-circle-outline"
                  />
                  <p className="clearHistoryCon">Pause watch history</p>
                </div>
              </div>
              <div className="clearHistory">
                <div className="clearHistoryBor">
                  <Icon className="clearHistoryIcon" icon="ep:setting" />
                  <p className="clearHistoryCon">Manage all history</p>
                </div>
              </div>
              <div className="ManageItems">
                <a href="" className="manageLink">
                  Watch and search history
                </a>
                <a href="" className="manageLink">
                  Comments
                </a>
                <a href="" className="manageLink">
                  Live chat
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="HisLogged">
            {com ? (
              <p className="LoggedFalse">
                <Link className="LoggedFalseLink" to="/Login">
                  Sign in
                </Link>{" "}
                to view your Community history
              </p>
            ) : (
              <div className="History-logout">
                <div className="History-logo">
                  <Icon className="icons" icon="material-symbols:history" />
                </div>
                <p className="HistoryLogTitle">Keep track of what you watch</p>
                <p className="HistoryLogContant">
                  Watch history isn't viewable when signed out.
                  <a href="" className="learnHistory">
                    Learn more
                  </a>
                </p>
                <Link to="/Login" className="log-sign">
                  <Icon className="log-icon" icon="mdi:user-circle-outline" />{" "}
                  Sign in
                </Link>
              </div>
            )}
            <div className="HistoryLoggedRight">
              <p className="HistoryLoggedRightTitle">History type</p>
              <div className="HistoryLoggedRightDisplay">
                <label className="HistoryRadio" for="HistoryRadio1">
                  Watch history
                </label>
                <input
                  className="HistoryRadioBtn"
                  type="radio"
                  onClick={changeCom1}
                  name="HistoryRadio"
                  id="HistoryRadio1"
                  checked
                ></input>
              </div>
              <div className="HistoryLoggedRightDisplay ">
                <label className="HistoryRadio" for="HistoryRadio2">
                  Community
                </label>
                <input
                  className="HistoryRadioBtn"
                  type="radio"
                  onClick={changeCom}
                  name="HistoryRadio"
                  id="HistoryRadio2"
                ></input>
              </div>
              {com ? (
                <></>
              ) : (
                <>
                  <div className="clearHistory">
                    <div className="clearHistoryBor">
                      <Icon
                        className="clearHistoryIcon"
                        icon="material-symbols:delete-outline-rounded"
                      />
                      <p className="clearHistoryCon">Clear all watch history</p>
                    </div>
                  </div>
                  <div className="clearHistory">
                    <div className="clearHistoryBor">
                      <Icon
                        className="clearHistoryIcon"
                        icon="material-symbols:pause-circle-outline"
                      />
                      <p className="clearHistoryCon">Pause watch history</p>
                    </div>
                  </div>
                  <div className="clearHistory">
                    <div className="clearHistoryBor">
                      <Icon
                        className="clearHistoryIcon"
                        icon="material-symbols:delete-outline-rounded"
                      />
                      <p className="clearHistoryCon">
                        Clear all search history
                      </p>
                    </div>
                  </div>
                  <div className="clearHistory">
                    <div className="clearHistoryBor">
                      <Icon
                        className="clearHistoryIcon"
                        icon="material-symbols:pause-circle-outline"
                      />
                      <p className="clearHistoryCon">Clear search history</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default History;
