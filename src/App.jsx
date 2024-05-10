import { useState } from 'react'
import { animate } from "motion"
import './App.css'

import React from 'react';

const App = () => {
  const items = [
    { title: 'brittney ramsubick', description: 'Frontend Developer' },
    { title: 'technologies', list: [
        { label: 'React' },
        { label: 'Vue' },
        { label: 'Three.js' },
        { label: 'Shopify' },
        { label: 'Contentful' },
        { label: 'Blender' }
      ]
    },
    { title: 'projects', list: [
      { label: 'ClearPath', url: 'https://www.clearpathadhd.com/' },
      { label: 'Ode Toronto', url: 'https://www.odetoronto.ca/' },
      { label: 'RHW', url: 'https://www.shoprhw.com/' },
      // { label: 'Mood 2 Munch', url: 'https://www.clearpathadhd.com/' },
      // { label: 'Skin Savant', url: '' },
      // { label: 'Really Good Films', url: '' },
      ]
    },
    { title: 'contact', list: [
        { label: 'Email', url: 'mailto:bramsubic@gmail.com' },
        { label: 'Instagram', url: '#' },
        { label: 'Linkedin', url: '#' },
        // { label: 'TikTok', url: '#' },
        // { label: 'Youtube', url: '#' },
        { label: 'Discord', url: '#' },
        { label: 'X', url: '#' }
      ]
    },
    { title: 'interests', list: [
      ]
    }
  ];

  return (
    <div className='px-4 py-4 main-container'>

      {items.map((item, index) => (
        <div className='row-container'>
            <div className="" key={index}>
            <div className="title pb-3 text-uppercase">{item.title}</div>
            <div className="">
              {item.list ? (
                <ul className="p-0">
                  {item.list.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} target="blank">{link.label}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>{item.description}</span>
              )}
            </div>
          </div>
        </div>

      
      ))}
      </div>
    
  );
}

export default App;