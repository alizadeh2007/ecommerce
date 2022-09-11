import React from "react";
import SourceIcon from "@mui/icons-material/Source";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {
  upDetailsOrders,
  upDetailsOrdersStore,
} from "../../../../../../../redux/slice/slice";

function OrderRow({ item }) {

  const { DetailsOrdersStore } = useSelector(
    (state) => state.DetailsOrdersStore
  );
  const disPatch = useDispatch();
  const handerDetails = () => {
    if (DetailsOrdersStore) {
      disPatch(upDetailsOrdersStore(item));
      disPatch(upDetailsOrders(true));
    }
  };
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box className="tayble-order-rows">
      <Box className="order-tayble-order-status">

                {item.deliver!=="1"?<LocalShippingIcon className="LocalShippingIcon"/>:<VerifiedUserIcon className="VerifiedUserIcon"/>}
      </Box>
        <Box className="order-tayble-order">
          <SourceIcon
            onClick={handerDetails}
            className="order-tayble-view-icon"
          />
        </Box>
        <Box className="order-tayble-order"> {item.id}</Box>
        <Box className="order-tayble-order">{item.card.length}</Box>
        <Box className="order-tayble-order">{item.userInfo[0].family}</Box>
        <Box className="order-tayble-order">{item.userInfo[0].name}</Box>
      </Box>
    </Box>
  );
}

export default OrderRow;
