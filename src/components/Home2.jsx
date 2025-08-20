import React, { useEffect, useRef } from "react";
import scrollama from "scrollama";
import "./Home2.css";
import image from "../images/homepage_img.jpeg";
import img2 from "../images/ics_047.jpg";
import image3 from "../images/img1.jpg";
import image4 from "../images/img2.jpg";
import image5 from "../images/img3.jpg";
import image6 from "../images/img6.jpg";
import image7 from "../images/img7.jpg";
import image8 from "../images/img5.jpg";
import Map from "./Map";
import RouteMap from "./MapProj";

const Home2 = () => {
    const routeMapRef = useRef();

    useEffect(() => {
        const scroller = scrollama();
        const container = document.querySelector("#scroll");
        const text = container.querySelector(".scroll__container");
        const steps = text.querySelectorAll(".step");

        function handleStepEnter(response) {
            response.element.classList.add("is-active");

            // trigger animation when "THE ROUTE" section comes into view
            if (response.element.classList.contains("route-step")) {
                routeMapRef.current?.startAnimation();
            }

            if (response.element.classList.contains("image-trigger")) {
                const container = document.querySelector(".scroll__container");
                if (container) {
                    container.classList.add("scale-up");
                }
            }
        }

        function handleStepExit(response) {
            response.element.classList.remove("is-active");
            if (response.element.classList.contains("image-trigger")) {
                const container = document.querySelector(".scroll__container");
                if (container) {
                    container.classList.remove("scale-up");
                }
            }
        }

        function init() {
            steps.forEach((step) => {
                step.style.padding = "50px 0px";
            });

            scroller
                .setup({
                    step: ".scroll__container .step, .route-step",
                    debug: false,
                    offset: 0.5,
                })
                .onStepEnter(handleStepEnter)
                .onStepExit(handleStepExit);

            window.addEventListener("resize", scroller.resize);
        }

        init();

        return () => {
            window.removeEventListener("resize", scroller.resize);
        };
    }, []);

    return (
        <div>
            <body>
                <img src={image} alt="img" className="image-container" />
                <h1 className="main"> THE HIMALAYAN ODYSSEY </h1>
                <h1 className="subtitle"> हिमालयन ओडिसी </h1>

                <div className="image-row">
                    <img src={image3} alt="text" />
                    <img src={image4} alt="text" />
                    <img src={image5} alt="text" />
                </div>

                <div className="intro-text">
                    <p>
                        On March 20th, 1986, we set out on a mission to know our Himalayas.
                        But our expedition was different. We conquered no peaks, except
                        those of Pain, Defeat and Fatigue.
                    </p>
                </div>

                <section id="scroll">
  <div className="scroll__container">
    <div className="step image-trigger" data-step="1">
      <img src={image7} alt="mountains" />
    </div>
    <div className="step image-trigger" data-step="2">
      <img src={image8} alt="mountains" />
    </div>
    <div className="step image-trigger" data-step="3">
      <img src={img2} alt="mountains" />
    </div>
    <div className="step" data-step="4">
      <img src={image6} alt="mountains" />
    </div>
  </div>
</section>
                <div >
                    <Map />
                </div>
                <div>
                    <section className="route-section route-step" data-step="route">
                        <div className="route-text">
                            <h1 className="route"> THE ROUTE </h1>
                            <p className="route-info">
                                We began cycling from Delhi passing through Panipat, Hardwar,
                                Dakpathar, Mussorie, Paonta Sahib, Nahan, Solan and then to Simla.
                            </p>
                        </div>
                        <div className="route-svg">
                            <RouteMap ref={routeMapRef} />
                        </div>
                    </section>
                </div>
            </body>
        </div>
    );
};

export default Home2;
