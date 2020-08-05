import React from "react";
import { Button } from "@material-ui/core";

const Header = ({ handleSignout, handleOpen, isSignedIn }) => {
  return (
    <div className="header">
      <h2>Header</h2>
      {isSignedIn && <Button onClick={handleSignout}>Sign out</Button>}
      {!isSignedIn && <Button onClick={handleOpen}>Login</Button>}
    </div>
  );
};

export default Header;
