import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const FormField = ({ fieldName, ...inputProps }) => {
  return (
    <FormControl id={fieldName}>
      <FormLabel>{fieldName}</FormLabel>
      <Input {...inputProps} focusBorderColor={"blackAlpha.500"} />
    </FormControl>
  );
};
