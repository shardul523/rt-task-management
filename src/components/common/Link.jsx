import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = ({ children, ...linkProps }) => (
  <ChakraLink as={RouterLink} {...linkProps}>
    {children}
  </ChakraLink>
);
