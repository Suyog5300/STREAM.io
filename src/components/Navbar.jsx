import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import  {new_logo } from "/public";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      postion: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{display:'flex',alignItems:'center'}}>
        <img src={"/new_logo.png"} alt="logo" height={80}  />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
