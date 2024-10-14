import  { useContext, useEffect, useState } from "react"; 
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  // Check if the user is logged in  !!to convert in boolean
  const isLoggedIn = !!sessionStorage.getItem("username");
  const username = sessionStorage.getItem("username"); // Get the username from session storage

  // Logout functionality
  

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      color={isActive ? "default" : "transparent"}
      elevation={isActive ? 4 : 0}
      sx={{ transition: "all 0.3s ease-in-out" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: isActive ? 2 : 3 }}>
          {/* Logo Section */}
          <Box sx={{ flex: 0, mr: 2 }}>
            <Link href="/" underline="none" sx={{ display: "flex", color: "black", fontSize: "1.2rem" }}>
              Shopi
            </Link>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              All
            </Link>
            <Link href="/clothing" underline="hover" color="inherit">
              Clothes
            </Link>
            <Link href="/electronics" underline="hover" color="inherit">
              Electronics
            </Link>
            <Link href="/jewelery" underline="hover" color="inherit">
              Jewellery
            </Link>
          </Box>

          {/* Search Bar */}

          {/* Right Section (Cart Icon and User Info) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "flex-end" }}>
            

            {/* Conditionally render username or Account/Login or Logout */}
            {isLoggedIn ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <span>{username}</span> {/* Display the logged-in username */}
                <Link href="/loggedin" 
            
                  underline="hover"
                  color="inherit"
                  sx={{ cursor: "pointer", fontWeight: "bold", fontSize: "1rem", display: "flex", alignItems: "center" }}
                >
                  
                  <AccountCircleIcon sx={{ fontSize: "25px", ml: 1 }} />
                </Link>
              </Box>
            ) : (
              <Link href="/login" underline="hover" color="inherit" sx={{ display: "flex", alignItems: "center" }}>
               login
                <AccountCircleIcon sx={{ fontSize: "25px", ml: 1 }} />
              </Link>
            )} 
            <Link href="/cart" underline="hover" color="inherit">
              My Orders
            </Link>

            {/* Cart Icon */}
            <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setIsOpen(!isOpen)}
              >
                <ShoppingCartIcon />
              </IconButton>
              {/* Item Amount Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: 18,
                  height: 18,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: 12,
                }}
              >
                {itemAmount}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
