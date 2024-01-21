export const getLocalUser = () => {
  const stringUserToken = localStorage.getItem("auth");
  return stringUserToken ? JSON.parse(stringUserToken) : null;
};

export const setLocalUser = (user) => {
  const userToken = JSON.stringify(user);
  localStorage.setItem("auth", userToken);
};
