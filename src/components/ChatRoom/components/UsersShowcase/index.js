import "./usersshowcase.css";
import { connect, useSelector } from "react-redux";

const UsersShowCase = ({ users, showContacts }) => {
  return (
    <div
      className={`bg-white bg-opacity-50 overflow-scroll transition-size duration-500 border-2 border-custom-light-pink ${
        showContacts.showContacts ? "w-full p-5 h-full" : "w-0 p-0 h-0"
      }`}
    >
      <div className={`${showContacts.showContacts ? "block" : "hidden"}`}>
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

function mapStateToProps(state, ownProps) {
  return {
    showContacts: state.showContacts,
  };
}

export default connect(mapStateToProps)(UsersShowCase);
