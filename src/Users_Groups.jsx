import React from "react";
import "./App.css";
import logo from "../icon/social-media.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

function Users_Groups() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onEnded={{ opacity: 0, scale: 0 }}
          transition={{ ease: "anticipate", duration: 0.3 }}
          className="list-container"
          style={{ scaleX }}
        >
          <div className="ug-header">
            <img
              src={logo}
              alt="logo"
              style={{ height: "2rem", width: "2rem" }}
            />
            <p className="ug-title">Online Users</p>
          </div>
          <div className="sb-search">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input placeholder="Search" className="search" />
          </div>
          <div className="ug-list">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="list-item"
            >
              <p className="con-icon">T</p>
              <p className="con-title">Test User</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Users_Groups;
