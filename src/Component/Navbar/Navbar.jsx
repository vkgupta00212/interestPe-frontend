import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const loginClick = ()=>{
      navigate("/notfound");
  };

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />,path: "/" },
    { text: "Contact us",icon: <PhoneIcon/>, path: "/notfound" },
    { text: "Login/SignUp",icon: <PersonIcon /> ,action:loginClick },
  ];

  return (
    <nav>
      <div className="nav-containor">
        <div className="nav-logo">
          <p>
            interestPe
            <li className="logo-tagline">Befikar lending</li>
          </p>
        </div>

        <div className="navbar-links">
          {menuOptions.map((item, index) =>
            item.text === "Login/SignUp" ? (
              <button
                className="nav-button"
                key={index}
                onClick={item.action}
              >
                {item.text}
              </button>
            ) : (
              <Link key={index} to={item.path}>
                {item.text}
              </Link>
            )
          )}
        </div>

        <div className="nav-bars">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/> 
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                {item.path ? (
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={item.action}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      </div>       

    </nav>
  );
};

export default Navbar;
