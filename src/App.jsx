import React, { useEffect } from "react";
import { animate } from "motion";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const items = [
    { title: "brittney ramsubick", description: "Frontend Developer" },
    {
      title: "technologies",
      list: [
        { label: "React" },
        { label: "Vue" },
        { label: "Three.js" },
        { label: "Shopify | Liquid" },
        { label: "Contentful" },
        { label: "Blender" },
      ],
    },
    {
      title: "projects",
      list: [
        { label: "ClearPath", url: "https://www.clearpathadhd.com/" },
        { label: "Ode Toronto", url: "https://www.odetoronto.ca/" },
        { label: "RHW", url: "https://www.shoprhw.com/" },
      ],
    },
    {
      title: "contact",
      list: [
        { label: "Email", url: "mailto:bramsubic@gmail.com" },
        // { label: 'Instagram', url: '#' },
        {
          label: "Linkedin",
          url: "https://www.linkedin.com/in/brittneyramsubick/",
        },
        // { label: 'Discord', url: '#' },
        // { label: 'X', url: '#' }
      ],
    },
    {
      title: "",
      list: [
        { url: "R1-05488-0002.JPG" },
      ],
    },
  ];

  const sliderSettings = {
    dots: false, // Enable or disable navigation dots
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  useEffect(() => {
    animate(
      ".row-container",
      { y: [0, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.8 }
    );
  }, []);

  return (
    <div className="px-4 py-4 main-container theinhardt">
      {items.map((item, index) => (
        <div className="row-container" key={index}>
          <div className="title pb-3 text-uppercase">{item.title}</div>
          <div className="">
            {item.list ? (
              item.title === "" ? (
                <Slider {...sliderSettings}>
                  {item.list.map((image, idx) => (
                    <div key={idx} style={{ width: "240px", height: "140px" }}>
                      <img
                        src={image.url}
                        alt={`Image ${idx}`}
                        style={{ width: "240px", height: "140px" }}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <ul className="p-0">
                  {item.list.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <span>{item.description}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
