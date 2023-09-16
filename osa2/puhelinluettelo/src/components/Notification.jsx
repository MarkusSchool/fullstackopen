import React from "react";

const neg = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const pos = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    if (message.includes("removed"))
      return (
        <div style={neg} className='error'>
          {message}
        </div>
      )
      else {
        return (
            <div style={pos} className='error'>
              {message}
            </div>
          )
      }
    }

export default Notification