"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const tabs = [
  { name: "Nike", color: "rgba(255,255,255,0.5)", link: "nike" },
  { name: "Shoes", color: "rgba(255,255,255,0.5)", link: "shoes" },
  { name: "Porsche", color: "rgba(255,255,255,0.5)", link: "porsche" },
  { name: "Diamond", color: "rgba(255,255,255,0.5)", link: "diamond" },
];

const duration = 0.3;

export function Menu() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  const redirect = (link) => {
    router.push(link);
  }

  return (
    <div className="absolute top-16 left-20">
      <div style={containerStyle}>
        {tabs.map(({ name, color, link }, i) => (
          <motion.div
            style={tabStyle}
            key={i}
            initial={{ color: i === selected ? "#fff" : "#222" }}
            animate={{ color: i === selected ? "#fff" : "#222" }}
            transition={{ duration }}
            onTap={() => {
              setFormerColor(tabs[selected].color);
              setSelected(i);
            }}
          >
            <button style={{ position: "relative", zIndex: 1, color: "black", paddingTop: 8, textShadow: "2px 2px 5px white" }} onClick={() => redirect(link)}>{name}</button>
            {i === selected && (
              <motion.div
                style={selectionStyle}
                layoutId="selected"
                initial={{ backgroundColor: formerColor }}
                animate={{ backgroundColor: color }}
                transition={{ duration }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  position: "relative",
  borderRadius: 48,
  backgroundColor: "rgba(0,0,0,0.2)",
  padding: 8,
  display: "flex",
  alignContent: "flex-start",
  alignItems: "start",
  justifyContent: "start",
  zIndex: 30
};

const tabStyle = {
  height: 48,
  position: "relative",
  padding: "0px 24px",
  margin: 0,
  fontSize: 32,
  color: "#222",
  cursor: "pointer",
};

const selectionStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: 32,
  top: 0,
  left: 0,
};
