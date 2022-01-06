import { useContext, useEffect, useState } from "react";

import { Context } from "../Context";

// Styles
import "./UserCard.css";

export default function UserCard({ loading }) {
  const [user, setUser] = useContext(Context);

  return (
    <div className="user-name">
      {loading || !user ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body">
          <div className="card-contents">
            <img
              src={user.picture.large}
              className="card-picture"
              alt="A picture of a person."
            />
            <div className="card-text">
              <p>
                Name: {user.name.first} {user.name.last}
              </p>

              <p>Email: {user.email}</p>
              <p>Phone: {user.cell}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
