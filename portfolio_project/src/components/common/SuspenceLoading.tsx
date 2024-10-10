import React from "react";
import { Box } from "@mui/material";

interface ISuspenseloadingProps {
  children: React.ReactNode;
}

const SuspenseLoading: React.FC<ISuspenseloadingProps> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 128px)",
          }}
        >
          CircularProgress
        </Box>
      }
    >
      {children}
    </React.Suspense>
  );
};

export default SuspenseLoading;
