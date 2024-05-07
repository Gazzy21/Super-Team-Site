// Team Member Data

const teamMembers = [
  {
    name: "Son Goku",
    age: 47,
    race: "Sayian",
    strengths: "Strength",
    weaknesses: "Unconditional Mercy",
    skills: ["Kamehameha", "Kaioken", "Martial Arts"],
    transformations: ["Super Sayian", "Super Sayian 2", "Super Sayian 3", "Super Sayian 4", "Super Sayian God", "Super Sayian Blue (SSGSS)", "Ultra Instinct", "Mastered Ultra Instinct"],
    biography: "The Sayian who was raised on Earth.",
    img: "goku.webp",
  },
  {
    name: "Vegeta",
    age: 48,
    race: "Sayian",
    strengths: "Strength",
    weaknesses: "Unconditional Mercy",
    skills: ["Kamehameha", "Kaioken", "Martial Arts"],
    transformations: ["Super Sayian", "Super Sayian 2", "Super Sayian 3", "Super Sayian 4", "Super Sayian God", "Super Sayian Blue (SSGSS)", "Ultra Instinct", "Mastered Ultra Instinct"],
    biography: "The Prince of all Sayians.",
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
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    // style the bg color based on position

    let backgroundColor;

    switch (member.race.toLowerCase()) {
      case "sayian":
        backgroundColor = "yellow";
        break;
      case "namekian":
        backgroundColor = "green";
        break;
    }

    card.style.backgroundColor = backgroundColor;

    card.innerHTML = `
    <div class="card divcardborders">
    <img src="${member.img}" class="card-img-top">
    <div class="card-body">
      <h1 class="card-title">${member.name}</h5>
      <h3 class="card-text">${member.biography}</h3>
      <ul>
        <li><strong>Race:</strong> ${member.race}</li>
        <li><strong>Skills:</strong> ${member.skills}</li>
        <li><strong>Transformations:</strong>
          <ul>
            <li>${member.transformations[0]}</li>
            <li>${member.transformations[1]}</li>
            <li>${member.transformations[2]}</li>
            <li>${member.transformations[3]}</li>
            <li>${member.transformations[4]}</li>
            <li>${member.transformations[5]}</li>
            <li>${member.transformations[6]}</li>
            <li>${member.transformations[7]}</li>
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
