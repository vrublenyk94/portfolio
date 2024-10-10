import React from "react";
import { Box } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { useStyles } from "./projectCard.styles";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
interface IProjectCardProps {
  page: string;
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  bg: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  page,
  id,
  title,
  description,
  image,
  link,
  bg,
}) => {
  const { classes } = useStyles({ page });
  return (
    <>
      <Card key={id} className={classes.projectCard}>
        <Box
          className={classes.projectCard__bg}
          sx={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            className={classes.projectCard__image}
          />
        </Box>
        <CardContent className={classes.projectCard__description}>
          <Box className={classes.projectCard__wrapper}>
            <Typography variant="h5">{title}</Typography>
            <IconButton
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <ArrowOutwardSharpIcon color="primary" />
            </IconButton>
          </Box>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
