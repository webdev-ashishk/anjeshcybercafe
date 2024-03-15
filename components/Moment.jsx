import moment from "moment";

export default function Moment() {
  return (
    <div className="text-red-600">
      <h1>moment.js help us to formate date and time easily</h1>
      <b>{moment().format("MMMM Do YYYY, h:mm:ss a")}</b>
      <h2>Running time {moment().format("LTS")}</h2>
    </div>
  );
}
