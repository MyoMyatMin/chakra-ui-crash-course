import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.5">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        // bg="brand.600"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} as="main" p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
