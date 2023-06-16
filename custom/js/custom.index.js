$

const citymap = {
  Rodriguez : {
    center: { lat: 14.745659, lng: 121.145206  },
    population: 3,
  },
  e1k2 : {
    center: { lat: 14.741875, lng: 121.145407 },
    population: 1,
  },
  e1k: {
    center: { lat: 14.740755, lng: 121.143142 },
    population: 2,
  },
  Anakpawis: {
    center: { lat: 14.738845, lng: 121.145471 },
    population: 2,
  },
  eyellow : {
    center: { lat: 14.743134, lng: 121.144507 },
    population: 0.5,
  },
  e1e: {
    center: { lat: 14.744482, lng: 121.140153 },
    population: 3,
  },
  e1b: {
    center: { lat: 14.739209, lng: 121.137818 },
    population: .5,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 14.742120, lng: 121.143960 },
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
  }
}

window.initMap = initMap;