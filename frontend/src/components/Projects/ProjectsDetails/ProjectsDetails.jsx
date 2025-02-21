import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import Modal from "./Modal/Modal";
import { projectsData } from "./Data/ProjectData";
import { Link } from "react-router-dom";

import "./ProjectsDetails.css";

export default function ProjectsDetails() {
  const titleRef = useRef(null); // Animation titre
  const techRef = useRef(null); // Animation domaines

    // Récupération données projet courant
    const { slug } = useParams();
    const projet = projectsData.find((proj) => proj.slug === slug);
    const { layout } = projet;

  useEffect(() => {
    if (!titleRef.current) {
      console.error("titleRef.current is null. The reference is not attached.");
      return;
    }

    // Réinitialise GSAP avant de rejouer l'animation
    gsap.killTweensOf(titleRef.current);

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [slug]); // 🔥 Rejoue l'animation chaque fois que `slug` change


  useEffect(() => {
    const techItems = gsap.utils.toArray(".projectDetails-tech-list li");

    gsap.killTweensOf(techItems); // Réinitialise avant de rejouer

    gsap.fromTo(
      techItems,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projectDetails-1-tech",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [slug]); // 🔥 Rejoue à chaque changement de `slug`



  // Récupération données flèches navigation
  const currentIndex = projectsData.findIndex((proj) => proj.slug === slug);

  if (currentIndex === -1) {
    return <h2>Projet introuvable</h2>;
  }

  const projectCount = projectsData.length;
  console.log(projectCount);
  const prevIndex = (currentIndex - 1 + projectCount) % projectCount;
  const nextIndex = (currentIndex + 1) % projectCount;

  const prevProject = projectsData[prevIndex];
  const nextProject = projectsData[nextIndex];

  useEffect(() => {
    gsap.to(window, {
      scrollTo: 100,
      duration: 1, // Durée en secondes
      ease: "power3.out",
    });
  }, [slug]);

  // États pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Index de l'image courante

  const openModal = (index) => {
    if (typeof index !== "number" || isNaN(index)) {
      return;
    }
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.dispatchEvent(
      new CustomEvent("modalStateChange", { detail: true })
    );
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
    setIsModalOpen(false);
    document.dispatchEvent(
      new CustomEvent("modalStateChange", { detail: false })
    );
  };

  if (!projet) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <>
      <div className="projectDetails-framer">
        <div id="projectDetails" className="projectDetails-container">
          <div
            className="projectDetails-nav-arrows-div"
            data-hover-detect="true"
          >
            {/* Projet précédent */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="projectDetails-nav-arrows"
            >
              <i className="fa-solid fa-chevron-left"></i>
              <h2 className="sub-2">{prevProject.title}</h2>
            </Link>

            {/* Projet suivant */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="projectDetails-nav-arrows"
            >
              <h2 className="sub-2">{nextProject.title}</h2>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <div className="projectDetails-1">
            <div className="projectDetails-1-imageDiv">
              <img src={projet.imgSrc} alt={projet.title} />
            </div>
            <div className="projectDetails-1-infos">
              <div className="projecDetails-1-title">
                <h2 className="sub-2" ref={titleRef}>
                  {projet.title}
                </h2>
                <p>{projet.location}</p>
              </div>
              <div className="projectDetails-1-text">
                <div className="projectDetails-1-description">
                  <p>{projet.description1}</p>
                  <p>{projet.description2}</p>
                </div>
                <div className="projectDetails-1-tech">
                  <ul ref={techRef} className="projectDetails-tech-list">
                    <div className="projectDetails-tech-list-left">
                      <li>
                        <i className="fas fa-tools"></i> <strong>Type :</strong>{" "}
                        {projet.type}
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        <strong>Localisation :</strong> {projet.loc}
                      </li>
                      <li>
                        <i className="fas fa-ruler-combined"></i>{" "}
                        <strong>Superficie :</strong> {projet.sup}
                      </li>
                    </div>
                    <div className="projectDetails-tech-list-right">
                      <li>
                        <i className="fas fa-user-tie"></i>{" "}
                        <strong>Maîtrise d’ouvrage :</strong> {projet.mo}
                      </li>
                      <li>
                        <i className="fas fa-lightbulb"></i>{" "}
                        <strong>Intervention :</strong> {projet.inter}
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>{" "}
                        <strong>Avancement :</strong> {projet.avance}
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="projectDetails-2"
            style={{
              display: "grid",
              gridTemplateColumns: layout.gridTemplateColumns,
              gridTemplateRows: layout.gridTemplateRows,
              gap: layout.gap,
            }}
          >
            {layout.images.map((image, index) => (
              <div
                key={index}
                className="ProjectDetail-2-col"
                style={{
                  gridColumn: image.gridColumn,
                  gridRow: image.gridRow,
                }}
                onClick={() => openModal(index)} // Ouvre la modale avec l'image cliquée
              >
                <div
                  className="ProjectDetail-2-col-imgDiv"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Composant Modale */}
            <Modal
              isOpen={isModalOpen}
              images={layout.images} // Passe toutes les images
              currentImageIndex={currentImageIndex} // Passe l'index courant
              onClose={closeModal} // Callback pour fermer
              onNavigate={(newIndex) => setCurrentImageIndex(newIndex)} // Callback pour naviguer
            />
          </div>
        </div>
      </div>
    </>
  );
}
