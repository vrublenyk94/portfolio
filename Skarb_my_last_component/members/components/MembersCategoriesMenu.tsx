import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "src/pages/members/components/membersPage/membersPage.style";
import {
  closeCategoriesMenu,
  openCategoriesMenu,
  selectCategoryAndResetPage
} from "src/pages/members/store/actions";
import {
  selectCategories,
  selectCategoriesMenuAnchor,
  selectSelectedCategoryName
} from "src/pages/members/store/selectors";
import { EMembersPageType } from "src/types/members";

const MembersCategoriesMenu: React.FC<{ memberPage: EMembersPageType }> = ({ memberPage }) => {
  const categories = useSelector(selectCategories);
  const selectedCategoryName = useSelector(selectSelectedCategoryName);
  const categoriesMenuAnchor = useSelector(selectCategoriesMenuAnchor);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { classes } = useStyles({ memberPage });

  const handleCategoriesSelect = (categoryId: number, categoryName: string) => {
    dispatch(selectCategoryAndResetPage({ categoryId, categoryName }));
  };
  const handleCategoriesMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(openCategoriesMenu({ elementRef: event.currentTarget }));
  };
  const handleCategoriesMenuClose = () => {
    dispatch(closeCategoriesMenu(null));
  };

  return (
    <>
      <Button
        className={classes.membersPage__header_button}
        id="categories-menu-button"
        aria-controls={categoriesMenuAnchor ? "categories-menu" : undefined}
        aria-haspopup="menu"
        aria-expanded={categoriesMenuAnchor ? "true" : undefined}
        onClick={handleCategoriesMenuOpen}
      >
        {!selectedCategoryName ? t("volunteers.category") : t(`categories.${selectedCategoryName}`)}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="categories-menu"
        anchorEl={categoriesMenuAnchor?.elementRef}
        open={Boolean(categoriesMenuAnchor)}
        onClose={handleCategoriesMenuClose}
        MenuListProps={{
          "aria-labelledby": "categories-menu-button"
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => handleCategoriesSelect(category.id, category.name)}
            className={classes.category_menu__item}
          >
            {t(`categories.${category.name}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default MembersCategoriesMenu;
