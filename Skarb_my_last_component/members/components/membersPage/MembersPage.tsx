import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, Pagination, TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import MembersCards from "src/pages/members/components/MembersCards";
import MembersCategoriesMenu from "src/pages/members/components/MembersCategoriesMenu";
import { useStyles } from "src/pages/members/components/membersPage/membersPage.style";
import { useDebounce } from "src/pages/members/hooks/useDebounce";
import useGetTheme from "src/pages/members/hooks/useGetTheme";
import {
  selectCurrentPage,
  selectLast,
  selectMemberName,
  selectPageSize,
  selectSearchHeader,
  selectSelectedCategoryId,
  selectTotalElements,
  selectTotalPages
} from "src/pages/members/store/selectors";
import { EMembersPageType, IMemberPageProps } from "src/types/members";

import {
  fetchMembersAsync,
  setCurrentPage,
  setMemberName,
  setPageSize,
  setSearchHeader
} from "../../store/actions";

const MembersPage: React.FC<IMemberPageProps> = ({ memberPage }) => {
  const pageSize = useSelector(selectPageSize);
  const memberName = useSelector(selectMemberName);
  const searchHeader = useSelector(selectSearchHeader);
  const currentPage = useSelector(selectCurrentPage);
  const last = useSelector(selectLast);
  const totalPages = useSelector(selectTotalPages);
  const totalElements = useSelector(selectTotalElements);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { classes } = useStyles({ memberPage });
  const debouncedName = useDebounce(memberName, 500);

  const translationPath = useMemo(
    () => ({
      [EMembersPageType.VOLUNTEERS]: "volunteers.volunteers",
      [EMembersPageType.PARTNERS]: "partners.partners",
      [EMembersPageType.ORGANIZATIONS]: "organizations.organizations"
    }),
    []
  );

  useEffect(() => {
    if (pageSize) {
      dispatch(
        fetchMembersAsync.request({
          page: currentPage,
          name: debouncedName,
          searchHeader,
          pageSize,
          memberPage,
          selectedCategoryId
        })
      );
    }
  }, [memberPage, currentPage, debouncedName, pageSize, selectedCategoryId]);
  useEffect(() => {
    dispatch(
      setSearchHeader(
        memberPage === EMembersPageType.VOLUNTEERS ? "nameOrEmailSearch" : "organizationName"
      )
    );
  }, [memberPage, dispatch]);

  const handleLoadMore = () => {
    dispatch(setPageSize(pageSize * 2));
  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };
  const handleNameSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMemberName(event.target.value));
  };

  return (
    <Box className={classes.membersPage}>
      <Box className={classes.membersPage__header}>
        <h1 className={classes.membersPage__header_title}>
          {t(translationPath[memberPage])} - {totalElements}
        </h1>
        <Box className={classes.membersPage__header_wrapper}>
          {memberPage === EMembersPageType.VOLUNTEERS && (
            <MembersCategoriesMenu memberPage={memberPage} />
          )}
          <TextField
            className={classes.membersPage__header_search}
            onChange={handleNameSet}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
      <MembersCards memberPage={memberPage} />
      <Button className={classes.membersPage__button} disabled={last} onClick={handleLoadMore}>
        {t("volunteers.loadMore")}
      </Button>
      <Pagination
        className={classes.membersPage__pagination}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="small"
      />
    </Box>
  );
};

export default MembersPage;
