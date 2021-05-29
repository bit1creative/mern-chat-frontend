import moment from "moment";

const Message = ({ message: { user, text, date }, name }) =>
  user === name.trim().toLowerCase() ? (
    <div className="flex justify-end p-2">
      <div className="min-w-1/3 max-w-3/4 md:max-w-1/2 bg-custom-pinker bg-opacity-70 rounded-xl py-1 px-2 break-words">
        <div className="flex flex-row justify-between truncate">
          <p className="font-bold text-sm text-right text-custom-for-name">
            {name.trim()}
          </p>
        </div>
        <div>
          <p className="text-sm">{text}</p>
        </div>
        <div className="mx-auto text-right">
          <span className="font-thin text-xs text-opacity-70 text-black">
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
    <div className="font-thin text-sm text-center truncate px-16">{text}</div>
  ) : (
    <div className="flex justify-start p-2">
      <div className="min-w-1/3 max-w-3/4 md:max-w-1/2 bg-custom-pink bg-opacity-60 rounded-xl py-1 px-2 break-words">
        <div className="flex flex-row justify-between truncate">
          <p className="font-bold text-sm text-left text-custom-for-name">
            {name.trim()}
          </p>
        </div>
        {/* <p className="font-thin text-sm">{user}</p> */}
        <div>
          <p className="text-sm">{text}</p>
        </div>
        <div className="mx-auto text-right">
          <span className="font-thin text-xs text-opacity-70 text-black">
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
