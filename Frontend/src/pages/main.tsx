import React, { useEffect, useState } from "react";
import { ItemList } from "../components/itemlist";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../service/userService"; // Import necessary services
import NavBar from "../components/navbar";
import Spacer from "../components/spacer";
import { Users, User } from "../service/userService"; // Import the Users and User types
import Modal from "../components/modal"; // Import the modal for adding/editing users
import UserForm from "../components/userform";

const Main: React.FC = () => {
  const [userList, setUserList] = useState<Users>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null); // For editing existing user
  const [modalTitle, setModalTitle] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUserList(users);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setModalTitle("Add User");
    setCurrentUser(null); // Clear current user for adding a new one
    setShowModal(true);
  };

  const handleEditUser = (userId: string) => {
    const user = userList.find((user) => user._id === userId);
    if (user) {
      setModalTitle("Edit User");
      setCurrentUser(user); // Set the user to edit
      setShowModal(true);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUserList(userList.filter((user) => user._id !== userId)); // Remove deleted user from the list
    } catch (err) {
      setError("An error occurred while deleting the user");
    }
  };

  const handleSaveUser = async (user: User) => {
    try {
      if (currentUser) {
        // If editing an existing user
        const updatedUser = await updateUser(
          currentUser._id,
          user.username,
          user.email,
          user.password
        );
        setUserList(
          userList.map((u) => (u._id === updatedUser._id ? updatedUser : u))
        ); // Update the user in the list
      } else {
        // If adding a new user
        const newUser = await createUser(
          user.username,
          user.email,
          user.password
        );
        setUserList([...userList, { ...user, _id: newUser.message }]); // Add the new user to the list
      }
      setShowModal(false); // Close modal after saving
    } catch (err) {
      setError("An error occurred while saving the user");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Spacer height="120px"/>

      <NavBar />
      <Spacer height="20px"/>
      <div className="container">
        <ItemList
          UsersList={userList}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onAddUser={handleAddUser}
        />
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} title={modalTitle}>
          <UserForm user={currentUser} onSave={handleSaveUser} />
        </Modal>
      )}

      {error && <div className="error-message">{error}</div>} {/* Display error message */}
    </>
  );
};

export default Main;
