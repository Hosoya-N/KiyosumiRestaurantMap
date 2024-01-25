
import React from "react";
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

export default function ShopMap(props) {
  const shops = props.shops
  const selectedShop = props.selectedShop
  const container = { width: "80%", height: "500px" };

  return (
    <div className="wrap">
      <LoadScript googleMapsApiKey={process.env.React_APP_GOOGLEMAPMAP_API_KEY}>
        <GoogleMap mapContainerStyle={container} center={{lat: 35.67856913411873, lng: 139.79639782394892}} zoom={15}>
          {shops
          .filter((shop) => shop.stars >= props.minStar)
          .map((marker) => (
            <MarkerF
              key={`${Number(marker.locationlat) * Number(marker.locationlng)}`}
              position={{
                lat: Number(marker.locationlat),
                lng: Number(marker.locationlng),
              }}
              onClick={() => {
                props.setSelectedShop(marker)
              }}
           />
          ))}

          {selectedShop ? (
            <InfoWindowF
              position={{
                lat: Number(selectedShop.locationlat),
                lng: Number(selectedShop.locationlng),
              }}
              onCloseClick={() => {
                props.setSelectedShop(null)
              }}
           >
             <div>{selectedShop.name}<br/>{selectedShop.memo}</div>
           </InfoWindowF>
          ) : null}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}


