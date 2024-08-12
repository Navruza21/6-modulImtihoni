import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent } from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import { CardType } from "../types";
import Group from "./Group.png";
import { useContext } from "react";
import "./style.css";
import { MyContext } from "../App";

export const Mycard = () => {
  const context = useContext(MyContext);
  const { cardsArray } = context;
  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: 4, paddingInline: 10 }}
      >
        My Cards
      </Typography>

      <Box paddingBlock={1} paddingInline={5}>
        <Grid container spacing={3} margin={0} padding={0}>
          {cardsArray.map((card, index) => (
            <Grid key={index} item xs={6} md={4} className="parent-card">
              <img src={Group} alt="" />
              <Box className="cards" paddingLeft={3}>
                <Typography variant="body1" className=" name">
                  {card.userName}
                </Typography>
                <Typography variant="body1" className=" dataEnd">
                  {card.ExpiryData}
                </Typography>
                <Typography variant="h5" className=" number">
                  {card.CardNumber}
                </Typography>
                <Typography variant="body1" className=" country">
                  {" "}
                  {card.Country}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
