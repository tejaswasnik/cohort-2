var employee = [
  {
    name: "Steve Auston",
    role: "Full Stack Developer",
    description:
      "Experienced in building scalable web apps using MERN and modern backend tools.",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Nancy Wilson",
    role: "Frontend Developer",
    description:
      "Specializes in creating responsive UI with React and TailwindCSS.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Emily Johnson",
    role: "Backend Developer",
    description: "Focused on API development and server-side performance.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hiroshi Tanaka",
    role: "UI/UX Designer",
    description:
      "Creates clean interfaces inspired by modern Japanese design principles.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kwame Mensah",
    role: "Data Analyst",
    description: "Works with statistical models and data storytelling.",
    img: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mei Ling",
    role: "DevOps Engineer",
    description: "Manages cloud deployments and infrastructure automation.",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Liam O’Connor",
    role: "QA Engineer",
    description: "Ensures software reliability through automated testing.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Amina Hassan",
    role: "Cybersecurity Specialist",
    description: "Protects data assets and performs security audits.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    role: "Mobile App Developer",
    description: "Builds high-performance mobile apps using Flutter.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
];

var card = "";
employee.forEach(function (elem) {
  card =
    card +
    `<div class="card">
            <img src="${elem.img}" alt="alt">
            <h1>${elem.name}</h1>
            <h2>${elem.role}</h2>
            <p>${elem.description}</p>
        </div>`;
});

var main = document.querySelector("main");
main.innerHTML = card;
