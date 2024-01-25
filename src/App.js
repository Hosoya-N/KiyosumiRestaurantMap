import './App.css';
import TitleBar from "./TitleBar";
import FilterInput from "./FilterInput"
import ShopMap from "./ShopMap";
import ShopList from "./ShopList";
import { React, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

const App = () => {

  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(); 
  const [minStar, setMinStar] = useState(0);

  useEffect(() => {  
    // APIをfetchする(呼び出す)
    fetch("https://api.sssapi.app/NGWO7DTt7p1N6Ywui1JUm", { method: "GET" })
    // レスポンスのデータ形式をjsonに設定
    .then((res) => res.json())
    // APIから渡されるレスポンスデータ(data)をstateにセットする
    .then((data) => {
    setShops(data);
    })  
  }, []);  

  return (
    <Grid container>
      <Grid item={true} xs={12}>
        <TitleBar/>
      </Grid>

      <Grid item={true} xs={6} >
        <FilterInput setMinStar={setMinStar} />
      </Grid>
      
      <Grid item={true} xs={8}>
        <ShopMap shops={shops} selectedShop={selectedShop} setSelectedShop={setSelectedShop} minStar={minStar}/>
      </Grid>
      <Grid item={true} xs={4}>
        <ShopList shops={shops}  selectedShop={selectedShop} setSelectedShop={setSelectedShop} minStar={minStar}/>
      </Grid>
    </Grid>
    
 )
}

export default App;