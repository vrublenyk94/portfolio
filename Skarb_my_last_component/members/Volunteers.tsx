import React from "react";
import MembersPage from "src/pages/members/components/membersPage/MembersPage";
import { EMembersPageType } from "src/types/members";

export const Volunteers = () => {
  return <MembersPage memberPage={EMembersPageType.VOLUNTEERS} />;
};

export default Volunteers;
