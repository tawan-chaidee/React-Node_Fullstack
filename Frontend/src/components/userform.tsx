import React, { useState, useEffect } from "react";
import { User } from "../service/userService"; // Import User type

interface UserFormProps {
  user: User | null;
  onSave: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSave }) => {
  const [username, setUsername] = useState<string>(user?.username || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [password, setPassword] = useState<string>(user?.password || "");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ _id: user?._id || "", username, email, password, createdAt: "", updatedAt: "", __v: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
