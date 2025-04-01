# Architect Website

In **2025**, this has become my most advanced project—primarily because of the significant frontend integration work. The **backend** remains relatively simple but effectively showcases the work of French architect **Cassandre Marion**.

## ✨ Project Goal

The goal was to build a **simple**, **elegant**, **intuitive**, and **responsive** website to present Cassandre Marion’s architectural work, emphasizing **images** and **visuals** due to the nature of her projects.

---

## 💻 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

> **Note**: Planning to add **Docker** and **Jest** for containerization and testing.

---

## 🌐 Overview

### Frontend

- **SPA-Oriented**: Mostly a single-page application, but includes **two additional pages** for zooming into specific projects.
- **GSAP Animations**: Smooth and elegant transitions (slider, scrolling header, animated reveals).
- **SCSS Styling**: For a clean, modern look with easy-to-maintain styles.
- **Navigation**:
  - **Main Page**:
    - **Disappearing header** on scroll.
    - **Slider** for automatic image scrolling.
    - **News section**: Latest projects with a short description on hover.
    - **Mission**: Description of work & methodology; most text is hidden until a user clicks, keeping the page “light.”
    - **About**: A visually appealing presentation of the professional path with GSAP animations.
    - **Footer**: Reveals on scroll, includes main contact info and social media links/animations.
  - **Projects Page**:
    - Displays around a dozen projects in a grid/thumbnail layout, each clickable for more details.
  - **Individual Project Page**:
    - A React component using a **slug** to fetch data from the database without reloading the entire page.

### Performance

- **Goal**: Achieve a Lighthouse score **> 90**.
- **Status**: Solid performance on desktop; improvements planned for mobile.

---

## 🔧 Backend

- **Node.js** + **Express**
- **MongoDB** for data persistence (storing project info, images, etc.).
- The backend is straightforward: it serves data to the frontend for rendering.
- **Docker & Jest** are planned for containerization and testing enhancements.

---

## 🚀 Next Steps

- **Docker**: Containerize the app for easier deployment and consistent environments.
- **Jest**: Implement unit and integration tests for better code reliability.
- **Mobile Optimization**: Refine performance and UI for smaller screens.

---

## 🎨 Highlights

- **Integration Focus**: Extensive use of GSAP + React components for smooth user experiences.
- **Responsive & Visual**: Large imagery and minimal text to showcase architectural projects effectively.
- **Modern MERN Stack**: Offers easy scalability and maintainability.

---

*Last updated: 2025*
