import React, { useState, useEffect } from "react";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { Box } from "@mui/system";
import { useStyles } from "./experience.styles";
import { motion } from "framer-motion";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { fetchExperienceAsync } from "./store/actions";
import { selectExperience } from "./store/selectors";
import useFetchStatus from "../../../../hooks/useFetchStatus";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

const Experience: React.FC = () => {
  const { loading, error } = useFetchStatus();
  const { classes } = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const dispatch = useDispatch();
  const experience = useSelector(selectExperience);

  useEffect(() => {
    if (experience.length === 0) {
      dispatch(fetchExperienceAsync.request());
    }
  }, [dispatch, experience.length]);

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleNextCard = () => {
    setSelectedTab((prevTab) => (prevTab + 1) % experience.length);
  };

  const handlePrevCard = () => {
    setSelectedTab((prevTab) =>
      prevTab === 0 ? experience.length - 1 : prevTab - 1
    );
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={classes.experience}>
      <SectionTitle title={"Experience"} />
      <Box className={classes.tabsWrapper}>
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={handleTabChange}
          className={classes.tabs}
        >
          {experience.map((exp) => (
            <Tab label={exp.company} key={exp.id} />
          ))}
        </Tabs>
        <Card className={classes.tabPanel}>
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CardContent className={classes.cardContent}>
              <Typography variant="h5">
                {experience[selectedTab]?.role}
                <span className={classes.companyName}>
                  {" "}
                  @ {experience[selectedTab]?.company}
                </span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {experience[selectedTab]?.duration}
              </Typography>
              <List className={classes.description}>
                {experience[selectedTab]?.description.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </motion.div>
        </Card>
        <Box className={classes.experience__btnWrapper}>
          <IconButton onClick={handlePrevCard} aria-label="Previous experience">
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleNextCard} aria-label="Next experience">
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
