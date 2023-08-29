import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import '../Fade CSS/Fade.css'

export const Card = ({ src, name, description }) => {

    const [ref, inView] = useInView({
        triggerOnce: true, // The fade-in animation will be triggered only once when the component enters the viewport
        threshold: 0.1, // Percentage of component visibility required to trigger the animation
      });


  return (
  //  ref={ref} className={`card fade-in ${inView ? 'visible' : ''}`} style={style}
// ref={ref} className={`card fade-in ${inView ? 'visible' : ''}`} style={style}
<div
  ref={ref}
  className={`fade-in ${inView ? 'visible' : ''} w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto relative `}
  
>
  <div className="flex justify-end px-4 pt-4">
    <button
      id="dropdownButton"
      data-dropdown-toggle="dropdown"
      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
      type="button"
    ></button>

    <div
      id="dropdown"
      className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul className="py-2" aria-labelledby="dropdownButton">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Bearbeiten
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Daten exportieren
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Löschen
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="flex flex-col items-center pb-10">
    <img
      className="w-24 h-24 mb-3 rounded-full shadow-lg"
      src={src}
      alt="Bild"
    />
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {name}
    </h5>
    <span className="text-sm text-gray-500 dark:text-gray-400">
      {description}
    </span>
    <div className="flex mt-4 space-x-3 md:mt-6">
      <Link
        to="/chatbot"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Mit dem Chatten beginnen
      </Link>
    </div>
  </div>
</div>

  )
}


