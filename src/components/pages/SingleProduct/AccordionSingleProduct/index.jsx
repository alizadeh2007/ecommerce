import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SinglePageAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ضمانت ما</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ما سلامت کالای شما را تضمین می کنیم. در صورتی که پس از دریافت کالا
            ایرادی در کالا در حین جابجایی به وجود آید، ما موظف هستیم به پرداخت
            دو برادر قیمت محصول شما.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ضمنانت شما</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            اطلاعات ورود شما در هنگام خرید را با دقت تکمیل نمائید که در صورت
            مشکل همکاران ما بتوانند با شما تماس بگیرند. کالا شما قابل بازگشت
            نیست پس از خرید خود مطمئن شوید.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
