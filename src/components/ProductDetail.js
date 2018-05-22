import React from "react";
import Reviews from "./Reviews";

function ProductDetail(props) {
  const { name, description, rating, imgUrl } = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" />);
  }
console.log('ProdDtl', props.product);
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{ width: "320px", height: "150px" }} src={imgUrl} alt="" />
        <div className="caption">
          <h4>
            <a href="#">{name}</a>
          </h4>
          <p>{description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">
            <Reviews product={props.product} />
          </p>
          <p>{stars}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
