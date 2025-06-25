import NavBar from "@/components/NavBar";
import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page doesn't exist"
          : "Unexpected error occured"}
      </Text>
    </>
  );
};

export default ErrorPage;
