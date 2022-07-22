import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="conditiontitles">
            قوانین عمومی سایت{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="subConditiontitles">
            کلیه ی اصول و رویه های سایت منطبق با قوانین جمهوری اسلامی ایران می
            باشد متعاقبا کاربر نیز ملزم به رعایت قوانین مرتبط با کاربر می باشد
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="conditiontitles" fontWeight="bold">
            تعریف مشتری یا کاربر
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="subConditiontitles">
            مشتری فردی است که با پرداخت پول، ارزش پیشنهادی یک کسب‌وکار را
            خریداری می‌کند. تمام تلاش استارتاپ‌ها و کسب‌وکارهای اینترنتی در
            راستای تبدیل کاربر به مشتری است. جریان درآمدی اصلی هر کسب‌وکار از
            مشتری آغاز می‌شود و تداوم حیات آن نیز در گرو وجود مشتری خواهد بود.
            برای همین جذب مشتری و ایجاد یک رابطه‌ بلندمدت با او، مهم‌ترین هدف هر
            شرکتی است.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="conditiontitles">تعریف فروشنده </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="subConditiontitles">
            فروشنده به شخصی گفته میشود که بتواند یک محصول را با شرایط مشخص شده
            برای آن ، در بازار هدف، به یک شخص که به آن محصول نیاز دارد و یا بعدا
            به آن نیاز خواهد اشت ارائه دهد و در ازای آن مبلغ از پیش تعیین شده را
            دریافت کند.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="conditiontitles"> نظرات کاربران</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="subConditiontitles">
            با هدف افزایش کیفیت و تجربه ی کاربر از محصول بخش نظرات را به صورت
            آزاد برقرار کرده ایم. تنها نظراتی که چهارچوب اخلاقی را رعایت نکرده
            اند مابفی تایید می شود.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
