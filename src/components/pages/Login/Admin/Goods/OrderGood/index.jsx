import React, { useState } from "react";
import "./orderGoods.Module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./../../../../../common/Header/AdminHeader/index";
import OrderRow from "./OrderRow";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  upDetailsOrdersStore,
  upOrderAdmin,
  upSelectOp,
  upStoreOrderAdmin,
} from "../../../../../../redux/slice/slice";
import DetailsOrder from "./OrderRow/ViewOrderDetail/index";
import { Pagination } from '@mui/material';
function OrderGood() {
  const handlePaginate=(e,p)=>{
    setPage(p);
  }
  const { DetailsOrders } = useSelector((state) => state.DetailsOrders);
  const {SelectOp}=useSelector(state=>state.SelectOp)
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const { OrderAdmin } = useSelector((state) => state.OrderAdmin);
  const { storeOrderAdmin } = useSelector((state) => state.storeOrderAdmin);
  const count=Math.ceil(storeOrderAdmin.length/5)
  const [page, setPage] = useState(1);
  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/orderList")
      .then((item) => disPatch(upOrderAdmin(item.data)));
  }, []);
    useEffect(()=>{
      if(SelectOp==="Success"){
        disPatch(upStoreOrderAdmin(OrderAdmin.filter(item=>item.deliver==="1")))
      }else if(SelectOp==="Delivering"){
        disPatch(upStoreOrderAdmin(OrderAdmin.filter(item=>item.deliver==="0")))
      }else{
        disPatch(upStoreOrderAdmin(OrderAdmin))
      }
    },[SelectOp])
   

  return (
    <Box>
      <Box display="block">
        <AdminHeader />
      </Box>
      {DetailsOrders && <DetailsOrder />}

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className="tayble-order">
          <Box className="order-tayble-order-status">
          {/* select section for choose the status of product */}
            <select
              onChange={(e) => {return(
                disPatch(upSelectOp(e.target.value))
            
              )
              }}
              className="Select-OrderList"
            >
              <option  value="All">همه موارد</option>
              <option value="Success">تحویل داده شده ها</option>
              <option value="Delivering">ارسال شده ها</option>
            </select>
          </Box>
          <Box className="order-tayble-order">نمایش</Box>
          <Box className="order-tayble-order">تاریخ سفارش</Box>
          <Box className="order-tayble-order">تعداد کالا</Box>
          <Box className="order-tayble-order">نام خانوادگی</Box>
          <Box className="order-tayble-order">نام کاربر</Box>
        </Box>
        {paginate(storeOrderAdmin, 5, page)?.map((item) => (
          <OrderRow item={item} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" marginTop="2rem">

      <Pagination color="primary" page={page} onChange={handlePaginate}  defaultPage={1}  count={count} variant="outlined" shape="rounded" />
      </Box>
    </Box>
  );
}

export default OrderGood;
