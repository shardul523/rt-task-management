import { Link } from "react-router-dom";

import { PrimaryButton } from ".";

export const ButtonLink = ({ children, to, ...props }) => {
  return (
    <PrimaryButton {...props}>
      <Link to={to}>{children}</Link>
    </PrimaryButton>
  );
};
