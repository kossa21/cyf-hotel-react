import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  React.useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {/* Items 5 and 6 of the homework */}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
