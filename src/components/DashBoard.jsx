import { useState } from "react";
import "./DashBoard.css";
import { HomePage } from "./../pages/HomePage";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const DashBoard = () => {
  const [tabs, setTabs] = useState([
    { id: "home", title: "Home", component: HomePage },
  ]);
  const [activeTabId, setActiveTabId] = useState("home");

  const openTab = (id, title, component) => {
    setTabs((prevTabs) =>
      prevTabs.some((tab) => tab.id === id)
        ? prevTabs
        : [...prevTabs, { id, title, component }]
    );
    setActiveTabId(id);
  };

  const closeTab = (id, e) => {
    e.stopPropagation();

    setTabs((prevTabs) => {
      const remainingTabs = prevTabs.filter((tab) => tab.id !== id);

      if (activeTabId === id) {
        setActiveTabId(remainingTabs.length ? remainingTabs[remainingTabs.length - 1].id : "");
      }

      return remainingTabs;
    });
  };

  return (
    <div className="d-flex flex-column tab-container">
      <Navbar openTab={openTab} />

      {/* Horizontal Tab Bar - right below navbar */}
      <ul className="nav nav-tabs ps-2 mb-0 tab-bar">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              type="button"
              className={`nav-link tab-button pt-0 pb-0 mt-1 me-2 ${tab.id === activeTabId ? "active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.title}
              <span className="ms-2" onClick={(e) => closeTab(tab.id, e)}>
                &#88;{" "}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content - takes remaining space */}
      <div className="flex-grow-1 overflow-auto">
        {tabs
          .filter((tab) => tab.id === activeTabId)
          .map((tab) => {
            const Component = tab.component;
            return (
              <div key={tab.id} className="tab-pane active">
                <Component />
              </div>
            );
          })}
      </div>
        <Footer />
      </div>
  );
};

export default DashBoard;
