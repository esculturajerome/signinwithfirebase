import React, { useState, useEffect } from "react";

import { db } from "../config/firebase";
import Card from "../components/Card";

const ListingsScreen = ({ isSignedIn }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    db.collection("listings").onSnapshot((snapshot) => {
      setListings(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          listing: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <React.Fragment>
      <h2>Listings Screen</h2>
      <div className="card__container">
        {listings.map(({ id, listing }) => (
          <Card
            key={id}
            name={listing.name}
            caption={listing.caption}
            imageUrl={listing.imageUrl}
            isSignedIn={isSignedIn}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListingsScreen;
