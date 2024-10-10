import React from "react";
import MembersPage from "src/pages/members/components/membersPage/MembersPage";
import { EMembersPageType } from "src/types/members";

export const Partners = () => {
  return <MembersPage memberPage={EMembersPageType.PARTNERS} />;
};

export default Partners;
