import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {/* Items 5 and 6 of the homework */}
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
