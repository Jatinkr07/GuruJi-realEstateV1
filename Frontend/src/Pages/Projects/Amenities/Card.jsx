/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Card, Col, Row } from "antd";
import {
  GiElevator, // for lift
  GiSecurityGate, // for security
  GiElectric,
  GiPartyPopper, // for club
  GiCctvCamera, // for cctv
  GiRocketFlight, // for high speed elevator
  GiGymBag, // for gym
  GiFamilyHouse, // for multi-purpose hall
  GiMeditation, // for yoga deck
  GiFruitTree,
} from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { LuParkingMeter } from "react-icons/lu";
import { CiFootball } from "react-icons/ci";

export const amenitiesList = [
  { name: "lift", label: "Lift", icon: <GiElevator /> },
  { name: "Parking", label: "Parking", icon: <LuParkingMeter /> },
  { name: "security", label: "Security", icon: <GiSecurityGate /> },
  { name: "power backup", label: "Power Backup", icon: <GiElectric /> },
  { name: "swimming pool", label: "Swimming Pool", icon: <TbSwimming /> },
  { name: "club", label: "Club", icon: <GiPartyPopper /> },
  { name: "child play area", label: "Play Area", icon: <CiFootball /> },
  { name: "cctv", label: "24/7 CCTV", icon: <GiCctvCamera /> },
  { name: "garden", label: "Garden", icon: <GiFruitTree /> },
  {
    name: "high speed elivator",
    label: "High Speed Lift",
    icon: <GiRocketFlight />,
  },
  { name: "Gym", label: "Gym", icon: <GiGymBag /> },
  {
    name: "Multi - purpose hall",
    label: "Multi-purpose Hall",
    icon: <GiFamilyHouse />,
  },
  { name: "Yoga teck", label: "Yoga Deck", icon: <GiMeditation /> },
];

export const getAmenityDetails = (name) =>
  amenitiesList.find((a) => a.name === name) || {
    label: name,
    icon: null,
    name,
  };

const AmenitiesCards = ({ amenities }) => {
  return (
    <Row gutter={[8, 8]}>
      {amenities.map((amenity) => {
        const { label, icon } = getAmenityDetails(amenity);
        return (
          <Col key={amenity}>
            <Card
              size="small"
              style={{ textAlign: "center", width: 100 }}
              bodyStyle={{ padding: "8px" }}
            >
              {icon} <br />
              <span>{label}</span>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AmenitiesCards;
