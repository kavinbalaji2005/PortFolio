const Footer = () => {
  return (
    <div className="footer">
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Kavin Balaji. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;