import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Newcard, Mycard } from "../../pages";
import { AppContext } from "../../App";
import { useContext } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { activePage, setActivePage } = useContext(AppContext);

  const handleNewCard = () => {
    setActivePage("newCard");
  };
  const handleMyCard = () => {
    setActivePage("myCard");
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className="p-10">
      <Grid
        container
        spacing={1}
        margin={0}
        className="flex justify-center px-32"
      >
        <Grid item xs={10} md={5}>
          <Item
            className="ps-0 bg-slate-950"
            color={activePage === "newCard" ? "primary" : "default"}
            onClick={handleNewCard}
          >
            <CreditCardIcon />
            <Typography>New Credit Card </Typography>
          </Item>
        </Grid>
        <Grid item xs={10} md={5}>
          <Item
            color={activePage === "myCard" ? "primary" : "default"}
            onClick={handleMyCard}
          >
            <CreditCardIcon />
            <Typography>My Cards </Typography>
          </Item>
        </Grid>
      </Grid>
      <Box sx={{ padding: 2, width: "100%" }} component="main">
        {children}
      </Box>
    </Box>
  );
};
