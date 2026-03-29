import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (userData) => {

    const { name, age, gender, dob, email, password } = userData;

    if (!name || !age || !gender || !dob || !email || !password) {
      alert("Please fill all fields");
      return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === email);

    if (exist) {

      // LOGIN
      if (exist.password !== password) {
        alert("Wrong password");
        return false;
      }

      setUser(exist);
      localStorage.setItem("user", JSON.stringify(exist));

      return true;

    } else {

      // REGISTER
      const newUser = {
        name,
        age,
        gender,
        dob,
        email,
        password   // ✅ password add pannum
      };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(newUser));

      setUser(newUser);

      return true;

    }

  };

  const logout = () => {

    setUser(null);
    localStorage.removeItem("user");

  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};