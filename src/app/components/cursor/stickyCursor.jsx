'use client';
import React, { useContext, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SharedContext } from '../context/SharedContext';
import styles from '../style.module.scss';

export default function StickyCursor() {
  const { stickyElement } = useContext(SharedContext); // Access stickyElement from context
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;

  // Motion values for smooth cursor movement
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    if (stickyElement?.current) {
      const { left, top, width, height } = stickyElement.current.getBoundingClientRect();
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      if (isHovered) {
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
      } else {
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
      }
    }
  };

  const manageMouseOver = () => setIsHovered(true);
  const manageMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (stickyElement?.current) {
      stickyElement.current.addEventListener('mouseenter', manageMouseOver);
      stickyElement.current.addEventListener('mouseleave', manageMouseLeave);
      window.addEventListener('mousemove', manageMouseMove);

      return () => {
        stickyElement.current.removeEventListener('mouseenter', manageMouseOver);
        stickyElement.current.removeEventListener('mouseleave', manageMouseLeave);
        window.removeEventListener('mousemove', manageMouseMove);
      };
    }
  }, [isHovered, stickyElement]);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
      />
    </div>
  );
}
