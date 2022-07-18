import React from "react";
import { Box } from "@mui/material";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ComputerIcon from '@mui/icons-material/Computer';
import FlatwareIcon from '@mui/icons-material/Flatware';
import "./iconpages.style.css";
function IconPages() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      gap="4rem"
      marginTop="2rem"
    >
      <Box className="iconsCircle">
        <SmartphoneIcon className="icon"></SmartphoneIcon>
      </Box>
      <Box className="iconsCircle">
        <DriveEtaIcon className="icon"></DriveEtaIcon>
      </Box>
      <Box className="iconsCircle">
        <PedalBikeIcon className="icon"></PedalBikeIcon>
      </Box>
      <Box className="iconsCircle">
        <ChildFriendlyIcon className="icon"></ChildFriendlyIcon>
      </Box>
      <Box className="iconsCircle">
        <PedalBikeIcon className="icon"></PedalBikeIcon>
      </Box>{" "}
      <Box className="iconsCircle">
        <FlatwareIcon className="icon"></FlatwareIcon>
      </Box>{" "}
      <Box className="iconsCircle">
        <ComputerIcon className="icon"></ComputerIcon>
      </Box>{" "}
      <Box className="iconsCircle">
        <PedalBikeIcon className="icon"></PedalBikeIcon>
      </Box>
    </Box>
  );
}

export default IconPages;
