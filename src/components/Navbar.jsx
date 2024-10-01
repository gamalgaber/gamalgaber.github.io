import { useEffect, useRef } from "react";
import "../styles/index.css";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  function initActiveBox() {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  }

  useEffect(() => {
    // Find the home link and set it as the initial active link
    const homeLink = document.querySelector(".nav-link.active");
    if (homeLink) {
      lastActiveLink.current = homeLink; // Set the home link as the initial active link
      initActiveBox(); // Set the active-box position based on the initial active link
    }

    // Update active-box position on window resize
    window.addEventListener("resize", initActiveBox);

    return () => {
      // Clean up event listener on unmount
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    event.target.classList.add("active");
    lastActiveLink.current = event.target; // Update the reference to the clicked link
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          onClick={activeCurrentLink}
          className={className}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

export default Navbar;
