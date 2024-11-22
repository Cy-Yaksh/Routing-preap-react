import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>

      <h1>Contact Page</h1>
      <div >
        {
          users.map((user) => {
            return (
              <NavLink to={`/contact/${user}`}>User : {user} <br /> </NavLink>
            )
          })
        }
      </div>
    </>)
};

export default Contact;
