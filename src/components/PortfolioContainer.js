import React, { useState } from "react";
import "../App.css";
import background from "./pictures/photo2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div
      id="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer />
    </div>
  );
}
