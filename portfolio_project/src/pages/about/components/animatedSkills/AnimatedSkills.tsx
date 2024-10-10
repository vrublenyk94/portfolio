import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./animatedSkills.styles";

const skillsRowVariants = (width: number, direction: string) => ({
  animate: {
    x: direction === "left" ? [0, -width] : [-width, 0],
    transition: {
      duration: 35,
      ease: "linear",
      repeat: Infinity,
    },
  },
});

const AnimatedSkills: React.FC = () => {
  const { classes } = useStyles();
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const totalWidth = ref.current.scrollWidth / 2;
      setWidth(totalWidth);
    }
  }, [ref]);

  return (
    <Box className={classes.animatedSkills}>
      <Typography variant="h2" className={classes.animatedSkills__title}>
        My Stack
        <span className={classes.animatedSkills__title_dot}>.</span>
      </Typography>
      <Box className={classes.animatedSkills__row}>
        <motion.div
          variants={skillsRowVariants(width, "left")}
          animate="animate"
          className={classes.animatedSkills__content}
          ref={ref}
        >
          <Typography
            className={classes.animatedSkills__rows_green}
            variant="h4"
          >
            React.js | JavaScript | TypeScript | HTML | CSS | Redux |
            ReactRouter | Time Management |
          </Typography>
          <Typography
            className={classes.animatedSkills__rows_green}
            variant="h4"
          >
            React.js | JavaScript | TypeScript | HTML | CSS | Redux |
            ReactRouter | Time Management |
          </Typography>
        </motion.div>
      </Box>
      <Box className={classes.animatedSkills__row}>
        <motion.div
          variants={skillsRowVariants(width, "right")}
          animate="animate"
          className={classes.animatedSkills__content}
        >
          <Typography
            className={classes.animatedSkills__rows_white}
            variant="h4"
          >
            Node.js | Jest | MongoDB | SQL | REST APIs | Webpack | WordPress |
            Attention to Detail |
          </Typography>
          <Typography
            className={classes.animatedSkills__rows_white}
            variant="h4"
          >
            Node.js | Jest | MongoDB | SQL | REST APIs | Webpack | WordPress |
            Attention to Detail |
          </Typography>
        </motion.div>
      </Box>
      <Box className={classes.animatedSkills__row}>
        <motion.div
          variants={skillsRowVariants(width, "left")}
          animate="animate"
          className={classes.animatedSkills__content}
        >
          <Typography
            className={classes.animatedSkills__rows_green}
            variant="h4"
          >
            Material-UI | Git | Docker | GitHub | Framer Motion | BEM |
            Bootstrap | Critical thinking |
          </Typography>
          <Typography
            className={classes.animatedSkills__rows_green}
            variant="h4"
          >
            Material-UI | Git | Docker | GitHub | Framer Motion | BEM |
            Bootstrap | Critical thinking |
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AnimatedSkills;
