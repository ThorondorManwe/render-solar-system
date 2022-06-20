const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)
/*for(let i = 0; i < planets.length; i++) {
    const planetName = planets[i].name;
    //const planet = document.createElement("div");
    console.log(planetName);
}*/

function renderPlanet(planetArray) {
    // Render planets from array
    for(let i = 0; i < planetArray.length; i++) {
        const planetName = planetArray[i].name;
        const planet = document.createElement("div");
        const planetDiameter = planetArray[i].diameter;
        const circleDiameter = (planetArray[i].diameter) / 1000;
        const color = planetArray[i].color;
        // Hace cada círculo
        planet.setAttribute("class", "planeta");
        planet.setAttribute("id", `${planetName}`);
        //planet.style.backgroundColor = color;
        planet.style.width = circleDiameter;
        planet.style.height = circleDiameter;
        planet.addEventListener("mouseenter", function() {
            //console.log(`Hover on planet ${planetName}`);
            const infoDiv = document.createElement("div");
            infoDiv.setAttribute("id", `div${planetName}`);
            infoDiv.setAttribute("class", "infoPlanet");
            const paraName = document.createElement("p");
            const paraDiameter = document.createElement("p");
            const paraColor = document.createElement("p");

            paraName.textContent = `Planet name: ${planetName}`;
            paraDiameter.textContent = `Planet diameter: ${planetDiameter} Km`;
            paraColor.textContent = `Color: ${color}`;

            infoDiv.appendChild(paraName);
            infoDiv.appendChild(paraDiameter);
            infoDiv.appendChild(paraColor);
            planet.appendChild(infoDiv);
        });
        planet.addEventListener("mouseleave", function() {
            const eliminaInfoDiv = document.getElementById(`div${planetName}`);
            eliminaInfoDiv.remove();
        });
        solarSystem.appendChild(planet);
        
        console.log(planetName);
    }
}

renderPlanet(planets);