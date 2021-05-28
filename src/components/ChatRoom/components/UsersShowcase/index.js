import "./usersshowcase.css";
import { connect, useSelector } from "react-redux";

const UsersShowCase = ({ users, showContacts }) => {
  return (
    <div
      className={`bg-white bg-opacity-50 overflow-scroll transition-size duration-500 ${
        showContacts.showContacts
          ? "w-full md:w-3/12 lg:w-2/12 xl:w-1/12 p-5 h-1/2 md:h-full lg:h-5/6 xl:h-3/4"
          : "w-0 p-0 h-0"
      }`}
    >
      <div className={`${showContacts.showContacts ? "block" : "hidden"}`}>
        <span className="font-thin">Users in chat:</span>
        <div className="text-green-800 truncate">
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
