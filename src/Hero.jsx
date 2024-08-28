import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const previews = [
  // {
  //   img: './assets/ode.png',
  //   code: '01',
  //   site: 'https://www.odetoronto.ca/',
  //   title: 'Ode Toronto',
  //   date: '2019',
  //   industry: 'Hospitality',
  //   description: 'Website Development',
  // },
  // {
  //   img: './assets/clearpath.png',
  //   code: '02',
  //   title: 'ClearPath',
  //   site: 'https://www.clearpathadhd.com/',
  //   date: '2024',
  //   industry: 'Wellness',
  //   description: 'Design and Development',
  // },
  // {
  //   img: './assets/carols.png',
  //   code: '04',
  //   title: 'CFR',
  //   site: 'https://www.carolsfurnishedrentals.com/',
  //   date: '2024',
  //   industry: 'Design',
  //   description: 'Design and Development',
  // },
  // {
  //   img: './assets/Thirdplace.png',
  //   code: '05',
  //   title: 'The Third Place',
  //   site: '/',
  //   date: '2024',
  //   industry: 'Travel',
  //   description: 'COMING SOON',
  // },
  // {
  //   img: './assets/TorontoResto.png',
  //   code: '06',
  //   title: 'Toronto Restaurants',
  //   site: 'https://www.shoprhw.com/',
  //   date: '2024',
  //   industry: 'Food',
  //   description: 'COMING SOON',
  // },
];

const CountUpLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 5), 90); 
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 500);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: count === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    //   exit={{ opacity: 0 }}
      className="loader"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        // exit={{ opacity: 0 }}
        className="loader-text"
      >
        {count}%
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleComplete = () => {
    setLoading(false);
  };

  const handleItemClick = (index) => {
    setSelectedItem(previews[index]);
  };

  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <CountUpLoader onComplete={handleComplete} className="test" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              {/* <img
                src="./assets/R1-04473-0035.JPG"
                alt="Background"
                className="background-img"
              />
              <div className="blur-overlay"></div> */}
              <div className="main-content"> 
                <div className="nav">
                  <div>
                    <h1>Brittney Ramsubick</h1>
                  </div>
                  <div>
                    <h2>Software Developer</h2>
                  </div>
                  <div className="contact">
                    <ul>
                      <li>
                        <a href="/Brittney_Ramsubick_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer">Resume</a>
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
                      {/* <li>
                        <a
                          href="https://www.instagram.com/brittneynikkita/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <div className="catalog-container">
                  <div className="items">
                    {previews.map((preview, index) => (
                      <div
                        key={index}
                        className="item"
                        onClick={() => handleItemClick(index)}
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
                </div> */}
              </div>
                {selectedItem && (
                             <motion.div
                             className="preview-container"
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 0.5 }}
                           >
                  <div className="preview selected-item">
                    <div className="selected-item-img">
                      <img src={selectedItem.img} alt={selectedItem.title} />
                    </div>
                    <div className="selected-item-details">
                      <h2 className='preview-title'>{selectedItem.title}</h2>
                      {/* <p className='preview-description'>{selectedItem.description}</p> */}
                      <a href={selectedItem.site} target="_blank" rel="noopener noreferrer" className='preview-site'>Site</a>
                    </div>
                  </div>
                  </motion.div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
