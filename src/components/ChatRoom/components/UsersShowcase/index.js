import "./usersshowcase.css";

const UsersShowCase = ({ users, showContacts }) => {
  return (
    <div
      className={`bg-white bg-opacity-50 overflow-scroll transition-size duration-500 border-2 border-custom-light-pink ${
        showContacts ? "w-full p-5 h-full" : "w-0 p-0 h-0"
      }`}
    >
      <div className={`${showContacts ? "block" : "hidden"}`}>
        <div className="text-center">
          <span className="font-thin">Users in chat:</span>
        </div>
        <div className="text-red-700 truncate text-center">
          {users.map((user) => (
            <div key={user.name}>{user.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersShowCase;
