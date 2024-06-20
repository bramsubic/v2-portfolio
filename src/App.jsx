import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";

const mapClasses = [
  "variant-1",
  "variant-1",
  "variant-1",
  "variant-1",
  "variant-1",
  "variant-1",
];

const previews = [
  {
    img: "./assets/ode.png",
    code: "01",
    site: "https://www.odetoronto.ca/",
    title: "Ode Toronto",
    date: "2024",
    industry: "Hospitality",
    description:
      "Website development in collaboration with Design of Brand.",
  },
  {
    img: "./assets/clearpath.png",
    code: "02",
    title: "ClearPath",
    site: "https://www.clearpathadhd.com/",
    date: "2024",
    industry: "Wellness",
    description:
      "Design and Development",
  },
  {
    img: "./assets/rhw.png",
    code: "03",
    title: "Shop RHW",
    site: "https://www.shoprhw.com/",
    date: "2024",
    industry: "Design",
    description:
      "Design and Development",
  },
  {
    img: "./assets/carols.png",
    code: "04",
    title: "CFR",
    site: "https://www.carolsfurnishedrentals.com/",
    date: "2024",
    industry: "Design",
    description:
      "Design and Development",
  },
  {
    img: "./assets/Thirdplace.png",
    code: "05",
    title: "The Third Place",
    site: "/",
    date: "2024",
    industry: "Travel",
    description:
      "COMING SOON",
  },
  {
    img: "./assets/TorontoResto.png",
    code: "06",
    title: "Toronto Restaurants",
    site: "https://www.shoprhw.com/",
    date: "2024",
    industry: "Food",
    description:
      "COMING SOON",
  },
];

const defaultClipPaths = {
  "variant-1": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
};

const variantTransforms = {
  "variant-1": {
    title: { opacity: 0 },
    date: { opacity: 0 },
    description: { opacity: 0 },
    site: { opacity: 0 },
  },
};

const App = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(true);
  const containerRef = useRef(null);
  const previewRefs = useRef([]);

  useEffect(() => {
    previews.forEach((preview, index) => {
      applyVariantStyles(previewRefs.current[index]);
    });
  }, []);

  const applyVariantStyles = (previewElement) => {
    const variant = previewElement.className
      .split(" ")
      .find((className) => className.startsWith("variant-"));
    if (variant && variantTransforms[variant]) {
      Object.entries(variantTransforms[variant]).forEach(
        ([elementClass, transform]) => {
          const element = previewElement.querySelector(
            `.preview-${elementClass}`
          );
          if (element) {
            gsap.set(element, transform);
          }
        }
      );
    }
  };

  const handleMouseEnter = (index) => {
    if (!previewVisible) return;

    const newActivePreview = previewRefs.current[index];
    if (activePreview && activePreview !== newActivePreview) {
      const previousActivePreviewImg =
        activePreview.querySelector(".preview-img");
      const previousDefaultClipPath = getDefaultClipPath(activePreview);
      gsap.to(previousActivePreviewImg, {
        clipPath: previousDefaultClipPath,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.to(activePreview, {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
      });
      applyVariantStyles(activePreview);
    }

    gsap.to(newActivePreview, { opacity: 1, duration: 0.1 });
    setActivePreview(newActivePreview);

    const elementsToAnimate = ["title", "description", "site"];
    elementsToAnimate.forEach((el) => {
      const element = newActivePreview.querySelector(`.preview-${el}`);
      if (element) {
        gsap.to(element, { opacity: 1, duration: 0.5 });
      }
    });

    const activePreviewImg = newActivePreview.querySelector(".preview-img");
    gsap.to(activePreviewImg, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power3.out",
    });
  };

  const getDefaultClipPath = (previewElement) => {
    for (const variant in defaultClipPaths) {
      if (previewElement.classList.contains(variant)) {
        return defaultClipPaths[variant];
      }
    }
    return "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";
  };

  // const handleClosePreview = () => {
  //   setPreviewVisible(false);
  //   if (activePreview) {
  //     gsap.to(activePreview, { opacity: 0, duration: 0.5 });
  //   }
  // };

  const handleMouseLeave = () => {
    setPreviewVisible(true);
  };

  return (
    <div className="container" ref={containerRef}>
      <img
        src="./assets/R1-04473-0035.JPG"
        alt="Background"
        className="background-img"
      />
      <div className="blur-overlay"></div>
      <div className="main-content">
  <div className="nav">
    <div>
      <h1 className="">Brittney Ramsubick</h1>
    </div>
    <div>
      <h2>Frontend Developer</h2>
    </div>
    <div className="contact">
      <ul>
        <li>
          <a href="mailto:bramsubic@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://github.com/bramsubic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brittneyramsubick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        {/* <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li> */}
      </ul>
    </div>
  </div>
  <div className="catalog-container">
    <div className="items">
      {previews.map((preview, index) => (
        <div
          key={index}
          className="item"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category code">
            <p>{preview.code}</p>
          </div>
          <div className="category title">
            <p>{preview.title}</p>
          </div>
          <div className="category industry">
            <p>{preview.industry}</p>
          </div>
          <div className="category date">
            <p>{preview.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {previews.map((preview, index) => (
        <div
          key={index}
          className={`preview ${mapClasses[index]} preview-${index + 1}`}
          ref={(el) => (previewRefs.current[index] = el)}
          style={{ display: previewVisible ? "block" : "none" }}
        >
          {/* <button className="close-btn" onClick={handleClosePreview}>
            x
          </button> */}

          <div className="preview-img">
            <img src={preview.img} alt={preview.title} />
          </div>
          <div className="preview-title">
            <h1>{preview.title}</h1>
          </div>
          <div className="preview-description">
            <p>{preview.description}</p>
          </div>
          <div className="preview-site">
            <a href={preview.site} target="_blank" rel="noopener noreferrer">Site</a>
          </div>
          </div>
      ))}
    </div>
  );
};

export default App;
