/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

metroData = {
  "lines": [
    {
      "line": "A Line",
      "color": "Blue",
      "direction": 2,
      "stations": [
        "Pomona North", "La Verne/Fairplex", "San Dimas", "Glendora", "APU/Citrus College", 
        "Azusa Downtown", "Irwindale", "Duarte/City of Hope", "Monrovia", "Arcadia", 
        "Sierra Madre Villa", "Allen", "Lake", "Memorial Park", "Del Mar", "Fillmore", 
        "South Pasadena", "Highland Park", "Southwest Museum", "Heritage Square", 
        "Lincoln/Cypress", "Chinatown", "Union Station", "Little Tokyo/Arts District", 
        "Historic Broadway", "Grand Avenue Arts/Bunker Hill", "7th Street/Metro Center", 
        "Pico", "Grand/LATTC", "San Pedro Street", "Washington", "Vernon", "Slauson", 
        "Florence", "Firestone", "103rd Street/Watts Towers", "Willowbrook/Rosa Parks", 
        "Compton", "Artesia", "Del Amo", "Wardlow", "Willow Street", "Pacific Coast Highway", 
        "Anaheim Street", "5th Street", "1st Street", "Downtown Long Beach", "Pacific Avenue"
      ]
    },
    {
      "line": "B Line",
      "color": "Red",
      "direction": 2,
      "stations": [
        "North Hollywood", "Universal City/Studio City", "Hollywood/Highland", 
        "Hollywood/Vine", "Hollywood/Western", "Vermont/Sunset", "Vermont/Santa Monica", 
        "Vermont/Beverly", "Wilshire/Vermont", "Westlake/MacArthur Park", 
        "7th Street/Metro Center", "Pershing Square", "Civic Center/Grand Park", "Union Station"
      ]
    },
    {
      "line": "C Line",
      "color": "Green",
      "direction": 3,
      "stations": [
        "Norwalk", "Lakewood Boulevard", "Lynwood", "Willowbrook/Rosa Parks", "Avalon", 
        "Harbor Freeway", "Vermont/Athens", "Crenshaw", "Hawthorne/Lennox", 
        "Aviation/Imperial", "Aviation/Century", "LAX/Metro Transit Center"
      ]
    },
    {
      "line": "D Line",
      "color": "Purple",
      "direction": 1,
      "stations": [
        "Wilshire/Western", "Wilshire/Normandie", "Wilshire/Vermont", "Westlake/MacArthur Park", 
        "7th Street/Metro Center", "Pershing Square", "Civic Center/Grand Park", "Union Station"
      ]
    },
    {
      "line": "E Line",
      "color": "Gold",
      "direction": 1,
      "stations": [
        "Downtown Santa Monica", "17th Street/SMC", "26th Street/Bergamot", "Expo/Bundy", 
        "Expo/Sepulveda", "Westwood/Rancho Park", "Palms", "Culver City", 
        "La Cienega/Jefferson", "Expo/La Brea", "Farmdale", "Expo/Crenshaw", 
        "Expo/Western", "Expo/Vermont", "Expo Park/USC", "Jefferson/USC", 
        "LATTC/Ortho Institute", "Pico", "7th Street/Metro Center", 
        "Grand Avenue Arts/Bunker Hill", "Historic Broadway", "Little Tokyo/Arts District", 
        "Pico/Aliso", "Mariachi Plaza", "Soto", "Indiana", "Maravilla", 
        "East LA Civic Center", "Atlantic"
      ]
    },
    {
      "line": "K Line",
      "color": "Pink",
      "direction": 2,
      "stations": [
        "Expo/Crenshaw", "Martin Luther King Jr.", "Leimert Park", "Hyde Park", 
        "Fairview Heights", "Downtown Inglewood", "Westchester/Veterans", 
        "LAX/Metro Transit Center", "Aviation/Century", "Mariposa", "El Segundo", 
        "Douglas", "Redondo Beach"
      ]
    }
  ]
}

attractionData = [
  {
    "place": "Baldwin Hills Scenic Overlook",
    "imageURL": "https://tripjive.com/wp-content/uploads/2024/03/Baldwin-Hills-Scenic-Overlook-1-1068x610.jpg",
    "address": "6300 Hetzler Rd, Culver City, CA 90232",
    "latitude": 34.0182,
    "longitude": -118.38191,
    "website": "www.parks.ca.gov",
    "station": ["La Cienega/Jefferson"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Nature"],
    "characteristics": ["Snapworthy", "Walk-in"]
  },
  {
    "place": "Broad Museum",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nighttime_view_of_the_Broad_in_LA%2C_corner_dllu.jpg/3840px-Nighttime_view_of_the_Broad_in_LA%2C_corner_dllu.jpg",
    "address": "221 S Grand Ave, Los Angeles, CA 90012",
    "latitude": 34.0545,
    "longitude": -118.25018,
    "website": "www.thebroad.org",
    "station": ["Grand Ave Arts/Bunker Hill", "Pershing Square", "Civic Center/Grand Pk"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Arts", "Education"],
    "characteristics": ["Snapworthy"]
  },
  {
    "place": "California Science Center",
    "imageURL": "https://www.discoverlosangeles.com/sites/default/files/styles/max_1920x1920_kraken/public/business/california-science-center/w_1920-crm-la-image6_2_b1213374-97d1-4f43-96c42a41eafcbe98_c78529a9-67d4-4a6c-9430c01436b096e2.jpg.webp?itok=xrvfF4Ae&width=1024&height=768&fit=crop&quality=78&auto=webp",
    "address": "700 Exposition Park Dr, Los Angeles, CA 90037",
    "latitude": 34.01581,
    "longitude": -118.2861,
    "website": "www.californiasciencecenter.org",
    "station": ["Expo Park/USC"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Education"],
    "characteristics": ["Walk-in"]
  },
  {
    "place": "El Pueblo de Los Ángeles Historical Monument",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Equestrian_Statue_of_Antonio_Aguilar%2C_Plaza_de_Los_Angeles.jpg/1920px-Equestrian_Statue_of_Antonio_Aguilar%2C_Plaza_de_Los_Angeles.jpg",
    "address": "125 Paseo de la Plz, Los Angeles, CA 90012",
    "latitude": 34.05652,
    "longitude": -118.23876,
    "website": "elpueblo.lacity.org",
    "station": ["Union Station"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Education", "Market"],
    "characteristics": ["Snapworthy", "Walk-in"]
  },
  {
    "place": "Ferndell Nature Trail",
    "imageURL": "https://www.welikela.com/wp-content/uploads/2022/02/fern-dell-pond-morning-940x529.jpg",
    "address": "Fern Dell Dr, Los Angeles, CA 90027",
    "latitude": 34.10938,
    "longitude": -118.30769,
    "website": "www.laparks.org",
    "station": ["Hollywood/Western"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Nature"],
    "characteristics": ["Low traffic", "Snapworthy", "Walk-in"]
  },
  {
    "place": "Hollyhock House",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aline_Barnsdall_Complex_%289736565582%29.jpg/1920px-Aline_Barnsdall_Complex_%289736565582%29.jpg",
    "address": "4800 Hollywood Blvd, Los Angeles, CA 90027",
    "latitude": 34.09997,
    "longitude": -118.29443,
    "website": "www.hollyhockhouse.org",
    "station": ["Vermont/Sunset"],
    "admissionFee": 12,
    "studentDiscountFee": 6,
    "category": ["Arts"],
    "characteristics": ["Low traffic", "Snapworthy"]
  },
  {
    "place": "Grand Central Market",
    "imageURL": "https://grandcentralmarket.com/wp-content/uploads/2025/09/OK5_3338-2400x1600.jpg",
    "address": "317 S Broadway, Los Angeles, CA 90013",
    "latitude": 34.05087,
    "longitude": -118.24905,
    "website": "grandcentralmarket.com",
    "station": ["Pershing Square", "Historic Broadway"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Market"],
    "characteristics": ["Snapworthy", "Walk-in"]
  },
  {
    "place": "Hollywood Walk of Fame",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Walk-of-fame.jpg",
    "address": "Hollywood Boulevard, Vine St, Los Angeles, CA 90028",
    "latitude": 34.1016,
    "longitude": -118.32956,
    "website": "walkoffame.com",
    "station": ["Hollywood/Vine", "Hollywood/Highland"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Entertainment"],
    "characteristics": ["Walk-in"]
  },
  {
    "place": "Norton Simon Museum",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Norton_Simon_Museum_Pasadena_CA_%2851081778692%29.jpg/1920px-Norton_Simon_Museum_Pasadena_CA_%2851081778692%29.jpg",
    "address": "411 W Colorado Blvd, Pasadena, CA 91105",
    "latitude": 34.14634,
    "longitude": -118.15926,
    "website": "https://www.nortonsimon.org/",
    "station": ["Memorial Park"],
    "admissionFee": 20,
    "studentDiscountFee": 0,
    "category": ["Museum"],
    "characteristics": ["Low traffic", "Snapworthy", "Walk-in"]
  },
  {
    "place": "Plaza Mexico",
    "imageURL": "https://static.wixstatic.com/media/de13ff_f85606d30e1942b08de0c2d824288110~mv2.jpg/v1/fill/w_1443,h_1200,al_c,q_85,enc_avif,quality_auto/de13ff_f85606d30e1942b08de0c2d824288110~mv2.jpg",
    "address": "3100 E Imperial Hwy, Lynwood, CA 90262",
    "latitude": 33.92885,
    "longitude": -118.2139,
    "website": "https://www.plazamexico.com/about-us",
    "station": ["Long Beach Boulevard"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Market"],
    "characteristics": ["Low traffic", "Snapworthy", "Walk-in"]
  },
  {
    "place": "Santa Monica Pier",
    "imageURL": "https://images.squarespace-cdn.com/content/v1/5e0e65adcd39ed279a0402fd/1627422658494-RYLC91PU2BWD4UUWYYW0/2.jpg?format=2500w",
    "address": "200 Santa Monica Pier, Santa Monica, CA 90401",
    "latitude": 34.00828,
    "longitude": -118.49875,
    "website": "santamonicapier.org",
    "station": ["Downtown Santa Monica"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Entertainment"],
    "characteristics": ["Snapworthy", "Walk-in"]
  },
  {
    "place": "South Pasadena Farmers Market",
    "imageURL": "https://media.timeout.com/images/101588219/750/422/image.jpg",
    "address": "920 Meridian Ave, South Pasadena, CA 91030",
    "latitude": 34.11527,
    "longitude": -118.15722,
    "website": "www.southpasadenafarmersmarket.org",
    "station": ["South Pasadena"],
    "admissionFee": 0,
    "studentDiscountFee": null,
    "category": ["Market"],
    "characteristics": ["Walk-in"]
  },
  {
    "place": "The Grammy Museum",
    "imageURL": "https://thelagirl.com/wp-content/uploads/2021/10/IMG_7560.jpg",
    "address": "800 W Olympic Blvd, Los Angeles, CA 90015",
    "latitude": 34.04466,
    "longitude": -118.26463,
    "website": "www.grammymuseum.org",
    "station": ["Pico"],
    "admissionFee": 22.5,
    "studentDiscountFee": 15,
    "category": ["Arts", "Education"],
    "characteristics": ["Low traffic", "Walk-in"]
  },
  {
    "place": "Watts Towers",
    "imageURL": "https://www.parks.ca.gov/pages/613/images/090-P94247.JPG",
    "address": "1765 E 107th St, Los Angeles, CA 90002",
    "latitude": 33.93872,
    "longitude": -118.24111,
    "website": "https://www.wattstowers.org/tours",
    "station": ["103rd St/Watts Towers"],
    "admissionFee": 12,
    "studentDiscountFee": 6,
    "category": ["Arts"],
    "characteristics": ["Low traffic", "Snapworthy", "Walk-in"]
  }
]

let descriptorsList = [];
let stationsList = getArrayOfStations();
let originStation;
let destinationStation;
const metroGraph = buildAdjListFromMetro(metroData);

function getLinesFromStation(stationName) {
  const lines = [];
  for (const line of laMetroLines.lines) {
    if (line.stations.includes(stationName)) {
      lines.push(line);
    }
  }
  return lines;
}

function getPictureFromLines(lines) {
  const lineIcons = [];
  for (const line of lines) {
    lineIcons.push(line.iconURL);
  }
  return lineIcons;
}

function getDescriptors() {
  for (let i = 0; i < attractionData.length; i++) {
    for (let categoryIndex = 0; categoryIndex < attractionData[i]["category"].length; categoryIndex++) {
      let categoryName = attractionData[i]["category"][categoryIndex]
      if (!descriptorsList.includes(categoryName)) {
        descriptorsList.push(categoryName)
      }
    }
    for (let characteristicIndex = 0; characteristicIndex < attractionData[i]["characteristics"].length; characteristicIndex++) {
      let characteristicName = attractionData[i]["characteristics"][characteristicIndex]
      if (!descriptorsList.includes(characteristicName)) {
        descriptorsList.push(characteristicName)
      }
    }
  }
} 

document.addEventListener("DOMContentLoaded", getDescriptors);

function showSliders() {
  const sliderContainer = document.getElementById("slider-container");
  sliderContainer.innerHTML = "";
  const templateSlider = document.querySelector(".slider-entry");

  for (let i = 0; i < descriptorsList.length; i++) {
    let descriptor = descriptorsList[i];

    const nextSlider = templateSlider.cloneNode(true);
    nextSlider.style.display = "block";
    const sliderHeader = nextSlider.querySelector("p");
    sliderHeader.textContent = descriptor;
    const sliderInput = nextSlider.querySelector("input");
    sliderInput.id = "slider-" + descriptor; // Assign a unique ID to each slider
    sliderContainer.appendChild(nextSlider);
  }

  const sliderButton = document.querySelector(".slider-button");
  sliderContainer.append(sliderButton);
  sliderButton.style.display = "block";
}
document.addEventListener("DOMContentLoaded", showSliders);

function isAllSlidersZero() {
  for (let i = 0; i < descriptorsList.length; i++) {
    let descriptor = descriptorsList[i];
    const sliderInput = document.getElementById("slider-" + descriptor);
    if (sliderInput.value !== "0") {
      return false;
    }
  }
  return true;
}

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < attractionData.length; i++) {
    let title = attractionData[i].place;
    let imageURL = attractionData[i].imageURL;
    let address = attractionData[i].address;
    let website = attractionData[i].website;
    let stations = attractionData[i].station;
    let admissionFee = attractionData[i].admissionFee;
    let studentDiscount = attractionData[i].studentDiscountFee;
    let categories = attractionData[i].category;
    let characteristics = attractionData[i].characteristics;
    let sortIndex;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, address, website, stations, admissionFee,
      studentDiscount, categories, characteristics, sortIndex);
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
document.addEventListener("DOMContentLoaded", showCards);


function editCardContent(card, newTitle, newImageURL, newAddress, newWebsite,
                         newStations, newAdmissionFee, newStudentDiscount, newCategories,
                         newCharacteristicsList, newSortIndex) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = "Image of " +newTitle;

  const cardScore = card.querySelector(".score");
  let score = 0;
  for (let i = 0; i < descriptorsList.length; i++) {
    let descriptor = descriptorsList[i];
    const sliderInput = document.getElementById("slider-" + descriptor);
    if (newCategories.includes(descriptor) || newCharacteristicsList.includes(descriptor)) {
        score += parseInt(sliderInput.value);
      }
  }
  cardScore.textContent = "Score: " + score;
  if (isAllSlidersZero()) {
    cardScore.style.display = "none";
  }
  card.style.order = score*-1;
  
  // const cardAddress = card.querySelector(".address");
  // cardAddress.textContent = newAddress; 

  const cardWebsite = card.querySelector("a");
  cardWebsite.href = newWebsite;
  cardWebsite.textContent = newWebsite;

  const cardStations = card.querySelector(".station");
  for (let stationIndex = 0; stationIndex < newStations.length; stationIndex++) {
    let station = newStations[stationIndex];
    const stationListItem = document.createElement("li");
    const stationButton = document.createElement("button");
    stationButton.textContent = station;
    stationButton.addEventListener("click", function() {
      destinationStation = station; 
      console.log("Destination set to: " + destinationStation)
      document.getElementById("destination-display").textContent = destinationStation;});
    stationListItem.appendChild(stationButton);
    cardStations.appendChild(stationListItem);
  };

  const cardAdmissionFee = card.querySelector(".fee");
  cardAdmissionFee.textContent = "Admission Fee: $" + newAdmissionFee;

  // if (newStudentDiscount) {
  //   const cardStudentDiscount = card.querySelector(".student-discount");
  //   cardStudentDiscount.textContent = newStudentDiscount;
  // }

  const cardCategories = card.querySelector(".category");
  for (let categoryIndex = 0; categoryIndex < newCategories.length; categoryIndex++) {
    let category = newCategories[categoryIndex];
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    cardCategories.appendChild(categoryItem);
  };

  const cardCharacteristics = card.querySelector(".criteria");
  for (let characteristicIndex = 0; characteristicIndex < newCharacteristicsList.length; characteristicIndex++) {
    let characteristic = newCharacteristicsList[characteristicIndex];
    const characteristicItem = document.createElement("li");
    characteristicItem.textContent = characteristic;
    cardCharacteristics.appendChild(characteristicItem);
  };

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  // console.log("new card:", newTitle, "- html: ", card);
}
// This calls the addCards() function when the page is first loaded

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

function getArrayOfStations() {
  let stationsArray = [];
  for (let lineIndex = 0; lineIndex < metroData.lines.length; lineIndex++) {
    const lineEntry = metroData.lines[lineIndex];
    const stations = lineEntry.stations;
    for (let stationIndex = 0; stationIndex < stations.length; stationIndex++) {
      let station = stations[stationIndex];
      if (!stationsArray.includes(station)) {
        stationsArray.push(station);
      }
    }
  }
  stationsArray.sort();
  return stationsArray;
}

function populateOriginDropdown() {
  const selectElement = document.getElementById("origin-select");
  
  for (let stationIndex = 0; stationIndex < stationsList.length; stationIndex++) {
    const station = stationsList[stationIndex];
    const option = document.createElement("option");
    option.value = station;
    option.textContent = station;
    selectElement.appendChild(option);
  };
  selectElement.addEventListener("change", (event) => {
    originStation = event.target.value;
    console.log("Origin set to:"+originStation);
  });
}

document.addEventListener("DOMContentLoaded", populateOriginDropdown);

// Transform metroData to adjecency list
function buildAdjListFromMetro(data) {
  const adjacencyMetroList = {};
  for (let lineIndex = 0; lineIndex < data.lines.length; lineIndex++) {
    const lineEntry = data.lines[lineIndex];
    const lineName = lineEntry.line;
    const stations = lineEntry.stations;

      for (let stationIndex = 0; stationIndex < stations.length; stationIndex++) {
      const station = stations[stationIndex];

      if (!adjacencyMetroList[station]) {
        adjacencyMetroList[station] = [];
      }
      // behind station
      if (stationIndex > 0) {
        adjacencyMetroList[station].push({to: stations[stationIndex-1], 
                                          line: lineName 
        });
      }

      // next station
      if (stationIndex < stations.length - 1) {
        adjacencyMetroList[station].push({to: stations[stationIndex+1], 
                                          line: lineName});
      }
  }
  }
  console.log("Adjacency Metro List built:", adjacencyMetroList);
  return adjacencyMetroList;
}

// Implement depth first search
function getMetroRoute(adjList, startStation, endStation) {
  // {current: "Station Name", path: [array of nodes]}
  let queue = [{current: startStation, path: []}];

  let visited = {};
  visited[startStation] = true;

  while (queue.length > 0) {
    //console.log(queue);
    let state = queue.shift();
    let currentStation = state.current;
    let currentPath = state.path;

    if (currentStation === endStation) {
      return currentPath;
    }

    let neighbors = adjList[currentStation];
    // go to each neighbor of current station
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (!visited[neighbor.to]) { //if visited, skip
        visited[neighbor.to] = true; //indicate visited

        let nextStep = {from: currentStation, 
                        to: neighbor.to, 
                        line: neighbor.line};
        let newPath = currentPath.concat(nextStep);
        
        // add more neighbors
        queue.push({ 
          current: neighbor.to, 
          path: newPath 
        });
      }
    }
  }
  console.log("No route found from "+startStation+" to "+endStation+", likely station is mispelled");
  return null; // Return null if no path exists
}

function displayDirections(metroRoute) {
  const routeDisplay = document.getElementById("route-display");
  if (!metroRoute || metroRoute.length === 0) {
    routeDisplay.innerHTML = "No route found.";
    return;
  }
  routeDisplay.innerHTML = "";

  let currentLine = metroRoute[0].line;
  const startPara = document.createElement("p");
  startPara.innerHTML = `Start at <strong>${metroRoute[0].from}</strong> on the <strong>${currentLine}</strong>`;
  routeDisplay.appendChild(startPara);
  for (let i = 0; i < metroRoute.length; i++) {
    const step = metroRoute[i];
    if (step.line !== currentLine) {
      const transferPara = document.createElement("p");
      transferPara.innerHTML = `Transfer at <strong>${step.from}</strong> to the <strong>${step.line}</strong>`;
      routeDisplay.appendChild(transferPara);
      currentLine = step.line;
    }
  }
  const endPara = document.createElement("p");
  const destinationName = metroRoute[metroRoute.length - 1].to;
  endPara.innerHTML = `Arrive at <strong>${destinationName}</strong>`;
  routeDisplay.appendChild(endPara);
}

// // Execution
// const route = getMetroRoute(metroGraph, "North Hollywood", "Downtown Santa Monica");
// displayDirections(route);

