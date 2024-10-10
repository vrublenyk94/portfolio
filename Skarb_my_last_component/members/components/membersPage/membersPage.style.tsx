import { MEMBERS_BREAKPOINT } from "src/constants/styling/breakpoints";
import { MEMBERS_STYLES, NAVIGATION_STYLES } from "src/constants/styling/styles";
import { EMembersPageType } from "src/types/members";
import { makeStyles } from "tss-react/mui";

import bg from "../../../../assets/img/puzzle_background_2.png";
interface IStylesProps {
  memberPage: EMembersPageType;
}
export const useStyles = makeStyles<IStylesProps>()((currentTheme, { memberPage }) => ({
  membersPage: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: currentTheme.spacing(9),
    [`@media (max-width: ${MEMBERS_BREAKPOINT.LARGE}px)`]: {
      width: "100%"
    }
  },
  membersPage__header: {
    paddingBottom: currentTheme.spacing(1.2),
    width: "100%",
    height: "200px",
    background: `url(${bg})`,
    textAlign: "center"
  },
  membersPage__header_title: {
    fontSize: MEMBERS_STYLES.FONT_SIZE,
    fontWeight: MEMBERS_STYLES.FONT_WEIGHT,
    lineHeight: MEMBERS_STYLES.LINE_HEIGHT,
    backgroundImage: MEMBERS_STYLES.COLOR,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    marginTop: currentTheme.spacing(5),
    textTransform: "uppercase",
    fontFamily: currentTheme.typography.fontFamily,
    [`@media (max-width: ${MEMBERS_BREAKPOINT.MEDIUM}px)`]: {
      fontSize: "2.2rem"
    }
  },
  membersPage__header_wrapper: {
    marginTop: currentTheme.spacing(2.75),
    display: "flex",
    alignItems: "end",
    justifyContent: memberPage === EMembersPageType.VOLUNTEERS ? "space-between" : "end",
    width: "100%",
    paddingLeft: currentTheme.spacing(2.5),
    paddingRight: currentTheme.spacing(2.5),
    [`@media (max-width: ${MEMBERS_BREAKPOINT.MEDIUM}px)`]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  membersPage__header_button: {
    color: currentTheme.palette.primary.main,
    fontWeight: 700,
    fontSize: "1rem",
    textDecoration: "none",
    lineHeight: "1.25rem",
    fontFamily: currentTheme.typography.fontFamily,
    [`@media (max-width: ${MEMBERS_BREAKPOINT.MEDIUM}px)`]: {
      marginBottom: currentTheme.spacing(1.2)
    }
  },
  membersPage__header_search: {
    width: "348px",
    height: "56px",
    border: `1px solid ${currentTheme.palette.primary.main}`,
    borderRadius: "4px",
    backgroundColor: currentTheme.palette.common.white,
    [`@media (max-width: ${MEMBERS_BREAKPOINT.SMALL}px)`]: {
      width: "300px"
    }
  },
  membersPage__contentWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    justifyItems: "center",
    gap: currentTheme.spacing(2.5), // Space between grid items
    paddingLeft: currentTheme.spacing(2.5),
    paddingRight: currentTheme.spacing(2.5),
    [`@media (max-width: ${MEMBERS_BREAKPOINT.MEDIUM}px)`]: {
      marginTop: currentTheme.spacing(3.7)
    },
    [`@media (max-width: ${MEMBERS_BREAKPOINT.SMALL}px)`]: {
      paddingLeft: "0",
      paddingRight: "0",
      justifyContent: "center"
    }
  },
  membersPage__contentBox: {
    backgroundColor: currentTheme.palette.common.white,
    height: "325px",
    width: "350px",
    borderRadius: "8px",
    paddingTop: currentTheme.spacing(4.5),
    paddingBottom: currentTheme.spacing(3),
    textAlign: "center",
    position: "relative",
    paddingLeft: currentTheme.spacing(0.5),
    paddingRight: currentTheme.spacing(0.5),
    [`@media (max-width: ${MEMBERS_BREAKPOINT.SMALL}px)`]: {
      width: "300px"
    }
  },
  membersPage__contentBox_img: {
    strokeWidth: "135px",
    height: "135px",
    display: "block",
    margin: "0 auto",
    width: "40%",
    borderRadius: "50%"
  },
  membersPage__contentBox_name: {
    fontSize: currentTheme.typography.h3.fontSize,
    fontWeight: currentTheme.typography.h3.fontWeight,
    fontFamily: currentTheme.typography.h3.fontFamily
  },
  membersPage__contentBox_categories: {
    marginTop: currentTheme.spacing(1.5),
    fontSize: "1.1rem",
    fontWeight: "400",
    height: "30px"
  },
  membersPage__contentBox_date: {
    color: currentTheme.palette.primary.main,
    fontFamily: currentTheme.typography.h3.fontFamily,
    fontWeight: "400",
    fontSize: "0.875rem",
    marginTop:
      memberPage === EMembersPageType.VOLUNTEERS
        ? currentTheme.spacing(3)
        : currentTheme.spacing(7.5)
  },
  membersPage__button: {
    marginTop: currentTheme.spacing(6),
    fontSize: "0.75rem",
    textDecoration: "underline",
    color: currentTheme.palette.primary.main,
    fontFamily: currentTheme.typography.h3.fontFamily,
    textTransform: "capitalize",
    fontWeight: "700"
  },
  membersPage__pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: currentTheme.spacing(5),
    fontFamily: currentTheme.typography.h3.fontFamily
  },
  category_menu__item: {
    color: currentTheme.palette.primary.main,
    textDecoration: "none",
    textTransform: "capitalize",
    fontFamily: currentTheme.typography.fontFamily,
    fontWeight: NAVIGATION_STYLES.FONT_WEIGHT_NORMAL,
    fontSize: NAVIGATION_STYLES.FONT_SIZE,
    lineHeight: NAVIGATION_STYLES.LINE_HEIGHT,
    "&:hover": {
      backgroundColor: currentTheme.palette.primary.dark,
      fontWeight: NAVIGATION_STYLES.FONT_WEIGHT_BOLD
    }
  }
}));
