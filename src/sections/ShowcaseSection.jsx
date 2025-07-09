import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const uberRef = useRef(null);
    const AIResumeanalyserRef = useRef(null);
    const collegeCompanionappRef = useRef(null);

    useGSAP(() => {
        // Section fade-in
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom-=100",
                },
            }
        );

        // Cards animation
        const cards = [uberRef.current, AIResumeanalyserRef.current, collegeCompanionappRef.current];

        // Animate all cards together
        gsap.fromTo(
            cards,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.15, // Small stagger between cards
                scrollTrigger: {
                    trigger: sectionRef.current, // Trigger based on parent section
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);


    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={uberRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/p1.jpg" alt="uber App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                                called Uber-clone
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Not a simple UI clone but carefully implemented full fledged
                                application clone.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={AIResumeanalyserRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/project2.png"
                                    alt="AIResumeanalyser"
                                />
                            </div>
                            <h2>AI Resume analyser</h2>
                            <h4>status - ongoing</h4>
                        </div>

                        <div className="project" ref={collegeCompanionappRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/p3.png" alt="college Companion app" />
                            </div>
                            <h2>College Companion App</h2>
                            <h4>status-ongoing</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
