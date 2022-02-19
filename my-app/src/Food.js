import React from "react";
import { PropTypes } from "prop-types";

function Food(props){
    return(
<div>
      <h1 >{props.properthy}</h1>
      <h3>I love {props.name}</h3>
      <h5>{props.rating} de /5.0</h5>

</div>
    );
  }

  Food.propTypes={
      name:PropTypes.string.isRequired,
      properthy:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired

  };

  export default Food;