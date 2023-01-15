import * as React from "react";

export const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="headerParagraph">{props.title}</h1>
        <a href={props.buttonUrlofMovetoPost}>{props.buttonNameofMovetoPost}</a>
      </header>
    </div>
  );
};
