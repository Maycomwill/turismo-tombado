import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../styles/marker.css";
import Pin from "../assets/Pin.svg";

interface IMapProps {
  center: { lat: number; lng: number };
  nome: string;
}

export function Map({ center, nome }: IMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDADT7-NDOLB5-4JcyGQ3R2hhamxUxj3pc",
  });


  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds({
      lat: center.lat,
      lng: center.lng,
    });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className="max-w-[1000px] w-full h-[500px] m-auto">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: center.lat, lng: center.lng }}
          zoom={15}
          options={{
            zoomControl: false,
            styles: [
              {
                elementType: "labels",
                featureType: "poi.*",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            icon={{
              url: Pin,
              scale: 0.5,
            }}
            position={{ lat: center.lat, lng: center.lng }}
            options={{
              label: {
                text: nome,
                className: "point-marker",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
