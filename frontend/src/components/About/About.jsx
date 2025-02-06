import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import du plugin
import "./About.css";

const portrait = "/images/about/Cassandre.jpg";

export default function About() {
  const words = [
    "rénovation 🛠️",
    "construction 🔨",
    "maison individuelle🏠",
    "appartement 🏢",
    "permis de constuire 📜",
    "maitrise d'oeuvre 👷‍♀️",
    "maison à la mer 🌊",
    "commerce 🏪",
  ];

  const titleRef = useRef(null); // Animation titre
  const pictureRef = useRef(null); // Animation image
  const textRef = useRef(null); // Animation texte

  const [index, setIndex] = useState(0); // Index du mot courant
  const wordRef = useRef(null); // Index du mot courant
  const cvRef = useRef(null); // Animation date

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current, // Déclencheur global
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Animation du titre
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animation de l'image qui arrive de la gauche
    tl.fromTo(
      pictureRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1" // Démarre légèrement avant la fin de l'animation du titre
    );
  }, []);

  // Aninmation texte central
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50, // Position initiale en bas
      },
      {
        opacity: 1,
        y: 0, // Arrivée normale
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // L'animation démarre quand 90% de la div est visible
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  //Animation parapraphe changeant
  useEffect(() => {
    const interval = setInterval(() => {
      // Animation de sortie du mot
      gsap.to(wordRef.current, {
        opacity: 0,
        y: -20, // Décale légèrement vers le haut
        duration: 0.5,
        onComplete: () => {
          // Met à jour le mot
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          // Animation d'entrée du nouveau mot
          gsap.fromTo(
            wordRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }, 3000); // Change de mot toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  // Prération opérateur ternaire pour changement d'article.
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const article = vowels.includes(words[index][0].toLowerCase())
    ? "d' "
    : "de ";

  // Animation dates
  useEffect(() => {
    const dates = gsap.utils.toArray(".about-date").reverse(); // Récupère les éléments dans l'ordre inverse

    gsap.fromTo(
      dates,
      { x: 100, opacity: 0 }, // Départ (hors écran à droite, invisible)
      {
        x: 0, // Position normale
        opacity: 1,
        duration: 3, // Durée de chaque apparition
        ease: "power3.out",
        stagger: 0.2, // Délai progressif entre chaque élément
        scrollTrigger: {
          trigger: cvRef.current, // Déclencheur = Conteneur CV
          start: "top 90%", // Déclenchement quand la section entre dans l’écran
          toggleActions: "play none none none", // Joue une seule fois
        },
      }
    );
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="secTitle">
        <h1 ref={titleRef} className="title">
          A PROPOS
        </h1>
      </div>
      <div className="about-infos-container">
        <div className="about-grid-column">
          <div ref={pictureRef} className="about-picture">
            <img src={portrait} alt="" />
          </div>
        </div>

        <div className="about-grid-column">
          <div ref={textRef} className="about-presentation-text">
            <div className="about-presentation-text-high">
              <p>
                Cassandre Marion Architecte est une agence d’architecture indépendante, créee
                en 2024 et basée à Rennes.
              </p>
              <p>
                J’ai réalisé mes études à l’univerité de Rome III et à l’Ecole
                Nationale d’Architecture de Normandie. J’ai appris à analyser et
                sublimer des lieux existants au travers de la question de
                l’héritage patrimoniale, grâce à des masters spécialisés dans ce
                domaine.
              </p>
              <p>
                Au cours de mes 6 ans en agences parisiennes, j’ai travaillé sur
                des programmes variés tant en réhabilitation qu’en conception
                neuve. J’ai ainsi collaboré sur des rénovations de maisons, des
                rénovations énergétique d’ensemble de logements, des bâtiments
                tertiaires, des équipement publics.
              </p>
              <p>
                Fort des ces expériences, je suis en mesure de vous accompagner
                sur tous types de projet, de la conception à la réalisation. En
                misant sur une écoute attentive et un échange constructif, je
                vous accompagne dans la réalisation d’un projet sur mesure et
                qui reflète pleinement votre quotidien et vos envies.
              </p>
            </div>
            <div className="presentation-text-low">
              <p>
                <span className="about-text-anim">
                  N'hésitez pas à me contacter pour discuter ensemble de{" "}
                </span>
                <span className="line2">
                  votre projet {article}{" "}
                  <span ref={wordRef} className="about-text-anim">
                    {words[index]}
                  </span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div ref={cvRef} className="about-grid-column">
          <div className="about-CV">
            <div className="about-date">
              <span className="about-year">2024.</span>
              <span className="description">
                Création de mon agence 👏 (Rennes)
              </span>
            </div>
            <div className="about-date">
              <span className="about-year">2021.</span>
              <span className="description">
                Chatillon Architecture (Paris)
              </span>
            </div>
            <div className="about-date">
              <span className="about-year">2018.</span>
              <span className="description">
                Dubuisson Architecture (Paris)
              </span>
            </div>
            <div className="about-date">
              <span className="about-year">2017.</span>
              <span className="description">Architecte HMONP</span>
            </div>
            <div className="about-date">
              <span className="about-year">2016.</span>
              <span className="description">
                Diplôme d'Architecte - ENSAN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
