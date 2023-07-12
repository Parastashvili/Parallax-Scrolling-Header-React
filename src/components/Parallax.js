import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain4 = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const stars = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "3000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain4.current,
        {
          y: "-=100",
        //   opacity: "0.6",
        },
        0
      );
      tl.to(
        mountain3.current,
        {
          y: "-=120",
        //   opacity: "0.7",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=200",
        //   opacity: "0.8",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "-=300",
        //   opacity: "0.9",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );

      tl.to(
        copy.current,
        {
          y: "-5%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div ref={parallaxRef} className="parallax">
        <div className="parallax-container">
          <img
            ref={mountain4}
            className="mountain-4"
            src="/parallax/mountain-4.png"
          />
          <img
            ref={mountain3}
            className="mountain-3"
            src="/parallax/mountain-3.png"
          />
          <img
            ref={mountain2}
            className="mountain-2"
            src="/parallax/mountain-2.png"
          />
          <img
            ref={mountain1}
            className="mountain-1"
            src="/parallax/mountain-1.png"
          />
        </div>
        <img ref={stars} className="stars" src="/parallax/stars.svg" />
        <div ref={copy} className="copy">
          <h1>Journey</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
