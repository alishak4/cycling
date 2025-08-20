import React, { useEffect } from "react";
import scrollama from "scrollama"; // Import the scrollama library
import './test.css'; 

const HomePage = () => {
  useEffect(() => {
    const scroller = scrollama();

    const handleStepEnter = (response) => {
      console.log(response);
      response.element.classList.add("is-active");
    };

    const handleStepExit = (response) => {
      console.log(response);
      response.element.classList.remove("is-active");
    };

    const init = () => {
      const steps = document.querySelectorAll(".step");
      steps.forEach((step) => {
        const v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
        step.style.padding = `${v}px 0px`;
      });

      scroller
        .setup({
          step: "#scrolly article .step",
          debug: false,
          offset: 0.5,
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);
    };

    init();
  }, []);

  return (
    <div>

        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{
            fill: "#151513",
            color: "#fff",
            position: "absolute",
            top: 0,
            border: 0,
            right: 0,
          }}
          aria-hidden="true"
        >
          
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>

      <main>

        <section id="intro">
          <h1 className="intro__hed">Basic Example</h1>
          <p className="intro__dek">Start scrolling to see how it works.</p>
        </section>
        <section id="scrolly">
          <article>
            <div className="step" data-step="1">
            <img src="https://github.com/alishak4/cycling/assets/69810932/087b0d50-a15f-47e4-906d-d2f5213bc6de" alt="picture1" className="grid-item" data-step="a"/>
            </div>
            <div className="step" data-step="2">
              <p>STEP 2</p>
            </div>
            <div className="step" data-step="3">
              <p>STEP 3</p>
            </div>
            <div className="step" data-step="4">
              <p>STEP 4</p>
            </div>
          </article>
        </section>
        <section id="outro"></section>
      </main>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import './HomePage.css';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// // import mountains from '../images/mountains.jpg';
// // import img1 from '../images/img1.jpg';
// // import img2 from '../images/img2.jpg';
// // import img3 from '../images/img3.jpg';
// // import img5 from '../images/img5.jpg';
// // import img6 from '../images/img6.jpg';
// // import img4 from '../images/img4.jpg';
// import bike from '../images/bike.svg';
// import scrollama from "scrollama";

// const HomePage = () => {
//     const scroller = scrollama();

//     scroller.setup({
//       step: ".step",
//     })
//     .onStepEnter((response) => {
//       console.log("here")
//       const imageElement = document.querySelector;
//       imageElement.classList.add('fade-in');
//     })
//     .onStepExit((response) => {
//       const imageElement = document.querySelector(`#image-${response.index}`);
//       imageElement.classList.remove('fade-in');
//     });
//   return (
//     <div> 
//       <div class="step" data-step="a"> a </div>
// <div class="step" data-step="b"> b </div>
// <div class="step" data-step="c"> c </div>
//               <img
//           id="image-0"
//           src="https://github.com/alishak4/cycling/assets/69810932/087b0d50-a15f-47e4-906d-d2f5213bc6de"
//           alt="picture1"
//           data-step="b"
//         />
//     <div className="grid">

//     <img src="https://github.com/alishak4/cycling/assets/69810932/087b0d50-a15f-47e4-906d-d2f5213bc6de" alt="picture1" className="grid-item" data-step="a"/>
//     <img src="https://github.com/alishak4/cycling/assets/69810932/52f8eb6a-4cb1-4ef7-bca9-7ee8f18e130d" alt="picture2" className="grid-item"/>
//     <img src="https://github.com/alishak4/cycling/assets/69810932/e682811a-9b8c-405f-83a5-67b003f0ef10" alt="picture3" className="grid-item"/>
//     <img src="https://github.com/alishak4/cycling/assets/69810932/1720939f-cbe2-4656-b609-3ee960e7e6e7" alt="picture4" className="grid-item"/>

//     <div className="middle">
//     <div className="centered">
//     <h1> The Himalayan Odyssey </h1>
//     <img src={bike} alt="cycle" />
//     <div className="button-group">
//               <Link to="/map"> <button className="button"> Map </button>  </Link>
//               <Link to="/about"> <button className="button"> About </button>  </Link>
//               <Link to="/route"> <button className="button"> Route </button>  </Link>
//             </div>
//             <div className="button-group">
//               <Link to="/route"> <button className="button"> Team </button>  </Link>
//               <Link to="/media"> <button className="button"> Media </button>  </Link>
//             </div>
//           </div>
//         </div>
//     <img src="https://github.com/alishak4/cycling/assets/69810932/52d6c423-3765-4e2b-a0b3-f9cd23b37eff" alt="picture5" className="grid-item"/>
//     </div>
    
//     </div>
    
//   );
// }

// export default HomePage;
