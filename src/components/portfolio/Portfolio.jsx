import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi, est amet libero accusamus repellat assumenda ad deserunt officiis tempora molestias eaque blanditiis atque hic tenetur dolor! Praesentium, accusamus aspernatur!",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi, est amet libero accusamus repellat assumenda ad deserunt officiis tempora molestias eaque blanditiis atque hic tenetur dolor! Praesentium, accusamus aspernatur!",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi, est amet libero accusamus repellat assumenda ad deserunt officiis tempora molestias eaque blanditiis atque hic tenetur dolor! Praesentium, accusamus aspernatur!",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/20392251/pexels-photo-20392251/free-photo-of-a-brown-butterfly-sitting-on-a-leaf-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi, est amet libero accusamus repellat assumenda ad deserunt officiis tempora molestias eaque blanditiis atque hic tenetur dolor! Praesentium, accusamus aspernatur!",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={item.img} />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 50 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar" />
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
