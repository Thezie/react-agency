import React from "react";
import "./main.css";
import { useState } from "react";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
function Main() {
  // ================= Data ================
  const newProject = myProjects;
  // ================= Hooks ==================
  const [active, setActive] = useState("all");
  const [filteredProject, setFilteredProject] = useState(myProjects);
  // ================ Handle Events ===========
  const handleActive = (filter) => {
    setActive(filter);
    // ================ Filter Porjects ===========
    const newArr = newProject.filter((item) => {
      return item.category.some((category) => category.includes(filter));
    });
    setFilteredProject(newArr);
  };
  return (
    <main className="flex padded-section" style={{ gap: "3rem" }}>
      <section className=" flex left-section">
        <button
          onClick={() => handleActive("all")}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handleActive("css")}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleActive("js")}
          className={active === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleActive("react")}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => handleActive("node")}
          className={active === "node" ? "active" : null}
        >
          Node
        </button>
      </section>
      <section className="right-section">
        <AnimatePresence>
          {filteredProject.map((item, key) => {
            return (
              <motion.div
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="card"
                key={key}
              >
                <img src={item.imgPath} />
                <div className="box">
                  <h2 className="title">{item.projectTitle}</h2>
                  <p className="description">{item.description}</p>
                </div>
                <div className="links flex">
                  <button className="icon-link" />
                  <button className="icon-github" />
                  <div className="more">
                    more
                    <button className="icon-arrow-right2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
