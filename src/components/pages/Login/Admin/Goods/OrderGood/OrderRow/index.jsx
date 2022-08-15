import React from 'react'
import SourceIcon from '@mui/icons-material/Source';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
function OrderRow({item}) {
    useEffect(()=>{

    },[])
  return (
    <Box width="100%" display="flex" justifyContent="center">
        <Box className="tayble-order-rows">
  <Box className="order-tayble-order">
    <SourceIcon className="order-tayble-view-icon"/>
  </Box>
  <Box className="order-tayble-order"> {item.id}</Box>
  <Box className="order-tayble-order">{item.card.length}</Box>
  <Box className="order-tayble-order">{item.userInfo[0].family}</Box>
  <Box className="order-tayble-order">{item.userInfo[0].name}</Box>
</Box>
    </Box>
  )
}

export default OrderRow