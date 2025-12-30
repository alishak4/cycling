import React, { useEffect, useRef } from "react";
import scrollama from "scrollama";
import "./Home2.css";
import image from "../images/homepage_img.jpeg";
// import img2 from "../images/ics_047.jpg";
import image3 from "../images/img1.jpg";
import image4 from "../images/img2.jpg";
import image5 from "../images/img3.jpg";
import image6 from "../images/img6.jpg";
// import image7 from "../images/img7.jpg";
import image8 from "../images/img5.jpg";
import RouteMap from "./RouteMap";
import { Link } from "react-router-dom";
import Map from "./Map";

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

                <div className="button-group">
                    <Link to="/gallery"><button className="intro-button">Gallery</button></Link>
                    <Link to="/map"><button className="intro-button">Map</button></Link>
                    <Link to="/route"><button className="intro-button">Route</button></Link>
                    <Link to="/media"><button className="intro-button">Media</button></Link>
                </div>

                <section id="scroll">
                    <div className="scroll__container">
                        <div className="step image-trigger" data-step="1">
                            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/69810932/344473364-087b0d50-a15f-47e4-906d-d2f5213bc6de.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251230%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251230T014818Z&X-Amz-Expires=300&X-Amz-Signature=4742cf690972789cc7ff61c12145a928296b5822791ec7acda3652fe3ba72aeb&X-Amz-SignedHeaders=host' alt="mountains" />
                        </div>
                        <div className="step image-trigger" data-step="2">
                            <img src={image8} alt="mountains" />
                        </div>
                        <div className="step image-trigger" data-step="3">
                            <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/69810932/344473362-e682811a-9b8c-405f-83a5-67b003f0ef10.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251230%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251230T015333Z&X-Amz-Expires=300&X-Amz-Signature=ddba834647732bc566fce00b8224f2043b10bb5b0613e8b2296c2120b782a832&X-Amz-SignedHeaders=host' alt="mountains" />
                        </div>
                        <div className="step" data-step="4">
                            <img src={image6} alt="mountains" />
                        </div>
                    </div>
                </section>
                
                <div>
                    <section className="route-section route-step" data-step="route">
                        <div className="route-svg">
                            <RouteMap ref={routeMapRef} />
                        </div>
                    </section>
                </div>
                <div>
                    <Map/>
                </div>
            </body>
        </div>
    );
};

export default Home2;
