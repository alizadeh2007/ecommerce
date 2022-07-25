import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeConditions } from "../../../../redux/slice/slice";
import SimpleAccordion from "./Accordion";
import "./conditions.style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Conditions() {
  const dispatch = useDispatch();
  const handleClose = function () {
    dispatch(changeTypeConditions(false));
  };
  const { openModalConditions } = useSelector(
    (state) => state.openModalConditions
  );
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalConditions}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalConditions}>
          <Box
            sx={style}
            display="flex"
            flexDirection="column"
            textAlign="rigth!important"
          >
            <Typography
              className="conditionfont"
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              شرایط و قوانین استفاده از سرویس‌ها و خدمات سایت
            </Typography>
            <Typography paddingBottom="1rem!important" id="transition-modal-description" sx={{ mt: 2 }}>
              کاربر گرامی لطفا موارد زیر را جهت استفاده بهینه از سایت با دقت
              مطالعه نمائید
              <SimpleAccordion ></SimpleAccordion>
              <Typography className="subConditiontitles">
                مطابق با قانون، اصل بر این است که مصرف کننده برای تحویل مواد
                غذایی یا سایر کالاهایی که مصرف روزانه دارند و کالاهایی که به
                سرعت قابلیت فساد و خرابی دارند، حق انصراف نخواهد داشت از جمله
                محصولات سوپرمارکتی (بجز محصولاتی که تاریخ انقضای آن به پایان
                رسیده و یا فاسد شده است).سایر کالاهایی که جهت حفظ حقوق مصرف
                کننده و یا مطابق با مقررات مربوطه، فاقد حق انصراف هستند عبارتند
                از: لباس زیر، محصولات آرایشی و بهداشتی، کارت هدیه، موتور سیکلت،
                کتاب صوتی، محتوای آموزشی، نرم افزار. همچنین کالاهایی که تنها طی
                مهلت 7 روز ضمانت بازگشت خواهند داشت عبارتند از: موبایل، مصنوعات
                طلا، نقره و طلای خام، فرش، کتاب و مجله، آلبوم موسیقی.
              </Typography>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
