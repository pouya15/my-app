"use client";
import { Grid2, Skeleton } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  return (
    <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={2}>
      <Skeleton
        variant="rectangular"
        height={545}
        // width={350}
        sx={{ width: "100%", borderRadius: "8px" }}
      />
    </Grid2>
  );
};

export default SkeletonCard;
