import moment from "moment";

const Message = ({ message: { user, text, date }, name }) =>
  user === name.trim().toLowerCase() ? (
    <div className="flex justify-end p-2">
      <div className="w-5/12 bg-green-200 bg-opacity-80 rounded-xl py-1 px-2">
        <div className="flex flex-row justify-between">
          <p className="font-thin text-sm text-right">{user}</p>
        </div>
        <div>
          <p className="text-sm">{text}</p>
        </div>
        <div className="mx-auto text-right">
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
        </div>
      </div>
    </div>
  ) : user === "admin" ? (
    <div className="font-thin text-sm text-center">{text}</div>
  ) : (
    <div className="flex justify-start p-2">
      <div className="w-5/12 bg-green-100 bg-opacity-80 rounded-xl py-1 px-2">
        <div className="flex flex-row justify-between">
          <p className="font-thin text-sm text-left">{user}</p>
        </div>
        {/* <p className="font-thin text-sm">{user}</p> */}
        <div>
          <p className="text-sm">{text}</p>
        </div>
        <div className="mx-auto text-right">
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
        </div>
      </div>
    </div>
  );

export default Message;
