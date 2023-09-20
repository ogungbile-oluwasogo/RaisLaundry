import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>Copyright © 2023 Rais Laundry All rights reserved. |</p>
      <p>Follow Us:</p>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-x-twitter"></i>
      <a href="https://wa.me/08131058753">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Footer;
