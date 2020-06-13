import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img alt="" src={props.img} className="card-img-top" />
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <Card
        img="https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg"
        url="https://www.peoplemakeglasgow.com"
        city="Glasgow"
      />

      <Card
        img="https://www.visitmanchester.com/imageresizer/?image=%2Fdbimgs%2FMartyn%20skyline.jpg&action=FeaturedItems2x1"
        url="https://www.visitmanchester.com"
        city="Manchester"
      />

      <Card
        img="https://www.visitbritainshop.com/espana/~/media/images/subcategory/london-passes.ashx"
        url="https://www.visitlondon.com"
        city="London"
      />
    </div>
  );
};

export default TouristInfoCards;
