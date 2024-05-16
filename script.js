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
    img: ["memberimgs/goku/goku.webp", "memberimgs/goku/SSJ1goku.webp"],
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
    img: "memberimgs/vegeta.webp",
  },
  {
    name: "Gohan",
    age: 27,
    race: "Half-Saiyan",
    strengths: "Intelligence",
    weaknesses: "Unconditional Mercy",
    skills: ["Special Beam Cannon", "Masenko", "Father-Son Kamehameha"],
    transformations: ["Super Saiyan", "Super Saiyan 2", "Mystic", "Beast"],
    biography: "Son of a true warrior.",
    img: "memberimgs/gohan.png",
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
    img: "memberimgs/piccolo.webp",
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
    img: "memberimgs/Android17.webp",
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
    img: "memberimgs/Krillin.png",
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
      case "human":
        backgroundColor = "white";
        break;
      case "half-saiyan":
        backgroundColor = "purple";
        break;
    }

    // const images = {
    //   img1: "memberimgs/goku/goku.webp",
    //   img2: "memberimgs/goku/SSJ1goku.webp",
    // };

    // let currentImageKey = "img1";
    // const imageElement = document.getElementById("image");
    // const gokPU = document.getElementById("gokuPU");

    // function updateImage() {
    //   imageElement.src = images[currentImageKey];
    // }

    // gokuPU.addEventListener("click", () => {
    //   switch (currentImageKey) {
    //     case "img1":
    //       currentImageKey = "img2";
    //       break;
    //     case "img2":
    //       currentImageKey = "img3";
    //       break;
    //     case "img3":
    //       currentImageKey = "img1";
    //       break;
    //     // add more cases as needed
    //     default:
    //       currentImageKey = "img1";
    //   }
    //   updateImage();
    // });

    // // Initialize the first image
    // updateImage();

    card.style.backgroundColor = backgroundColor;

    card.innerHTML = `
    <div class="card divcardborders p-3">
    <img src="${member.img[0]}" class="card-img-top imgsizing1">
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
      <div class="text-center">
      <button type="button" class="btn btn-primary text-center">Power Up</button>
      </div> 
      </div>
  </div>
`;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
