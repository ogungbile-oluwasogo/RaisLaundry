import React from "react";
import style from "./MyContactInfo.module.css";

const MyContactInfo = ({ token }) => {
  return (
    <div className={style["contact-info"]}>
      <h1>My Contact Details</h1>
      <p className={style.note}>
        Note: We'll contact you using the information below whenever we have
        information about your order, or anytime we have notification about our
        new services
      </p>

      <section>
        <p>
          <span>Name: </span> <span>{token.user.user_metadata.name}</span>
        </p>
        <p>
          <span>Phone: </span> <span>{token.user.user_metadata.phone}</span>
        </p>
        <p>
          <span>Email: </span> <span>{token.user.email}</span>
        </p>
        <p>
          <span>Address: </span> <span>{token.user.user_metadata.address}</span>
        </p>
      </section>
    </div>
  );
};

export default MyContactInfo;
