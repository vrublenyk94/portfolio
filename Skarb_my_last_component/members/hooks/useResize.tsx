import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MEMBERS_BREAKPOINT } from "src/constants/styling/breakpoints";
import { setPageSize } from "src/pages/members/store/actions";
import { EItemSizes } from "src/types/members";

const useResize = (
  refParent: React.RefObject<HTMLDivElement>,
  gap: number = 0,
  rows: number = 0
) => {
  const dispatch = useDispatch();
  const calculatePageSize = useCallback(() => {
    if (!refParent.current) return;
    const containerWidth = refParent.current.offsetWidth;
    const itemWidth: number =
      containerWidth > MEMBERS_BREAKPOINT.SMALL ? EItemSizes.LARGE : EItemSizes.SMALL;
    const itemsPerRow = Math.floor(containerWidth / (itemWidth + gap));
    dispatch(setPageSize(itemsPerRow * rows));
  }, [refParent, setPageSize]);
  useEffect(() => {
    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);
    return () => {
      window.removeEventListener("resize", calculatePageSize);
    };
  }, [calculatePageSize]);
};

export default useResize;
