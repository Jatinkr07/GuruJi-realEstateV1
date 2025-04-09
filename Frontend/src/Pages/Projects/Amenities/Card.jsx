/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Card, Col, Row } from "antd";
import {
  GiElevator, // for lift
  GiSecurityGate, // for security
  GiElectric, // for power backup
  GiPartyPopper, // for club, club house, party hall
  GiCctvCamera, // for cctv, 24x7 security
  GiRocketFlight, // for high speed elevator
  GiGymBag, // for gym, gymnasium
  GiFamilyHouse, // for multi-purpose hall, entrance lobby
  GiMeditation, // for yoga deck
  GiFruitTree, // for garden
  GiFire, // for fire sprinklers
  GiRoad, // for internal roads and footpaths
  GiWaterDrop, // for sewage treatment, solar water heating
  GiBeachBucket, // for beach volleyball court
  GiTennisRacket,
 // for badminton court
  GiGlassShot, // for bar/chill out lounge
  GiStreetLight, // for street lighting
  GiSolarPower, // for solar water heating (alternative)
  GiShop, // for utility shops, shopping mall
  GiHairStrands, // for salon (closest match)
  GiForkKnifeSpoon, // for restaurant
  GiBank, // for atm
  GiChessKing, // for indoor games
  GiHealthNormal, // for hospital
  GiSchoolBag, // for school
  GiPerson, // for maintenance staff
  GiShield, // for gated community
  GiIndianPalace, // for vastu compliant (symbolic)
} from "react-icons/gi";


import { TbSwimming } from "react-icons/tb";
import { LuParkingMeter } from "react-icons/lu";
import { CiFootball } from "react-icons/ci";

export const amenitiesList = [
  { name: "lift", label: "Lift", icon: <GiElevator style={{ fontSize: "36px" }} /> },
  { name: "Parking", label: "Parking", icon: <LuParkingMeter style={{ fontSize: "36px" }} /> },
  { name: "security", label: "Security", icon: <GiSecurityGate style={{ fontSize: "36px" }} /> },
  { name: "power backup", label: "Power Backup", icon: <GiElectric style={{ fontSize: "36px" }} /> },
  { name: "swimming pool", label: "Swimming Pool", icon: <TbSwimming style={{ fontSize: "36px" }} /> },
  { name: "club", label: "Club", icon: <GiPartyPopper style={{ fontSize: "36px" }} /> },
  { name: "child play area", label: "Play Area", icon: <CiFootball style={{ fontSize: "36px" }} /> },
  { name: "cctv", label: "24/7 CCTV", icon: <GiCctvCamera style={{ fontSize: "36px" }} /> },
  { name: "garden", label: "Garden", icon: <GiFruitTree style={{ fontSize: "36px" }} /> },
  { name: "high speed elivator", label: "High Speed Lift", icon: <GiRocketFlight style={{ fontSize: "36px" }} /> },
  { name: "Gym", label: "Gym", icon: <GiGymBag style={{ fontSize: "36px" }} /> },
  { name: "Multi - purpose hall", label: "Multi-purpose Hall", icon: <GiFamilyHouse style={{ fontSize: "36px" }} /> },
  { name: "Yoga teck", label: "Yoga Deck", icon: <GiMeditation style={{ fontSize: "36px" }} /> },
  { name: "salon", label: "Salon", icon: <GiHairStrands style={{ fontSize: "36px" }} /> },
  { name: "restaurant", label: "Restaurant", icon: <GiForkKnifeSpoon style={{ fontSize: "36px" }} /> },
  { name: "gated community", label: "Gated Community", icon: <GiShield style={{ fontSize: "36px" }} /> },
  { name: "utility shops", label: "Utility Shops", icon: <GiShop style={{ fontSize: "36px" }} /> },
  { name: "internal roads and footpaths", label: "Internal Roads", icon: <GiRoad style={{ fontSize: "36px" }} /> },
  { name: "sewage treatment", label: "Sewage Treatment", icon: <GiWaterDrop style={{ fontSize: "36px" }} /> },
  { name: "atm", label: "ATM", icon: <GiBank style={{ fontSize: "36px" }} /> },
  { name: "fire sprinklers", label: "Fire Sprinklers", icon: <GiFire style={{ fontSize: "36px" }} /> },
  { name: "bar/chill out lounge", label: "Bar/Lounge", icon: <GiGlassShot style={{ fontSize: "36px" }} /> },
  { name: "gymnasium", label: "Gymnasium", icon: <GiGymBag style={{ fontSize: "36px" }} /> },
  { name: "club house", label: "Club House", icon: <GiPartyPopper style={{ fontSize: "36px" }} /> },
  { name: "vastu complaint", label: "Vastu Compliant", icon: <GiIndianPalace style={{ fontSize: "36px" }} /> },
  { name: "street lightning", label: "Street Lighting", icon: <GiStreetLight style={{ fontSize: "36px" }} /> },
  { name: "entrance lobby", label: "Entrance Lobby", icon: <GiFamilyHouse style={{ fontSize: "36px" }} /> },
  { name: "school", label: "School", icon: <GiSchoolBag style={{ fontSize: "36px" }} /> },
  { name: "hospital", label: "Hospital", icon: <GiHealthNormal style={{ fontSize: "36px" }} /> },
  { name: "shopping mall", label: "Shopping Mall", icon: <GiShop style={{ fontSize: "36px" }} /> },
  { name: "maintaince staff", label: "Maintenance Staff", icon: <GiPerson style={{ fontSize: "36px" }} /> },
  { name: "24 x 7 security", label: "24x7 Security", icon: <GiCctvCamera style={{ fontSize: "36px" }} /> },
  { name: "indoor games", label: "Indoor Games", icon: <GiChessKing style={{ fontSize: "36px" }} /> },
  { name: "beach volleyball court", label: "Beach Volleyball", icon: <GiBeachBucket style={{ fontSize: "36px" }} /> },
  { name: "badminton court", label: "Badminton Court", icon: <GiTennisRacket style={{ fontSize: "36px" }} /> },
  { name: "party hall", label: "Party Hall", icon: <GiPartyPopper style={{ fontSize: "36px" }} /> },
  { name: "solar water heating", label: "Solar Water Heating", icon: <GiSolarPower style={{ fontSize: "36px" }} /> },
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