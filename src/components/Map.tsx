import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../styles/marker.css";
import Pin from "../assets/Pin.svg";

interface IMapProps {
  center: { lat: number; lng: number };
  name: string;
  type: "primary" | "secondary";
}

export function Map({ center, name, type }: IMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBxTW9_fgLhofNn8ULI1vzZkeRoKsmpCDo",
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

  if(type == "primary"){
    return (
      <div className="flex items-center justify-center bg-blue-500 rounded-md">
        {isLoaded ? (
          <div className="w-full h-[500px] m-auto p-2">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: center.lat, lng: center.lng }}
              zoom={17}
              options={{
                zoomControl: true,
                styles: [
                  {
                    elementType: "labels",
                    featureType: "poi.*",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    elementType: "labels",
                    featureType: "road",
                    stylers: [{ visibility: "on" }],
                  },
                  {
                    elementType: "labels",
                    featureType: "poi.medical",
                    stylers: [{ visibility: "on" }],
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
                    text: name,
                    className: "point-marker",
                  },
                }}
              />
            </GoogleMap>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  } else{
    return (
      <div className="flex items-center justify-center bg-blue-500 rounded-md">
        {isLoaded ? (
          <div className="w-full h-[500px] m-auto p-2">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: center.lat, lng: center.lng }}
              zoom={17}
              options={{
                zoomControl: true,
              }}
            >
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
