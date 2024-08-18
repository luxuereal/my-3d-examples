"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const tabs = [
  { name: "Nike", link: "nike" },
  { name: "Car Racing", link: "car-racing" },
  { name: "Porsche", link: "porsche" },
  { name: "Shoes", link: "shoes" },
  { name: "Car Show", link: "car-show" },
  { name: "Diamond", link: "diamond" },
];

const duration = 0.3;

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(0);

  const redirect = (link) => {
    router.push(link);
  }

  useEffect(() => {
    switch (pathname) {
      case "/nike":
        setSelected(0);
        break;
      case "/car-racing":
        selected(1);
        break;
      case "/porsche":
        selected(2);
        break;
      case "/shoes":
        selected(3);
        break;
      case "/car-show":
        selected(4);
        break;
      case "/diamond":
        selected(5);
        break;
      default:
        break;
    }
  }, [pathname]);

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
              setSelected(i);
            }}
          >
            <button style={{ position: "relative", zIndex: 1, color: "black", paddingTop: 8, textShadow: "2px 2px 5px white" }} onClick={() => redirect(link)}>{name}</button>
            {i === selected && (
              <motion.div
                style={selectionStyle}
                layoutId="selected"
                initial={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
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

export default Menu;
