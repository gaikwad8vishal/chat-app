import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-visual_wall",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Reveal mask slides away (after div)
    tl.to(".hero-visual_me-img.after", {
      height: 0,
      duration: 1.4,
      ease: "power2.out",
    });

    // Animate funko image upward and fade in
    tl.from(".hero-visual_wf-funko-img", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=1.2");

    // Shadow image fade in
    tl.from(".hero-visual_wf-shadow", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power1.out",
    }, "-=1");
  }, []);

  return (
    <div className="hero-visual_wall">
      <div className="hero-visual">
        <img
          src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6311e635f4c52fb8e6e1b2c5_fake-wf.svg"
          loading="lazy"
          alt=""
          className="hero-visual_wf"
        />
        <div className="hero-visual_wf-canvas">
          <div className="hero-visual_wf-funko">
            <img
              src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/63681b1fbefaed5f8ffe5e7e_funko-tom_new.webp"
              loading="eager"
              alt=""
              className="hero-visual_wf-funko-img"
            />
            <img
              src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6367d4ed0001037e5bf5fa8e_hero-shadow.webp"
              loading="lazy"
              alt=""
              className="hero-visual_wf-shadow"
            />
          </div>
        </div>
        <div className="hero-visual_me">
          <img
            src="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg"
            loading="eager"
            sizes="(max-width: 991px) 100vw, 530px"
            srcSet="https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 500w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 800w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 1080w, https://i.ibb.co/qL7TRVjD/Whats-App-Image-2025-04-04-at-23-09-30.jpg 1400w"
            alt=""
            className="hero-visual_me-img before"
          />
          <div className="hero-visual_me-img after"></div>
        </div>
        <div className="hero-visual_transition-box">
          <div
            data-is-ix2-target="1"
            className="hero-visual_transition"
            data-animation-type="lottie"
            data-src="https://cdn.prod.website-files.com/62c6f0db8f3bd1cd89369e11/6367e46643f4584666cc2c68_lf30_editor_wepwsxy3.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-renderer="svg"
            data-default-duration="2.002"
            data-duration="0"
          ></div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};

export default HeroSection;
