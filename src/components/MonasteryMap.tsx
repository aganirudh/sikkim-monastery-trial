import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default marker paths (Vite bug)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const monasteries = [
  {
    name: "Rumtek Monastery",
    coords: [27.3256, 88.6115],
    description: "Seat of the Karmapa, rich murals, golden stupa",
    town: "Gangtok",
    travelTime: "1 hour from Gangtok",
  },
  {
    name: "Pemayangtse Monastery",
    coords: [27.2814, 88.2396],
    description: "17th-century monastery with Himalayan views",
    town: "Pelling",
    travelTime: "30 mins from Pelling",
  },
];

export default function MonasteryMap() {
  useEffect(() => {
    const map = L.map("map").setView([27.5, 88.5], 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    monasteries.forEach((m) => {
      const marker = L.marker(m.coords).addTo(map).bindPopup(m.name);

      marker.on("click", () => {
        const panel = document.getElementById("info-panel");
        if (panel) {
          panel.innerHTML = `
            <h3 class="font-bold text-lg">${m.name}</h3>
            <p>${m.description}</p>
            <p><strong>Nearest town:</strong> ${m.town}</p>
            <p><strong>Travel time:</strong> ${m.travelTime}</p>
          `;
        }
      });
    });
  }, []);

  return (
    <div className="flex gap-4">
      <div id="map" style={{ height: "500px", width: "70%" }}></div>
      <div
        id="info-panel"
        className="p-4 border rounded-md w-1/3 bg-white shadow"
      >
        <p>Click a monastery marker to see details here.</p>
      </div>
    </div>
  );
}
