import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

export const FormField = ({ field, ...inputProps }) => {
  const { name, id, type, ref } = field;
  return (
    <FormControl id={id}>
      <FormLabel>{name}</FormLabel>
      {type === "textarea" && (
        <Textarea
          w={"100%"}
          ref={ref}
          p={5}
          borderColor={"blackAlpha.200"}
          border={"2px"}
          borderRadius={5}
        />
      )}
      {type !== "textarea" && (
        <Input
          ref={ref}
          type={type}
          {...inputProps}
          focusBorderColor={"blackAlpha.500"}
        />
      )}
    </FormControl>
  );
};
