import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import React from "react";

export const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 300, width: "100%" }}>
      <Stack spacing={1}>
        <Skeleton animation="wave" variant="rectangular" sx={{ height: 190 }} />
        <CardContent>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </Stack>
    </Card>
  );
};

const Loader = () => {
  return <div>Loader</div>;
};

export default Loader;
