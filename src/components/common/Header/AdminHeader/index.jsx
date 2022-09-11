import React from "react";
import "./adminHeader.Module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  upAllGoods,
  upAllOrders,
  upAllStore,
  upToDateAllGoodsType,
  upToDateDashbourdType,
} from "../../../../redux/slice/slice";
import { useSelector } from "react-redux";
function AdminHeader() {
  const navigate = useNavigate();
  const [state, setState] = useState("none");
  const dispatch = useDispatch();
  const { dashbourdType } = useSelector((state) => state.dashbourdType);
  const { AllGoodsType } = useSelector((state) => state.AllGoodsType);
  const { AllStore } = useSelector((state) => state.AllStore);
  const { AllGoods } = useSelector((state) => state.AllGoods);
  const { AllOrders } = useSelector((state) => state.AllOrders);

  //upAllGoods
  const dashbourdCMP = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(upToDateDashbourdType(false));
    dispatch(upToDateAllGoodsType(true));
    dispatch(upAllStore(true));
    dispatch(upAllGoods(true));
    navigate("/AminLogIn");
  };
  const goodsCMP = function (e) {
    e.stopPropagation();
    setState("flex!important");
    dispatch(upToDateDashbourdType(true));
    dispatch(upToDateAllGoodsType(false));
    dispatch(upAllStore(true));
    dispatch(upAllGoods(true));
    navigate("/Goods");
  };
  const AllgoodsCMP = (e) => {
    e.stopPropagation();
    setState("flex!important");
    dispatch(upToDateDashbourdType(true));
    dispatch(upToDateAllGoodsType(false));
    dispatch(upAllStore(true));
    dispatch(upAllGoods(false));
    dispatch(upAllOrders(true));
    navigate("/Goods");
  };
  const orderCMP = function (e) {
    e.stopPropagation();
    navigate("/OrderGood");
    setState("flex!important");
    dispatch(upToDateDashbourdType(true));
    dispatch(upToDateAllGoodsType(false));
    dispatch(upAllGoods(true));
    dispatch(upAllStore(true));
    dispatch(upAllOrders(false));
  };
  const storeCMP = (e) => {
    e.stopPropagation();
    navigate("/StoreGood");
    setState("flex!important");
    dispatch(upToDateDashbourdType(true));
    dispatch(upToDateAllGoodsType(false));
    dispatch(upAllGoods(true));
    dispatch(upAllOrders(true));
    dispatch(upAllStore(false));
  };

  const accountCMP = (e) => {
    e.stopPropagation();
    navigate("/AccountAdmin");
    dispatch(upToDateDashbourdType(true));
    dispatch(upToDateAllGoodsType(true));
    dispatch(upAllStore(true));
    dispatch(upAllGoods(true));
  };
  return (
    <Box>
      <Box className="adminGoods">
        <Box className="adminGoods-title-Box-exit">
          <Typography className="adminGoods-title">خروج از حساب </Typography>
        </Box>
        <Box onClick={accountCMP} className="adminGoods-title-Box">
          <Typography className="adminGoods-title">حساب کاربری</Typography>{" "}
        </Box>
        <Box onClick={goodsCMP} width="23%">
          {AllGoodsType === false ? (
            <Box className="admin-goods-active">
              <Typography className="adminGoods-title">کالاها </Typography>{" "}
              <Box display="flex" className="allGoods">
                <Box onClick={orderCMP} width="50%">
                  {AllOrders === false ? (
                    <Box className="SubGoods-order-active">
                      <Typography className="adminGoods-title-pishkhan">
                        سفارش ها
                      </Typography>
                    </Box>
                  ) : (
                    <Box className="SubGoods-order">
                      <Typography className="adminGoods-title-pishkhan">
                        سفارش ها
                      </Typography>
                    </Box>
                  )}
                </Box>
                {/* <Box onClick={storeCMP} width="36%">
              {AllStore===false?
                <Box className="SubGoods-stores-active">
                <Typography className="adminGoods-title-pishkhan">
                  موجودی و قیمت ها
                </Typography>
                </Box>:
                <Box className="SubGoods-stores">
                <Typography className="adminGoods-title-pishkhan">
                  موجودی و قیمت ها
                </Typography>
                </Box>
              }
              </Box> */}
                <Box onClick={AllgoodsCMP} width="50%">
                  {AllGoods === false ? (
                    <Box
                      
                      className=" SubGoods-allGoods-active"
                    >
                      <Typography className="adminGoods-title-pishkhan">
                        همه کالاها
                      </Typography>
                    </Box>
                  ) : (
                    <Box onClick={AllgoodsCMP} className=" SubGoods-allGoods">
                      <Typography className="adminGoods-title-pishkhan">
                        همه کالاها
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className="admin-goods">
              <Typography className="adminGoods-title">کالاها </Typography>{" "}
              <Box display="none" className="allGoods">
                <Box onClick={goodsCMP} className=" SubGoods-allGoods">
                  <Typography className="adminGoods-title-pishkhan">
                    همه کالاها
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <Box onClick={dashbourdCMP} width="23%">
          {dashbourdType === false ? (
            <Box className="adminGoods-title-Box-pishkhan-active">
              <Typography className="adminGoods-title-pishkhan">
                پیشخوان
              </Typography>
            </Box>
          ) : (
            <Box className="adminGoods-title-Box-pishkhan">
              <Typography className="adminGoods-title-pishkhan">
                پیشخوان
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AdminHeader;
