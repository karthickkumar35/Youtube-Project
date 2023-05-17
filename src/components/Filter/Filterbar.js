import * as React from "react";
import "./Filterbar.scss";
import { Stack, Tab, Tabs } from "@mui/material";

const Filterbar = () => {
  const [state, setState] = React.useState(Objects);
  const [valueCheck, setValueCheck] = React.useState(1);

  const dark = (e) => {
    setValueCheck(e);
    console.log(e);
  };
  return (
    <>
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
    </>
  );
};

export default Filterbar;
