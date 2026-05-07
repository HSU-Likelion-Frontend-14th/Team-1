import { useState, useEffect } from 'react';
import './App.css';
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import MarkerIcon from "./assets/markerIcon.svg";

function App() {
  const DEFAULT_LOCATION = { lat: 37.582, lng: 127.011 };

  const [center, setCenter] = useState(DEFAULT_LOCATION);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCenter({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => {
          console.warn("위치 권한 거부됨. 기본 위치로 설정.");
        }
      );
    }
  }, []);

  // 지도 클릭 시 마커 추가
  const handleMapClick = (_map, mouseEvent) => {
    const lat = mouseEvent.latLng.getLat();
    const lng = mouseEvent.latLng.getLng();

    const name = prompt("장소이름을 입력하세요");
    if(!name) return;

    const newMarker = {
      id: Date.now(),
      lat,
      lng,
      name,
    };

    setMarkers((prev) => [...prev, newMarker]);
    setSelectedMarker(null); // 오버레이 닫기
  };

  // 마커 클릭 시 오버레이 표시
  const handleMarkerClick = (marker) => {
    setSelectedMarker((prev) => (prev?.id === marker.id ? null : marker));
  };

  return (
    <div className="container">
      <Map
        center={center}
        className="map"
        onClick={handleMapClick}
      >
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            image={{ src: MarkerIcon, size: { width: 30, height: 40 } }}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <CustomOverlayMap
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            yAnchor={2.2}
          >
            <div className="overlay">
              <button
                className="overlay-close"
                onClick={() => setSelectedMarker(null)}
              >
              </button>
              <p>📍 {selectedMarker.name}</p>
              <p>위도: {selectedMarker.lat.toFixed(5)}</p>
              <p>경도: {selectedMarker.lng.toFixed(5)}</p>
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </div>
  );
}

export default App;