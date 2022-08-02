import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uptodatOpenHereReportModal } from "../../../../../../redux/slice/slice";
import "./herebtn.Module.css";
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
export default function HereReport() {
  const dispatch = useDispatch();
  const { openHereReportModal } = useSelector(
    (state) => state.openHereReportModal
  );

  const handleClose = function () {
    dispatch(uptodatOpenHereReportModal(false));
  };

  return (
    <div>
      <Modal
        open={openHereReportModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Here">
          <Typography
            className="HereBtnTitle HereBtnTitle-Parent"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            قوانین نظرات{" "}
          </Typography>
          <Typography
            className="HereBtn"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            توجه داشته باشید کلیه اصول و رویه‏‌های انتشارات جنگل منطبق با قوانین
            جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق
            مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مربوطه است.
            در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌ها تغییری ایجاد شود،
            در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که
            استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.{" "}
          </Typography>
          <Typography className="HereBtnTitle" marginTop="1rem!important">
            قوانین نظرات کاربران
          </Typography>
          <Typography className="HereBtn">
            ایجاد هرگونه وبسایت نامتعارف شامل هرگونه توهین و فحاشی به افراد (به
            خصوص سران کشور)، متون سیاسی و غیر اخلاقی، مخل نظم عمومی، مخل امنیی
            ملی و خلاف عرف ممنوع می‌باشد و به محض مشاهده دسترسی کاربر به سیستم
            مسدود می شود و وبسایت ایجاد شده از سیستم پرتال حذف می گردد. همچنین
            تمامی در صورت لزوم به پلیس فتا و مراجع قانونی ارجاع داده خواهد شد.
          </Typography>
          <Typography className="HereBtnTitle" marginTop="1rem!important">
            منشور اخلاقی{" "}
          </Typography>
          <Typography className="HereBtn">
          هر گاه در مطبوعات مطالبی مشتمل بر توهین یا افترا، یا خلاف واقع و یا انتقاد نسبت به شخص (‌اعم از حقیقی یا حقوقی) مشاهده شود،‌ذینفع حق دارد پاسخ آن را ظرف یک ماه کتباً برای همان نشریه بفرستد. و نشریه مزبور موظف است آن گونه توضیحات و پاسخها را در یکی از دو‌شماره‌ای که پس از وصول پاسخ منتشر می‌شود، در همان صفحه و ستون و یا همان حروف که اصل مطلب منتشر شده است، مجانی به چاپ برساند،‌به شرط آنکه جواب از دو برابر اصل تجاوز نکند و متضمن توهین و افترا به کسی نباشد.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
