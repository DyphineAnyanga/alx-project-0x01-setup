import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const id = userList.length + 1;
    setUserList([...userList, { ...newUser, id }]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded text-white">Add User</button>
        </div>
        <ul className="space-y-2">
          {userList.map((user) => (
            <li key={user.id} className="border p-4 rounded">
              <h2 className="font-semibold">{user.name} ({user.username})</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </li>
          ))}
        </ul>
        {isModalOpen && (
          <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users }
  };
}

export default Users;
