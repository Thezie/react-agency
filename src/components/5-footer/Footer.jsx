import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="flex">
      <div className="social flex">
        <button className="icon-twitter" />
        <button className="icon-instagram" />
        <button className="icon-linkedin" />
        <button className="icon-github" />
      </div>
      <div className="copyright">@2023. All Right Reserved</div>
    </footer>
  );
}

export default Footer;
