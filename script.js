// Team Member Data

const teamMembers = [
  {
    name: "Son Goku",
    age: 47,
    race: "Sayian",
    strengths: "",
    weaknesses: "heading ability",
    skills: ["Kamehameha", "Kaioken", "Passing"],
    biography:
      "The Sayian who was raised on Earth.",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
        <div class="card">
            <div class="card-header">
            ${member.name}
            </div>
        </div>
        `;
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
