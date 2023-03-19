import React, { useState } from "react";
import { slide as Menu, ReactBurgerMenu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import Text from "./Text";
import colors from "tailwindcss/colors";
import { useTheme } from "../hooks/useTheme";

// interface IHamburguerProps extends ReactBurgerMenu {}

export function HamburguerMenu() {
  const navigate = useNavigate();
  const theme = useTheme();
  let styles = {};

  if (theme.theme === "dark") {
    styles = {
      bmBurgerButton: {
        position: "relative",
        zIndex: "2",
        top: "0",
        left: "0",
        width: "2.25em",
        height: "2.25em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      bmBurgerBars: {
        background: `${colors.orange[500]}`,
        width: "2.25em",
      },
      bmBurgerBarsHover: {
        background: `${colors.orange[200]}`,
      },
      bmCrossButton: {
        height: "2.25em",
        width: "2.25em",
        marginRight: "1em",
        marginTop: '1.6em'
      },
      bmCross: {
        background: `${colors.orange[500]}`,
        height: "1.6em",
        width: "0.4em",
      },
      bmMenuWrap: {
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100%",
      },
      bmMenu: {
        background: `${colors.gray[900]}`,
        padding: "1.6em 1.4em 0",
        fontSize: "1.4em",
      },
      bmMorphShape: {
        fill: `${colors.blue[600]}`,
      },
      bmItemList: {
        color: "white",
        padding: "0.2em",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      },
      bmItem: {},
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0px",
        height: "100%",
      },
    };
  } else {
    styles = {
      bmBurgerButton: {
        position: "relative",
        zIndex: "2",
        top: "0",
        width: "2.25em",
        height: "2.25em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      bmBurgerBars: {
        background: `${colors.orange[500]}`,
        width: "2.25em",
      },
      bmBurgerBarsHover: {
        background: `${colors.orange[200]}`,
      },
      bmCrossButton: {
        height: "2.25em",
        width: "2.25em",
        marginRight: "1em",
        marginTop: '1.6em'
      },
      bmCross: {
        background: `${colors.orange[500]}`,
        height: "1.6em",
        width: "0.4em",
      },
      bmMenuWrap: {
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100%",
      },
      bmMenu: {
        background: `${colors.gray[200]}`,
        padding: "1.6em 1.4em 0",
        fontSize: "1.4em",
      },
      bmMorphShape: {
        fill: `${colors.gray[200]}`,
      },
      bmItemList: {
        color: "white",
        padding: "0.2em",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      },
      bmItem: {},
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0px",
        height: "100%",
      },
    };
  }

  return (
    <Menu styles={styles}>
      <a
        id="home"
        className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Text size="3xl">Home</Text>
      </a>
      <a
        id="about"
        className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 cursor-pointer"
        onClick={() => navigate("/about")}
      >
        <Text size="3xl">Sobre</Text>
      </a>
      <a
        id="catalog"
        className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 cursor-pointer"
        onClick={() => navigate("/catalog")}
      >
        <Text size="3xl">Catálogo</Text>
      </a>
      <a
        id="contact"
        className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 cursor-pointer"
        onClick={() => navigate("/contact")}
      >
        <Text size="3xl">Contato</Text>
      </a>
    </Menu>
  );
}
