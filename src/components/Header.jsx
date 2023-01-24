import * as React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="headerParagraph">{props.title}</h1>
        <Link to={props.buttonUrlofMovetoPost}>{props.buttonNameofMovetoPost}</Link>
      </header>
    </div>
  );
};
