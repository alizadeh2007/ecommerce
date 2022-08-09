import "./selectCMP.Module.css";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from 'react-redux';
import { upDeleteModalIcon, upeditCard, upModalEdit, upModalView, upviewCard } from "../../../../../../redux/slice/slice";
import OpenViewProduct from './../ViewProduct/index';
function SelectCMD({item}) {
  const disPatch=useDispatch()

  const openModalView = () => {
    disPatch(upModalView(true));
    disPatch(upviewCard(item))
  };
  const openModalEdit=()=>{
    disPatch(upModalEdit(true));
    disPatch(upeditCard(item))
  }
  const openModalDelete=()=>{
    disPatch(upDeleteModalIcon(true))
  }
  return (
    <Box width="100%" display="flex" justifyContent="center">

                <Box className="Goods-sub-tyble">
            <Box className="Goods-tyble-rows-delete">
              <Box>
                <DeleteIcon onClick={openModalDelete} className="icon-goods-delete" />
              </Box>
              <Box onClick={openModalEdit}>
                <BorderColorIcon className="icon-goods-edit" />
              </Box>
              <Box onClick={openModalView}>
                <VisibilityIcon className="icon-goods-view" />
              </Box>
            </Box>
            <Box className="Goods-tyble-rows"> {item.categories}</Box>
            <Box className="Goods-tyble-rows">{item.title}</Box>
            <Box className="Goods-tyble-rows-pic">
              <img className="image-product-eyeModal" src={item.imgURL} />
            </Box>
          </Box>
    </Box>
  )
}

export default SelectCMD;