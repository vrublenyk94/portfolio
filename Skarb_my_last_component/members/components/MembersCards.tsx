import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_MEMBER_IMAGE } from "src/constants/api";
import { useStyles } from "src/pages/members/components/membersPage/membersPage.style";
import useResize from "src/pages/members/hooks/useResize";
import { selectData, selectSelectedCategoryName } from "src/pages/members/store/selectors";
import { EMembersPageType } from "src/types/members";

const MembersCards: React.FC<{ memberPage: EMembersPageType }> = ({ memberPage }) => {
  const data = useSelector(selectData);
  const selectedCategoryName = useSelector(selectSelectedCategoryName);

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  const { classes } = useStyles({ memberPage });
  const navigate = useNavigate();

  useResize(contentWrapperRef, 25, 2);

  const sortedCategories = (unsortedCategories: string[]): string[] => {
    return selectedCategoryName
      ? [selectedCategoryName, ...unsortedCategories.filter((cat) => cat !== selectedCategoryName)]
      : unsortedCategories;
  };
  const formatCategories = (cats: string[]): string => {
    const sorted = sortedCategories(cats)
      .map((cat) => t(`categories.${cat}`))
      .join(", ");
    return sorted.length > 35 ? sorted.slice(0, 36) + "..." : sorted;
  };

  const handleCardClick = (userId: number) => {
    navigate(`/public-profile`);
  };

  return (
    <Box ref={contentWrapperRef} className={classes.membersPage__contentWrapper}>
      {data && Array.isArray(data) ? (
        data.map((member) => (
          <Card key={member.id} className={classes.membersPage__contentBox}>
            <CardActionArea onClick={() => handleCardClick(member.id)}>
              <CardMedia
                className={classes.membersPage__contentBox_img}
                component="img"
                image={`${GET_MEMBER_IMAGE}/${
                  memberPage === EMembersPageType.VOLUNTEERS
                    ? member?.avatar?.fileType
                    : member?.logo?.fileType
                }/${
                  memberPage === EMembersPageType.VOLUNTEERS
                    ? member?.avatar?.uuid
                    : member?.logo?.uuid
                }`}
                alt={
                  memberPage === EMembersPageType.VOLUNTEERS
                    ? `${member.firstName} ${member.lastName}`
                    : member.name
                }
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={classes.membersPage__contentBox_name}
                >
                  {memberPage === EMembersPageType.VOLUNTEERS
                    ? `${member.firstName} ${member.lastName}`
                    : member.name}
                </Typography>
                {memberPage === EMembersPageType.VOLUNTEERS && (
                  <Typography className={classes.membersPage__contentBox_categories}>
                    {formatCategories(member.categories)}
                  </Typography>
                )}
                <Typography className={classes.membersPage__contentBox_date}>
                  {t("volunteers.registered")} {member.createdDate}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography>{t("noMembersFound")}</Typography>
      )}
    </Box>
  );
};

export default MembersCards;
