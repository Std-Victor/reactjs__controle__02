import React from "react";
import style from "./home.style.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <p>Bonjour!</p>
        <p>Madame.</p>
      </div>
      <div className={style.question}>
        <details>
          <summary>Q3</summary>
          <p>
            Un composant qui affiche tous les continents sous forme des cartes
            contenant l’image, le nom, la superficie et la population d’un
            continent.
          </p>
        </details>
        <details>
          <summary>Q4</summary>
          <p>
            Un composant qui affiche les années de l’indépendance sous forme des
            liens hypertextes.au clic sur un lien, on affiche dans un autre
            composant les pays qui ont obtenu l’indépendance dans l’année
            cliquée.
          </p>
        </details>
        <details>
          <summary>Q5</summary>
          <p>
            Un composant permet d’ajouter un pays ou de modifier sa population.{" "}
          </p>
        </details>
        <details>
          <summary>Q6</summary>
          <p>
            un composant qui permet de filtrer les pays par population ou par
            continent.
          </p>
        </details>
        <details>
          <summary>FakeApi</summary>
          <p>
            Soit "https://FAKEAPI.com/continents"» l’URL de l’API qui
            retourne la liste des continents, ajouter dans votre store une
            fonction asynchrone qui rempli le tableau continent de votre state
            par les continents fournis par l’API
          </p>
        </details>
      </div>
    </div>
  );
};

export default Home;
