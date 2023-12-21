import React from "react";
import styled from "styled-components";
import NotFoundIcon from "../assets/images/404-error.jpg";

function CityNotFound() {
  const NotFoundImg = styled.img`
    width: 300px;
    height: 300px;
  `;
  const CityNotFoundLabel = styled.p`
    color: white;
    font-weight: bold;
    font-size: 22px;
  `;
  const CLickHereLabel = styled.span`
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  `;
  function handleRefresh() {
    window.location.reload();
  }
  return (
    <>
      <NotFoundImg src={NotFoundIcon} alt={"404 not found"} />
      <CityNotFoundLabel>
        Sorry for the incovinience, Please{" "}
        <CLickHereLabel onClick={() => handleRefresh()}>
          Click Here
        </CLickHereLabel>
      </CityNotFoundLabel>
    </>
  );
}

export default CityNotFound;
