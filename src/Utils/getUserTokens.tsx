export const getUserToken = () => {
  if (typeof window !== "undefined") return localStorage.getItem("accessToken");
  return null;
};
