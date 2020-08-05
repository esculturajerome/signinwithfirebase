import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase";
import { auth } from "./config/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import ListingsScreen from "./screens/ListingsScreen";
import Header from "./components/Header";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignout = () => {
    firebase.auth().signOut();
  };

  const [isSignedIn, setisSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => handleClose(),
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignedIn(!!user);
      console.log("user", user);
    });
  });

  return (
    <div className="App">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </Modal>

      <Header
        handleOpen={handleOpen}
        isSignedIn={isSignedIn}
        handleSignout={handleSignout}
      />
      <ListingsScreen isSignedIn={isSignedIn} />
      {/* {isSignedIn ? (
        <span>
          <div>Signed In!</div>
          <button onClick={handleSignout}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img alt="profile" src={firebase.auth().currentUser.photoURL} />
        </span>
      ) : (
        <div className="App__login">
          <h1>Welcome</h1>
        </div>
      )} */}
    </div>
  );
}

export default App;
