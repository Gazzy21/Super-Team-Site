// Team Member Data

const teamMembers = [
  {
    name: "Son Goku",
    age: 47,
    race: "Saiyan",
    strengths: "Strength",
    weaknesses: "Unconditional Mercy",
    skills: ["Kamehameha", "Kaioken", "Martial Arts"],
    transformations: [
      "Super Saiyan",
      "Super Saiyan 2",
      "Super Saiyan 3",
      "Super Saiyan 4",
      "Super Saiyan God",
      "Super Saiyan Blue (SSGSS)",
      "Ultra Instinct",
      "Mastered Ultra Instinct",
    ],
    biography: "The Legendary Saiyan",
    img: "goku.webp",
  },
  {
    name: "Vegeta",
    age: 48,
    race: "Saiyan",
    strengths: "Pride",
    weaknesses: "Arrogance",
    skills: ["Galick Gun", "Final Flash", "Big Bang Attack"],
    transformations: [
      "Super Saiyan",
      "Super Saiyan 2",
      "Majin",
      "Super Saiyan 4",
      "Super Saiyan God",
      "Super Saiyan Blue (SSGSS)",
      "Super Saiyan Blue Evolution",
      "Ultra Ego",
    ],
    biography: "The Saiyan Prince",
    img: "vegeta.webp",
  },
  {
    name: "Piccolo",
    age: 47,
    race: "Namekian",
    strengths: "Intelligence",
    weaknesses: "Unconditional Mercy",
    skills: ["Special Beam Cannon", "Demon Wave", "Light Grenade"],
    transformations: ["Yellow", "Orange"],
    biography: "Namekian who tried to destroy Earth.",
    img: "piccolo.webp",
  },
  {
    name: "Gohan",
    age: 27,
    race: "Saiyan",
    strengths: "Intelligence",
    weaknesses: "Unconditional Mercy",
    skills: ["Special Beam Cannon", "Masenko", "Father-Son Kamehameha"],
    transformations: ["Super Saiyan", "Super Saiyan 2", "Mystic", "Beast"],
    biography: "Son of a true warrior.",
    img: "gohan.png",
  },
  {
    name: "Android 17",
    age: 47,
    race: "Android",
    strengths: "Strength",
    weaknesses: "Unconditional Mercy",
    skills: ["Kamehameha", "Kaioken", "Martial Arts"],
    transformations: ["Super 17"],
    biography: "The Saiyan who was raised on Earth.",
    img: "Android17.webp",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "divcardborders", "p-3", "m-0");

    // style the bg color based on position

    let backgroundColor;

    switch (member.race.toLowerCase()) {
      case "saiyan":
        backgroundColor = "yellow";
        break;
      case "namekian":
        backgroundColor = "green";
        break;
      case "android":
        backgroundColor = "blue";
        break;
    }

    card.style.backgroundColor = backgroundColor;

    card.innerHTML = `
    <div class="card divcardborders p-3">
    <img src="${member.img}" class="card-img-top imgsizing1">
    <div class="card-body">
      <h1 class="card-title">${member.name}</h5>
      <h3 class="card-text">${member.biography}</h3>
      <ul>
        <li><strong>Race:</strong> ${member.race}</li>
        <li><strong>Skills:</strong> ${member.skills}</li>
        <li><strong>Transformations:</strong>
          <ul>
            ${member.transformations
              .map(
                (transformation, index) => `
              <li>${transformation}</li>
            `
              )
              .join("")}
          </ul>
        </li>
      </ul>
    </div>
  </div>
`;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
