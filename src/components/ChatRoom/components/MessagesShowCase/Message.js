import moment from "moment";

const Message = ({ message: { user, text, date }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end p-2">
      <div className="w-5/12 bg-green-200 bg-opacity-80 rounded-xl py-1 px-2">
        <div className="flex flex-row justify-between">
          <span className="font-thin text-xs">
            {/* Add check for date */}
            {/* Add check for date */}
            {moment(moment()).isSame(date, "day")
              ? moment(date).format("LT")
              : moment().diff(date, "days") === 0
              ? "Yesterday"
              : moment().diff(date, "days") <= 7
              ? moment(date).format("ddd, h:mm")
              : moment().diff(date, "years") === 0
              ? moment(date).format("MMM Do")
              : moment(date).format("MMM Do YYYY")}
          </span>
          <p className="font-thin text-sm text-right">{user}</p>
        </div>
        <div>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-start p-2">
      <div className="w-5/12 bg-green-100 bg-opacity-80 rounded-xl py-1 px-2">
        <div className="flex flex-row justify-between">
          <p className="font-thin text-sm text-left">{user}</p>
          <span className="font-thin text-xs">
            {/* Add check for date */}
            {moment(moment()).isSame(date, "day")
              ? moment(date).format("LT")
              : moment().diff(date, "days") === 0
              ? "Yesterday"
              : moment().diff(date, "days") <= 7
              ? moment(date).format("ddd, h:mm")
              : moment().diff(date, "years") === 0
              ? moment(date).format("MMM Do")
              : moment(date).format("MMM Do YYYY")}
          </span>
        </div>
        {/* <p className="font-thin text-sm">{user}</p> */}
        <div>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
