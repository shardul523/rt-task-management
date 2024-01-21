import { ButtonGroup, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { FormField, PrimaryButton, PrimaryHeading } from ".";

/**
 * @param {{title, fields, buttons}} formConfig
 * @returns {ReactNode}
 */
export const Form = ({ formConfig }) => {
  const { title, fields, buttons, formSize, headingSize } = formConfig;

  return (
    <Card minW={formSize}>
      <CardHeader>
        <PrimaryHeading size={headingSize && headingSize}>
          {title}
        </PrimaryHeading>
      </CardHeader>
      <CardBody as={"form"} gap={10} display={"flex"} flexDir={"column"}>
        {fields.map((field) => (
          <FormField field={field} key={field.id} />
        ))}
        <ButtonGroup display={"flex"} gap={5} justifyContent={"flex-end"}>
          {buttons.map((button) => (
            <PrimaryButton key={button.name} onClick={button.onclick}>
              {button.name}
            </PrimaryButton>
          ))}
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};
