export const authToken = () => {
    return localStorage.getItem("USER_TOKEN") || null;
  };