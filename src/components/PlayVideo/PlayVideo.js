import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SortIcon from "@mui/icons-material/Sort";
import "./Playvideo.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import SentimentSatisfiedAltSharpIcon from "@mui/icons-material/SentimentSatisfiedAltSharp";
import { useDispatch, useSelector } from "react-redux";
import Objects from "../All Data/All-Objects";
import { comment } from "../Redux/stateSlice";
import { Checkbox } from "@mui/material";

let commentBox = [];
const PlayVideo = () => {
  const sta = useSelector(({ sample }) => sample);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Video = useSelector(({ sample }) => sample.files);
  const [state, setState] = useState(Objects);
  const ObjectsVideo = state.filter((e) => e.type === Video.type);
  console.log(ObjectsVideo);

  const [videoState, setVideoState] = useState([Video]);

  const oneVideo = (e) => {
    // console.log(e);
    setVideoState([e]);
  };

  //--------------comment sec-----------//
  const comments = useSelector(({ sample }) => sample.comment);
  const dispatch = useDispatch();

  const [cap, setcap] = React.useState();
  let inpCom = (e) => {
    console.log("e", e.target.value);
    setcap(e.target.value);
    console.log(setcap);
  };
  let mapComOut = () => {
    setcap("");
  };
  let mapCom = () => {
    let setup = { k: cap };
    if (cap !== "") {
      if (comments.length > 0) {
        dispatch(comment([...comments, setup]));
        setcap("");
        console.log(comments);
      } else {
        commentBox.push(setup);
        dispatch(comment(commentBox));
        setcap("");
        console.log(commentBox);
      }
      console.log(comments);
    }
  };
  //-------------Like Count-----------------//

  let [liker, setLiker] = useState(0);
  const [FLike, setFLike] = useState(false);
  const [SLike, setSLike] = useState(false);
  let addin = () => {
    if (liker < 1) {
      setLiker(liker + 1);
      setSLike(false);
      setFLike(true);
    }
  };
  let subin = () => {
    if (liker > 0) {
      setLiker(liker - 1);
      setSLike(true);
      setFLike(false);
    }
  };

  return (
    <>
      <div id="details-sec">
        <div className="details-container">
          <div className="details-row-1">
            {videoState.map((val, i) => {
              return (
                <div key={i} id="playVideo">
                  <form>
                    <div className="videodiv">
                      <video
                        // autoPlay={true}
                        className="details-video"
                        src={val.url}
                        poster={val.thump}
                        controls
                      />
                    </div>
                    <div className="details-col-2">
                      <h4>{val.name}</h4>
                    </div>
                    <div className="details-col-3">
                      <div className="details-description-1">
                        <div className="details-channel-icon">
                          <img className="details-channel" src={val.logo} alt="clogo"/>
                        </div>
                        <div className="details-channel-name">
                          <h4>{val.cName}</h4>
                          <p className="sub">123k Subscribers</p>
                        </div>
                        <div className="details-channel-subscribe">
                          <button id="subscribe" disabled>subscribe</button>
                        </div>
                      </div>
                      <div className="details-description-2">
                        <div className="details-like">
                          <Checkbox
                            id="thumbsup"
                            disabled={sta.isLoggedIn ? false : true}
                            onClick={() => addin(value)}
                            checked={FLike}
                            icon={<ThumbUpOffAltIcon />}
                            checkedIcon={<ThumbUpAltIcon />}
                          />
                          <p id="like-count">{liker}</p>
                          <Checkbox
                            id="thumbsdown"
                            disabled={sta.isLoggedIn ? false : true}
                            onClick={() => subin(value)}
                            checked={SLike}
                            icon={<ThumbDownOffAltIcon />}
                            checkedIcon={<ThumbDownAltIcon />}
                          />
                        </div>
                        <div className="details-share">
                          <button id="share" >
                            <ReplyIcon />
                            Share
                          </button>
                        </div>
                        <div className="details-download">
                          <button id="download">
                            <DownloadIcon />
                            Download
                          </button>
                        </div>
                        <div className="details-extra">
                          <button id="extra">
                            <MoreHorizIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="details-col-4">
                      <div className="details-video-description">
                        <p className="discription">YouTube channel description may be something as simple as: “new videos every Friday!” Alternatively, you could note a more detailed schedule: “We post how-to videos every Monday, 
                          unboxing videos every Wednesday, and giveaways on Friday!”</p>
                      </div>
                    </div>
                    <div className="details-col-5">
                      <div className="details-comment-count">
                        <div className="comment-count">
                          <p>50 Comments</p>
                        </div>
                        <div className="comment-sort">
                          <SortIcon />
                          Sort
                        </div>
                      </div>
                      <div className="details-comment">
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                          {[sta.user]?.map((value, index) => {
                            return (
                              <>
                                {sta.isLoggedIn ? (
                                  <img
                                    className="userImage margin-img"
                                    src={`${value.img}`}
                                    alt="user"
                                  ></img>
                                ) : (
                                  <img
                                    className="userImage margin-img"
                                    src={require("./images/usericon.png")}
                                    alt="user"
                                  ></img>
                                )}
                              </>
                            );
                          })}
                          <TextField
                            style={{ width: "100%" }}
                            id="input-with-sx"
                            value={cap}
                            onChange={inpCom}
                            label="Add a Comment"
                            variant="standard"
                            disabled={sta.isLoggedIn ? false : true}
                          />
                        </Box>
                      </div>
                      <div className="comment-btn-row">
                        <div className="comment-icon">
                          <div className="comment-smile">
                            <SentimentSatisfiedAltSharpIcon />
                          </div>
                          <div className="comment-para">
                            <p>
                              By completing this action you are creating a{" "}
                              <span>​channel</span> and agree to{" "}
                              <span>​YouTube's Terms of Service</span>​.
                            </p>
                          </div>
                        </div>
                        <div className="comment-btn">
                          <div className="comment-cancel">
                            <Button
                              onClick={mapComOut}
                              color="secondary"
                              disabled={false}
                              size="small"
                              variant="filledTonal"
                              value="cancel"
                            >
                              cancel
                            </Button>
                          </div>
                          <div className="comment-ok">
                            <Button
                              onClick={mapCom}
                              color="secondary"
                              size="small"
                              variant="filledTonal"
                              value="cancel"
                              disabled = {sta.isLoggedIn? false : true}
                            >
                              Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="commentSection">
                    {comments?.map((value, index) => {
                      return (
                        <>
                          {[sta.user]?.map((value, index) => {
                            return (
                              <>
                                <div className="userNameCom" key={index}>
                                  <img
                                    className="userImage margin-img"
                                    src={`${value.img}`}
                                    alt="user"
                                  ></img>
                                  <div>
                                    <p className="userNameInCom">
                                      {value.name}
                                    </p>
                                    <p className="timecomment">1 second ago</p>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                          <div className="user-comment">
                            <p>{value.k}</p>
                            <div className="details-like">
                              <button id="thumbsup">
                                <ThumbUpOffAltIcon />
                              </button>
                              <input id="like-count"></input>
                              <button id="thumbsdown">
                                <ThumbDownOffAltIcon />
                              </button>
                              <p style={{ fontWeight: "500" }}>Reply</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="details-row-2">
            <div id="details-filterbar">
              <Stack className="filterbar-row" spacing={2} direction="row">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab className="filterbar-btn" label="All" />
                  <Tab className="filterbar-btn" label="Mixes" />
                  <Tab className="filterbar-btn" label="Music" />
                  <Tab className="filterbar-btn" label="Animated films" />
                  <Tab className="filterbar-btn" label="Bikes" />
                  <Tab className="filterbar-btn" label="Cars" />
                  <Tab className="filterbar-btn" label="Cartoons" />
                  <Tab className="filterbar-btn" label="Cooking" />
                  <Tab className="filterbar-btn" label="Games" />
                  <Tab className="filterbar-btn" label="News" />
                  <Tab className="filterbar-btn" label="Smart phones" />
                  <Tab className="filterbar-btn" label="TNPSC" />
                </Tabs>
              </Stack>
            </div>
            {ObjectsVideo.map((value, i) => {
              return (
                <div
                  key={i}
                  className="details-card-2"
                  onClick={() => oneVideo(value)}
                >
                  <div className="details-right-video">
                    <img className="details-right-image" src={value.thump} alt="cImg" />
                  </div>
                  <div className="details-right-description">
                    <div className="details-name">
                      <h4>{value.name}</h4>
                    </div>
                    <div className="details-channel">
                      <p className="chennalColor">{value.cName}</p>
                    </div>
                    <div className="details-content">
                      <div className="details-view">
                        <p className="viewColor">76k View</p>
                      </div>
                      <div className="details-ago">
                        <p className="viewColor">3 Month Ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
