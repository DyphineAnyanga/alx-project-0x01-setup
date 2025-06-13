import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser(prev => {
      const updated = { ...prev };
      const path = name.split(".");
      let obj: any = updated;
      while (path.length > 1) {
        obj = obj[path.shift()!];
      }
      obj[path[0]] = value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="w-full p-2 border rounded" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded" />
          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" />
          <input name="address.city" value={user.address.city} onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-500">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
