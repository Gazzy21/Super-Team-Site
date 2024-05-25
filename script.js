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
    img: [
      "memberimgs/gohan/gohan.png",
      "memberimgs/gohan/SSJ1gohan.jpg",
      "memberimgs/gohan/SSJ2gohan.png",
      "memberimgs/gohan/MYSTICgohan.png",
      "memberimgs/gohan/BEASTgohan.png",
    ],
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
    img: [
      "memberimgs/piccolo/piccolo.webp",
      "memberimgs/piccolo/potentialunleashedpiccolo.webp",
      "memberimgs/piccolo/orangepiccolo.png",
    ],
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
    img: [
      "memberimgs/android17/Android17.webp",
      "memberimgs/android17/SUPER17.webp",
    ],
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
    img: [
      "memberimgs/krillin/krillin.png",
      "memberimgs/krillin/POTENTIALUNLEASHEDkrillin.png",
    ],
  },
  {
    name: "Majin Buu",
    age: 5000000,
    race: "Majin",
    strengths: "Regeneration and Absorption Abilities",
    weaknesses: "Childlike Mentality and Vulnerability to Sealing Techniques",
    skills: ["Vanishing Ball", "Innocence Cannon", "Chocolate Beam"],
    transformations: ["Innocent Buu", "Evil Buu", "Super Buu", "Kid Buu"],
    biography: "The Innocent Destroyer",
    img: [
      "memberimgs/majinbuu/majinbuu.png",
      "memberimgs/majinbuu/evilbuu.webp",
      "memberimgs/majinbuu/superbuu.webp",
      "memberimgs/majinbuu/kidbuu.png",
    ],
  },
  {
    name: "Frieza",
    age: 1000,
    race: "Acrosian",
    strengths: "Combat Prowess and Strategic Intelligence",
    weaknesses: "Overconfidence and Vulnerability to Saiyan Transformations",
    skills: ["Death Beam", "Supernova", "Imprisonment Ball"],
    transformations: [
      "First Form",
      "Final Form",
      "100% Power",
      "Golden Frieza",
    ],
    biography: "The Galactic Emperor",
    img: [
      "memberimgs/frieza/frieza.webp",
      "memberimgs/frieza/FULLPOWERfrieza.webp",
      "memberimgs/frieza/GOLDENfrieza.webp",
      "memberimgs/frieza/BLACKfrieza.webp",
    ],
  },

  {
    name: "Cell",
    age: "Unknown (created in Age 786)",
    race: "Bio-Android",
    strengths: "Adaptability and Regeneration",
    weaknesses: "Overconfidence and Imperfect Form Vulnerabilities",
    skills: ["Solar-Kamehameha", "Psycho Crash", "Regeneration"],
    transformations: [
      "Imperfect Form",
      "Semi-Perfect Form",
      "Perfect Form",
      "Super Perfect Form",
    ],
    biography: "The Ultimate Bio-Android",
    img: [
      "memberimgs/cell/IMPERFECTcell.webp",
      "memberimgs/cell/SEMIPERFECTcell.png",
      "memberimgs/cell/PERFECTcell.png",
      "memberimgs/cell/SUPERPERFECTcell.png",
    ],
  },
  {
    name: "Mr. Satan",
    age: 41,
    race: "Human",
    strengths: "Martial Arts and Charisma",
    weaknesses: "Lack of Actual Superhuman Abilities",
    skills: ["Hercule Special", "Dynamic Mess Em Up Punch", "Megaton Punch"],
    transformations: ["none"],
    biography: "The World Martial Arts Champion",
    img: [
      "memberimgs/mrsatan/mrsatan.png",
      "memberimgs/mrsatan/mrsatan1.webp",
      "memberimgs/mrsatan/mrsatan2.webp",
    ],
  },
  {
    name: "Broly",
    age: 48,
    race: "Saiyan",
    strengths: "Legendary Super Saiyan Power and Extreme Strength",
    weaknesses: "Emotional Instability",
    skills: ["Eraser Cannon", "Gigantic Meteor", "Omega Blaster"],
    transformations: [
      "Wrathful",
      "Super Saiyan Full Power",
      "Legendary Super Saiyan",
    ],
    biography: "The Legendary Super Saiyan",
    img: [
      "memberimgs/broly/broly.png",
      "memberimgs/broly/WRATHFULbroly.png",
      "memberimgs/broly/SUPERbroly.png",
      "memberimgs/broly/LSSJbroly.png",
    ],
  },
  {
    name: "Goku Black and Zamasu",
    age: "Unknown",
    race: "Saiyan (Goku Black) / Shinjin (Zamasu)",
    strengths: "Immortality, Godly Ki Manipulation",
    weaknesses:
      "Overconfidence, Vulnerability to Techniques Bypassing Immortality",
    skills: ["Black Power Ball", "Divine Lasso", "Blades of Judgment"],
    transformations: ["Super Saiyan Rose (Goku Black)", "Fused Zamasu"],
    biography: "The Divine Duo",
    img: [
      "memberimgs/goku-black-zamasu/gbz.webp",
      "memberimgs/goku-black-zamasu/ROSEgbz.jpg",
      "memberimgs/goku-black-zamasu/FusedZamasu.png",
    ],
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
      case "majin":
        backgroundColor = "pink";
        break;
      case "acrosian":
        backgroundColor = "darkgrey";
        break;
      case "bio-android":
        backgroundColor = "limegreen";
        break;
      case "saiyan (goku black) / shinjin (zamasu)":
        backgroundColor = "black";
        break;
    }

    card.style.backgroundColor = backgroundColor;

    const powerupId = `powerup-${index}`;
    const imageId = `image-${index}`;

    card.innerHTML = `
    <div class="card divcardborders p-3 cardsizing">
    <img src="${member.img[0]}" class="card-img-top imgsizing1" id="${imageId}">
    <div class="card-body">
        <h1 class="card-title">${member.name}</h1>
        <h3 class="card-text" style="overflow-wrap: break-word; max-height: 100px; overflow-y: hidden;">${
          member.biography
        }</h3>
        <ul>
            <li><strong>Race:</strong> ${member.race}</li>
            <li><strong>Age:</strong> ${member.age.toLocaleString()}</li>
            <li><strong>Skills:</strong> ${member.skills.join(", ")}</li>
            <li><strong>Strength:</strong> ${member.strengths}</li>
            <li><strong>Weakness:</strong> ${member.weaknesses}</li>
            <li><strong>Transformations:</strong>
                <ul>
                    ${member.transformations
                      .map((transformation) => `<li>${transformation}</li>`)
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
