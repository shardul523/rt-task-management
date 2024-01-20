import { Button } from "@chakra-ui/react";

export const PrimaryButton = ({ children, ...buttonProps }) => {
  return (
    <Button colorScheme="blackAlpha" {...buttonProps}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
