import { membersTheme } from "src/theme/membersTheme";
import { EMembersPageType } from "src/types/members";

const useGetTheme = (memberPage: EMembersPageType) => {
  const getTheme = (page: EMembersPageType) => {
    switch (page) {
      case EMembersPageType.VOLUNTEERS:
        return { primaryMain: "#3E894E", primaryDark: "#2E714026" };
      case EMembersPageType.PARTNERS:
        return { primaryMain: "#635A8E", primaryDark: "#504574" };
      case EMembersPageType.ORGANIZATIONS:
        return { primaryMain: "#841A31", primaryDark: "#641c2d" };
      default:
        return { primaryMain: "#3E894E", primaryDark: "#2E714026" };
    }
  };
  return membersTheme(getTheme(memberPage));
};

export default useGetTheme;
