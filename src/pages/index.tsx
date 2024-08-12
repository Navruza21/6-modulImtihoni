import React, { useContext, useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import { CardType } from "../types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent } from "react";
import { TextField, Container, Grid } from "@mui/material";
import Group from "./Group.png";
import "./style.css";
import { createContext } from "react";
interface CardContextType {
  cardsArray: CardType[];
  setCardsArray: React.Dispatch<React.SetStateAction<CardType[]>>;
}
export const MyContext = createContext<CardContextType>({
  cardsArray: [],
  setCardsArray: () => {},
});
export const Newcard: React.FC = () => {
  const { cardsArray, setCardsArray } = useContext(MyContext);

  const onFinish = (values: Omit<CardType, "id">) => {
    const updateCards = [...cardsArray, { ...values, id: uuidv4() }];
    setCardsArray(updateCards);
    console.log(values);
    console.log("array", updateCards);
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        className="px-72"
      >
        <Form.Item label="Who is" className="w-[1200px]" name="userName">
          <Input className="w-full" />
        </Form.Item>{" "}
        <Form.Item label="Card Number" name="CardNumber" className="w-[1200px]">
          <InputNumber className="w-full" />
        </Form.Item>
        <Form.Item label="Expiry Date" name="ExpiryData" className="w-[1200px]">
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item label="Country" name="Country" className="w-[1200px]">
          <Select className="w-full">
            <Select.Option value="Uzbekistan">Uzbekistan</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label=" " className="w-[1200px]">
          <Button type="default" className="w-full mb-5">
            Cancel
          </Button>{" "}
          <Button type="primary" htmlType="submit" className="w-full">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export const Mycard = () => {
  const { cardsArray, setCardsArray } = useContext(MyContext);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: 4 }}
        className="px-56"
      >
        My Cards
      </Typography>

      <Box paddingBlock={1} paddingInline={5}>
        <Grid container spacing={3} margin={0} padding={0}>
          {cardsArray.map((card, index) => (
            <Grid key={index} item xs={6} md={4} className="parent-card">
              <img src={Group} alt="" />
              <Box className="cards" paddingLeft={3}>
                <Typography variant="subtitle2" className=" name">
                  {card.userName}
                </Typography>
                <Typography variant="subtitle2" className=" dataEnd">
                  {card.ExpiryData}
                </Typography>
                <Typography variant="body1" className=" number">
                  {card.CardNumber}
                </Typography>
                <Typography variant="subtitle2" className=" country">
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
