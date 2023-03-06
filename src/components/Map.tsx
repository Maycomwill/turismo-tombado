import React, { ReactNode } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../styles/marker.css";

interface IMapProps {
  location?: {
    LatLng: {
      lat: number;
      lng: number;
    };
    nome: string;
  };
  children: ReactNode;
}

export const center = {
  lat: -8.0622,
  lng: -34.8708,
};

export function Map({ location, children }: IMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDADT7-NDOLB5-4JcyGQ3R2hhamxUxj3pc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className="w-full h-[350px] px-2">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={15}
          options={{
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
          {children}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
