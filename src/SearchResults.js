import React from "react";
import moment from "moment";

const SearchResultsRow = props => {
  const [isSelected, setIsSelected] = React.useState(false);

  const highlight = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tr onClick={highlight} className={isSelected ? "highlighted" : ""}>
      <td>{props.row.id}</td>
      <td>{props.row.title}</td>
      <td>{props.row.firstName}</td>
      <td>{props.row.surname}</td>
      <td>{props.row.email}</td>
      <td>{props.row.roomId}</td>
      <td>{props.row.checkInDate}</td>
      <td>{props.row.checkOutDate}</td>

      {/* Item 7 of the homework */}
      <td>
        {moment(props.row.checkOutDate).diff(
          moment(props.row.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>

          {/* Item 7 of the homework */}
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return <SearchResultsRow row={element} key={index} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
