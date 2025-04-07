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
  {
    name: "lift",
    label: "Lift",
    icon: <GiElevator style={{ fontSize: "36px" }} />,
  },
  {
    name: "Parking",
    label: "Parking",
    icon: <LuParkingMeter style={{ fontSize: "36px" }} />,
  },
  {
    name: "security",
    label: "Security",
    icon: <GiSecurityGate style={{ fontSize: "36px" }} />,
  },
  {
    name: "power backup",
    label: "Power Backup",
    icon: <GiElectric style={{ fontSize: "36px" }} />,
  },
  {
    name: "swimming pool",
    label: "Swimming Pool",
    icon: <TbSwimming style={{ fontSize: "36px" }} />,
  },
  {
    name: "club",
    label: "Club",
    icon: <GiPartyPopper style={{ fontSize: "36px" }} />,
  },
  {
    name: "child play area",
    label: "Play Area",
    icon: <CiFootball style={{ fontSize: "36px" }} />,
  },
  {
    name: "cctv",
    label: "24/7 CCTV",
    icon: <GiCctvCamera style={{ fontSize: "36px" }} />,
  },
  {
    name: "garden",
    label: "Garden",
    icon: <GiFruitTree style={{ fontSize: "36px" }} />,
  },
  {
    name: "high speed elivator",
    label: "High Speed Lift",
    icon: <GiRocketFlight style={{ fontSize: "36px" }} />,
  },
  {
    name: "Gym",
    label: "Gym",
    icon: <GiGymBag style={{ fontSize: "36px" }} />,
  },
  {
    name: "Multi - purpose hall",
    label: "Multi-purpose Hall",
    icon: <GiFamilyHouse style={{ fontSize: "36px" }} />,
  },
  {
    name: "Yoga teck",
    label: "Yoga Deck",
    icon: <GiMeditation style={{ fontSize: "36px" }} />,
  },
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
              style={{ textAlign: "center", width: 120 }}
              bodyStyle={{
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 80,
              }}
            >
              <span style={{ marginBottom: "4px" }}>{label}</span>
              {icon}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AmenitiesCards;
