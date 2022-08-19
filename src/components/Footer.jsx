import React from "react";

const Footer = () => {
  return (
    <footer className="footerApp">
      <div className="footer-contacts">
        <span>
          <i className="fab fa-github"></i>
          <a target='blanck' href="https://github.com/Daniel4100/ApiRickAndMorty.git">Repositorio en GitHub</a>
        </span>
        <span>
          <i className="fab fa-linkedin"></i>
          <a target='blanck' href="https://www.linkedin.com/in/jhener-daniel-calvache-34ba3a233/">Linkedin</a>
        </span>
        <span>
          <i class="fas fa-envelope"></i>
          <a target='blanck' href="mailto:ceballos990410@gmail.com">Email</a>
        </span>
      </div>
      <div className="footer-details">
        <p>
            este proyecto lo realize durante mi formación como dev web full stack en academlo, apliqué mis conocimientos en las siguientes tecnologias: HTML5, CSS, react js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
