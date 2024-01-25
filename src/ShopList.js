
import { React, useState}  from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

export default function ShopList(props) {
  const shops = props.shops
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel, shop) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    props.setSelectedShop(isExpanded ? shop : null);
  };

  return (
    <div>
      <br/>
      <h5>ショップリスト</h5>
      {shops
      .filter((shop) => 
        shop.stars >= props.minStar)
      .map((shop) => (
        <Accordion key={shop.No} expanded={expanded === shop.No} onChange={handleChange(shop.No, shop)} sx={{ width: '80%', fontSize:14}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <RestaurantOutlinedIcon />　{shop.name}
          </AccordionSummary>
          <AccordionDetails>
            営業時間：{shop.open}-{shop.close}<br/>
            定休日：{shop.holiday}<br/>
            電話番号：{shop.phone}<br/>
            評価：{shop.stars}<br/>
            {shop.memo}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}


