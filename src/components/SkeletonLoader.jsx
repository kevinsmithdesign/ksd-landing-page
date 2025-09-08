import React from 'react';
import { Box, Skeleton, Container, Grid, Card } from '@mui/material';

export const HeroSkeleton = () => (
  <Container sx={{ py: 12, textAlign: "center" }}>
    <Skeleton 
      variant="text" 
      width="80%" 
      height={100} 
      sx={{ mx: "auto", mb: 2 }} 
    />
    <Box sx={{ mx: "auto", maxWidth: "760px" }}>
      <Skeleton 
        variant="text" 
        width="60%" 
        height={30} 
        sx={{ mx: "auto" }} 
      />
    </Box>
  </Container>
);

export const ServicesSkeleton = () => (
  <Container sx={{ my: 20 }}>
    <Skeleton variant="text" width={300} height={100} sx={{ mb: 2 }} />
    <Grid container spacing={1} mb={1}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Card sx={{ padding: "40px", borderRadius: "16px", height: "100%" }}>
          <Skeleton variant="rectangular" width="100%" height={134} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="70%" height={40} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="80%" height={20} />
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Card sx={{ padding: "40px", borderRadius: "16px", height: "100%" }}>
          <Skeleton variant="rectangular" width="100%" height={134} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="60%" height={40} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="90%" height={20} />
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export const CarouselSkeleton = () => (
  <Container
    disableGutters
    maxWidth={false}
    sx={{ overflow: "hidden", py: 3 }}
  >
    <Box sx={{ display: "flex", mb: 4 }}>
      {[...Array(6)].map((_, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          width={320}
          height={240}
          sx={{
            borderRadius: "8px",
            marginRight: "24px",
            flexShrink: 0,
          }}
        />
      ))}
    </Box>
    <Box sx={{ display: "flex" }}>
      {[...Array(6)].map((_, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          width={320}
          height={240}
          sx={{
            borderRadius: "8px",
            marginRight: "24px",
            flexShrink: 0,
          }}
        />
      ))}
    </Box>
  </Container>
);

export const FullPageSkeleton = () => (
  <Box>
    <HeroSkeleton />
    <CarouselSkeleton />
    <ServicesSkeleton />
  </Box>
);
