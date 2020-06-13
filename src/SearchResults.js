import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table table-striped">
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
        {props.results.map(element => {
          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>

              {/* Item 7 of the homework */}
              <td>
                {moment(element.checkOutDate).diff(
                  moment(element.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
