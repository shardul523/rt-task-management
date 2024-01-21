import { Heading } from "@chakra-ui/react";

export const PrimaryHeading = ({ children, ...headingProps }) => {
  return (
    <Heading fontWeight={"bold"} color={"blackAlpha.700"} {...headingProps}>
      {children}
    </Heading>
  );
};
