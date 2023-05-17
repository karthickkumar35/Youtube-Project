import React, { useState } from "react";
import LeftSideNavbar from "../leftSideNavbar/LeftSideNavbar";
import Objects from "../All Data/All-Objects";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { files } from "../Redux/stateSlice";

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState(Objects);
  const Navigate = useNavigate();
  const oneVideo = useSelector(({ sample }) => sample);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const video = (e) => {
    dispatch(files(e));
    Navigate("/PlayVideo");
  };

  const [valueCheck, setValueCheck] = useState(1);

  const dark = (e) => {
    setValueCheck(e);
    console.log(e);
  };

  return (
    <>
      <div className="homePage">
        <div className="sideNav">
          <LeftSideNavbar />
        </div>
        <div className="home">
          <Stack className="filterbar-row" spacing={2} direction="row">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="All"
                onClick={() => {
                  setState(Objects);
                  dark(value);
                }}
                className={`${valueCheck == 1 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Mixes"
                onClick={() => {
                  setState(Objects.filter((e) => e.mix === "mix"));
                  dark(value);
                }}
                className={`${valueCheck == 2 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Music"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "music"));
                  dark(value);
                }}
                className={`${valueCheck == 3 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Gadgets"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "gadgets"));
                  dark(value);
                }}
                className={`${valueCheck == 4 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Animated films"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "animated"));
                  dark(value);
                }}
                className={`${valueCheck == 5 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Bikes"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "bike"));
                  dark(value);
                }}
                className={`${valueCheck == 6 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Cars"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "cars"));
                  dark(value);
                }}
                className={`${valueCheck == 7 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Cartoons"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "cartoons"));
                  dark(value);
                }}
                className={`${valueCheck == 8 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Cooking"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "cooking"));
                  dark(value);
                }}
                className={`${valueCheck == 9 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Games"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "gaming"));
                  dark(value);
                }}
                className={`${valueCheck == 10 ? "filter-tab" : ""}`}
              />
              <Tab
                label="News"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "news"));
                  dark(value);
                }}
                className={`${valueCheck == 11 ? "filter-tab" : ""}`}
              />
              <Tab
                label="Smart phones"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "mobiles"));
                  dark(value);
                }}
                className={`${valueCheck == 12 ? "filter-tab" : ""}`}
              />
              <Tab
                label="TNPSC"
                onClick={() => {
                  setState(Objects.filter((e) => e.type === "tnpsc"));
                  dark(value);
                }}
                className={`${valueCheck == 13 ? "filter-tab" : ""}`}
              />
            </Tabs>
          </Stack>
          <div className="homeConMar">
            {state
              ?.filter((e) => e.name.toLowerCase().includes(oneVideo.search))
              ?.map((value, index) => (
                <div key={index} className="homeCard">
                  <a onClick={() => video(value, index)}>
                    <div className="home_thump_img">
                      <img src={value.thump} alt="no image"></img>
                    </div>
                    <div id="home_logo_hed4_para">
                      <div className="home_logo_img">
                        <img src={value.logo} alt="no image"></img>
                      </div>
                      <div className="home_hed_4_para">
                        <h4>{value.name}</h4>
                        <p style={{ marginTop: "10px" }}>SonyMusicSouthVEVO</p>
                        <p>52M views . 8 years ago</p>
                      </div>
                    </div>
                    <div></div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
