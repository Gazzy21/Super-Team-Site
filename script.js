// Team Member Data

const teamMembers = [
  {
    name: "Son Goku",
    age: 43,
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
    img: [
      "memberimgs/goku/goku.webp",
      "memberimgs/goku/SSJ1goku.webp",
      "memberimgs/goku/SSJ2goku.jpg",
      "memberimgs/goku/SSJ3goku.jpg",
      "memberimgs/goku/SSJ4goku.png",
      "memberimgs/goku/SSGgoku.png",
      "memberimgs/goku/SSGSSgoku.png",
      "memberimgs/goku/UIgoku.png",
      "memberimgs/goku/MUIgoku.png",
    ],
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
    img: [
      "memberimgs/vegeta/vegeta.webp",
      "memberimgs/vegeta/SSJ1vegeta.png",
      "memberimgs/vegeta/MAJINvegeta.png",
      "memberimgs/vegeta/SSJ4vegeta.png",
      "memberimgs/vegeta/SSGvegeta.png",
      "memberimgs/vegeta/SSGSSvegeta.webp",
      "memberimgs/vegeta/SSGSSEVOvegeta.png",
      "memberimgs/vegeta/UEvegeta.png",
    ],
  },
  {
    name: "Gohan",
    age: 27,
    race: "Half-Saiyan",
    strengths: "Intelligence",
    weaknesses: "Unconditional Mercy",
    skills: ["Special Beam Cannon", "Masenko", "Father-Son Kamehameha"],
    transformations: ["Super Saiyan", "Super Saiyan 2", "Mystic", "Beast"],
    biography: "Champion of Justice",
    img: ["memberimgs/gohan.png"],
  },
  {
    name: "Piccolo",
    age: 47,
    race: "Namekian",
    strengths: "Intelligence",
    weaknesses: "Unconditional Mercy",
    skills: ["Special Beam Cannon", "Demon Wave", "Light Grenade"],
    transformations: ["Potential Unleashed", "Orange"],
    biography: "Protector of Earth",
    img: ["memberimgs/piccolo.webp"],
  },
  {
    name: "Android 17",
    age: 24,
    race: "Android",
    strengths: "Infinite Energy Supply",
    weaknesses: "Overconfidence",
    skills: ["Hell's Flash", "Super Electric Strike", "Photon Flash"],
    transformations: ["Super 17"],
    biography: "The Relentless Android",
    img: ["memberimgs/Android17.webp"],
  },
  {
    name: "Krillin",
    age: 44,
    race: "Human",
    strengths: "Tactical Intelligence",
    weaknesses: "Physical Limits",
    skills: ["Solar Flare", "Destructo Disc", "Scattering Bullet"],
    transformations: ["Unlock Potential", "Mystic Attack Boost"],
    biography: "Earth's Foremost Fighter",
    img: ["memberimgs/Krillin.png"],
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "divcardborders", "p-3", "m-0");

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
      case "human":
        backgroundColor = "white";
        break;
      case "half-saiyan":
        backgroundColor = "purple";
        break;
    }

    card.style.backgroundColor = backgroundColor;

    const powerupId = `powerup-${index}`;
    const imageId = `image-${index}`;

    card.innerHTML = `
          <div class="card divcardborders p-3">
              <img src="${
                member.img[0]
              }" class="card-img-top imgsizing1" id="${imageId}">
              <div class="card-body">
                  <h1 class="card-title">${member.name}</h1>
                  <h3 class="card-text">${member.biography}</h3>
                  <ul>
                      <li><strong>Race:</strong> ${member.race}</li>
                      <li><strong>Skills:</strong> ${member.skills.join(
                        ", "
                      )}</li>
                      <li><strong>Transformations:</strong>
                          <ul>
                              ${member.transformations
                                .map(
                                  (transformation) =>
                                    `<li>${transformation}</li>`
                                )
                                .join("")}
                          </ul>
                      </li>
                  </ul>
                  <div class="text-center">
                      <button type="button" class="btn btn-primary text-center" id="${powerupId}">Power Up</button>
                  </div>
              </div>
          </div>
      `;

    teamCardsContainer.appendChild(card);

    const powerupButton = document.getElementById(powerupId);
    const imageElement = document.getElementById(imageId);
    let currentImageIndex = 0;

    powerupButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % member.img.length;
      imageElement.src = member.img[currentImageIndex];
    });
  });
}

window.onload = generateTeamCards;
