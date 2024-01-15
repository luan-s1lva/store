import React from "react";
import { ReactComponent as FullStar } from "../../assets/stars/FullStar.svg";
import { ReactComponent as HalfStar } from "../../assets/stars/HalfStar.svg";
import { ReactComponent as EmptyStar } from "../../assets/stars/EmptyStar.svg";
import * as S from "./styles";

const RatingStars = ({ rate }) => {
  let arr = [];

  for (let i = 1; i < 6; i++) {
    if (rate >= i) {
      arr.push(<FullStar />);
    } else {
      arr.push(<EmptyStar />);
    }
  }

  return (
    <>
      <S.Container>
        {arr.map((item) => (
          <>{item}</>
        ))}
      </S.Container>
    </>
  );
};

export default RatingStars;
