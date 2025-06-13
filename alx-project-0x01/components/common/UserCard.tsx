import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">@{username}</p>

      <div className="text-gray-700 text-sm mb-2">
        <p>Email: <a href={`mailto:${email}`} className="text-blue-600 underline">{email}</a></p>
        <p>Phone: {phone}</p>
        <p>Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{website}</a></p>
      </div>

      <div className="text-gray-600 text-sm mb-2">
        <p><strong>Company:</strong> {company.name}</p>
        <p className="italic">"{company.catchPhrase}"</p>
      </div>

      <div className="text-gray-600 text-sm">
        <p><strong>Address:</strong> {address.suite}, {address.street}, {address.city}</p>
        <p>Zip: {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
