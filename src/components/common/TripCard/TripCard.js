import React from "react";
import {
  LinkWrapper,
  AnchorWrapper,
  Card,
  Image,
  DetailsContainer,
  Dates,
  Title,
  Description
} from "./TripCardStyles";

const TripCard = ({ trip }) => {
  const WrapperComponent = ({ trip, children }) => {
    if (trip.route) {
      return <LinkWrapper to={trip.route}>{children}</LinkWrapper>;
    }

    return (
      <AnchorWrapper href={trip.link} target="_blank" rel="noopener">
        {children}
      </AnchorWrapper>
    );
  };

  return (
    <WrapperComponent trip={trip}>
      <Card>
        <Image src={trip.coverImage} />
        <DetailsContainer>
          <Dates>{trip.dates}</Dates>
          <Title>{trip.name}</Title>
          <Description>{trip.description}</Description>
        </DetailsContainer>
      </Card>
    </WrapperComponent>
  );
};

export default TripCard;
