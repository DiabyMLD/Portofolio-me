import React from "react";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div className="aboutPage-container">
      <h1 className="aboutPage-title"> Voici mon parcours</h1>
      <div className="aboutPage-img">
      <img src="/PdpDiabs.jpg" alt="Profile" />
      </div>
      
      <div className="aboutPage-first">
        Bonjour, Je m'appelle Lamine Mohamed Diaby. Passionné par le sport, l'art et
        l'informatique, je suis actuellement à la recherche d'un contrat
        d'apprentissage en tant que développeur web junior pour mon projet de
        reconversion professionnelle. Au cours de ma formation, j'ai étudié des
        langages comme HTML, CSS, Javascript ou PHP. J'ai aussi
        étudié des frameworks comme React et Symfony et j'ai participé à la
        réalisation de plusieurs projets en utilisant ces langages. À l'âge de
        23 ans, je suis un individu jeune, curieux et déterminé, cherchant à
        acquérir une précieuse expérience dans ce poste tout en collaborant avec
        des professionnels passionnés. Je vous remercie pour l'attention portée
        à ma candidature. J'espère avoir des nouvelles de votre part dans les
        prochains jours à venir.
      </div>

    </div>
  );
};
