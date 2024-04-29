import React from "react";
import IMG1 from "../../assets/url.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/shelter.png";
import IMG4 from "../../assets/fitfood.png";
import IMG5 from "../../assets/news.png";
import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "URL shortener",
      img: IMG1,
      description:
        "A URL shortener is a tool that condenses long web addresses into shorter, more manageable links. It simplifies sharing URLs, especially on platforms with character count limitations like social media, by providing a concise alternative that redirects users to the original webpage.",
      technologies: "ReactJs | NodeJs",
      link: "https://url-shortener-vignesh.netlify.app/",
      github: "https://github.com/Vignesh100799/url-shortener-front-end",
    },
    {
      id: 2,
      title: "Fit Food",
      img: IMG4,
      description:
      "Fit Food is a multifunctional app designed to support users in their journey towards a healthier lifestyle. Beyond its primary function as a diet suggestion platform, it provides personalized meal plans, nutritional guidance, and tracking tools to help users achieve their fitness goals. Whether users aim to lose weight, build muscle, or simply adopt a healthier diet.",
      technologies: "ReactJs | NodeJs",
      link: "https://fit-food-diet.netlify.app/",
      github: "https://github.com/Meri-MG/Fakestore---react",
    },
    {
      id: 3,
      title: "To-Do App",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Meri-MG/To-Do-List",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/shelter/pages/main/index.html",
      github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/Unilab-world-news/",
      github: "https://github.com/Meri-MG/Unilab-world-news",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      github: "https://github.com/lukinoo/math-resource",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
