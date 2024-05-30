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
      "Innovative fashion-forward web design with a core focus on simplicity and elegance.",
  },
  {
    img: "./assets/clearpath.png",
    code: "02",
    title: "ClearPath",
    site: "https://www.clearpathadhd.com/",
    date: "2024",
    industry: "Wellness",
    description:
      "Exploring the intersection of minimalism and future fashion trends in web design.",
  },
  {
    img: "./assets/main-4.jpg",
    code: "03",
    title: "The Third Place",
    date: "2024",
    industry: "Travel",
    description:
      "Digital-first fashion branding that merges cutting-edge UI/UX principles with style.",
  },
  {
    img: "./assets/main-5.jpg",
    code: "04",
    title: "Toronto Restauarnts",
    date: "2024",
    industry: "Food",
    description:
      "Tech-infused fashion experiences showcased through interactive web design elements.",
  },
  {
    img: "./assets/main-6.jpg",
    code: "05",
    title: "Hotel Blog",
    date: "2024",
    industry: "Hospitality",
    description:
      "Futuristic wearables and gear presented in a sleek, graphically rich web interface.",
  },
  {
    img: "./assets/main-7.jpg",
    code: "06",
    title: "Photo Gallergy",
    date: "2024",
    industry: "Art",
    description:
      "Web presentation of innovative textiles that redefine the boundaries of modern fashion.",
  },
  {
    img: "./assets/main-8.jpg",
    code: "07",
    title: "MindSpace",
    date: "2024",
    industry: "Wellness",
    description:
      "Augmented reality in fashion design, creating immersive web experiences for users.",
  },
  {
    img: "./assets/main-9.jpg",
    code: "08",
    title: "CFR",
    date: "2024",
    industry: "Design",
    description:
      "Virtual fashion collections displayed through stunning graphic design and web aesthetics.",
  },
  {
    img: "./assets/rhw.png",
    code: "09",
    title: "Shop RHW",
    date: "2024",
    industry: "Design",
    description:
      "Sustainable fashion meets modern web aesthetics, highlighting eco-friendly apparel innovations.",
  },
];

const defaultClipPaths = {
  "variant-1": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  "variant-2": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  "variant-3": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
};

const variantTransforms = {
  "variant-1": {
    title: { opacity: 0 },
    date: { opacity: 0 },
    description: { opacity: 0 },
  },
  "variant-2": {
    title: { x: -75, opacity: 0 },
    description: { y: 75, opacity: 0 },
  },
  "variant-3": {
    title: { x: 75, opacity: 0 },
    description: { x: 75, opacity: 0 },
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

    const elementsToAnimate = ["title", "description"];
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

  const handleClosePreview = () => {
    setPreviewVisible(false);
    if (activePreview) {
      gsap.to(activePreview, { opacity: 0, duration: 0.5 });
    }
  };

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
          <button className="close-btn" onClick={handleClosePreview}>
            X
          </button>
          <div className="preview-img">
            <img src={preview.img} alt={preview.title} />
          </div>
          <div className="preview-title">
            <h1>{preview.title}</h1>
          </div>
          <div className="preview-description">
            <p>{preview.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
