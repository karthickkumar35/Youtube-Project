import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Library.scss";
import { useSelector } from "react-redux";
import LeftSideNavbar from "../leftSideNavbar/LeftSideNavbar";

const Library = () => {
  const state = useSelector(({ sample }) => sample);
  const nav = useNavigate();
  let historyGo = () => {
    nav("../History");
  };
  return (
    <div>
      <LeftSideNavbar />
      <div className="LibarayFull" style={{ marginLeft: "18%" }}>
        {state.isLoggedIn ? (
          <div className="Lib-in">
            <div className="Library-login">
              <div className="LibraryHistory">
                <div className="LibraryDisplay" onClick={historyGo}>
                  <Icon className="icons" icon="material-symbols:history" />
                  <a href="#" className="LibraryLogInName">
                    History
                  </a>
                </div>
                <p className="LibraryLogInCon">
                  Save videos to watch later. Your list will be shown right
                  here.
                </p>
              </div>
              <div className="LibraryHistory">
                <div className="LibraryDisplay">
                  <Icon className="icons" icon="ic:outline-watch-later" />
                  <a href="#" className="LibraryLogInName">
                    Watch Later
                  </a>
                </div>
                <p className="LibraryLogInCon">
                  Save videos to watch later. Your list will be shown right
                  here.
                </p>
              </div>
              <div className="LibraryHistory">
                <div className="LibraryDisplay">
                  <Icon className="icons" icon="carbon:playlist" />
                  <a href="#" className="LibraryLogInName">
                    Playlists
                  </a>
                </div>
                <p className="LibraryLogInCon">
                  Playlists that you create or save will be shown here.
                </p>
              </div>
              <div className="LibraryHistory">
                <div className="LibraryDisplay">
                  <Icon className="icons" icon="bx:like" />
                  <a href="#" className="LibraryLogInName">
                    Liked videos
                  </a>
                </div>
                <p className="LibraryLogInCon">
                  Use the thumbs-up icon to like videos. Your list will be shown
                  right here.
                </p>
              </div>
              <div className="LibraryHistory">
                <div className="LibraryDisplay">
                  <Icon className="icons" icon="clarity:scissors-line" />
                  <a href="#" className="LibraryLogInName">
                    Your clips
                  </a>
                </div>
                <p className="LibraryLogInCon">
                  Clip and share your favourite moments. Your list will be shown
                  right here.
                </p>
              </div>
            </div>
            <div className="LibraryLoginRight">
              <div className="LibraryLoginRightSec LibraryLoginRightSec1">
                <div className="LibraryBoxDisplay">
                  <Icon
                    className="Library-box1"
                    icon="fluent:border-none-20-regular"
                  />
                </div>
              </div>
              <div className="LibraryLoginRightSec">
                <p className="LibraryLoginRightName">Subscriptions</p>
                <p className="LibraryLoginRightCount">1</p>
              </div>
              <div className="LibraryLoginRightSec">
                <p className="LibraryLoginRightName">Uploads</p>
                <p className="LibraryLoginRightCount">0</p>
              </div>
              <div className="LibraryLoginRightSec">
                <p className="LibraryLoginRightName">Likes</p>
                <p className="LibraryLoginRightCount">0</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="library-logout">
            <div className="library-logo">
              <Icon
                className="icons"
                icon="material-symbols:video-library-outline"
              />
            </div>
            <p className="libraryLogTitle">Enjoy your favorite videos</p>
            <p className="libraryLogContant">
              Sign in to access videos that you’ve liked or saved
            </p>
            <Link to="/Login" className="log-sign">
              <Icon className="log-icon" icon="mdi:user-circle-outline" /> Sign
              in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
