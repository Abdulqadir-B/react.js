// use is newer react 19 syntax, it is newer way to use the useContext and dont requires to follow the rules of hooks as it a object.
import { useContext, use } from "react"; 
import { UserContext } from "./UserContext";

export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);
  const { user: user2 } = use(UserContext); // example of user2 by using use hook

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user2.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};