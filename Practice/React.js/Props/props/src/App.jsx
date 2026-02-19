import React from "react";
import Card from "./components/card";
const App = () => {
  const cardData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Learn how to build modern, responsive websites using HTML, CSS, and JavaScript.",
      image: "https://picsum.photos/id/1011/300/200",
      button: "Explore",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      description:
        "Understand core JavaScript concepts like variables, functions, and loops.",
      image: "https://picsum.photos/id/1015/300/200",
      button: "Start Learning",
    },
    {
      id: 3,
      title: "React Fundamentals",
      description:
        "Build reusable UI components and manage state efficiently with React.",
      image: "https://picsum.photos/id/1025/300/200",
      button: "View Course",
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Learn server-side development, APIs, and databases.",
      image: "https://picsum.photos/id/1035/300/200",
      button: "Know More",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Design clean and user-friendly interfaces with modern design principles.",
      image: "https://picsum.photos/id/1045/300/200",
      button: "Design Now",
    },
    {
      id: 6,
      title: "Data Structures",
      description:
        "Master arrays, linked lists, stacks, queues, and trees for problem solving.",
      image: "https://picsum.photos/id/1055/300/200",
      button: "Practice",
    },
    {
      id: 7,
      title: "Operating Systems",
      description:
        "Understand processes, memory management, and scheduling algorithms.",
      image: "https://picsum.photos/id/1065/300/200",
      button: "Read More",
    },
    {
      id: 8,
      title: "Database Systems",
      description:
        "Learn SQL, normalization, and database design fundamentals.",
      image: "https://picsum.photos/id/1075/300/200",
      button: "Learn SQL",
    },
    {
      id: 9,
      title: "Cyber Security",
      description:
        "Explore security concepts like encryption, firewalls, and ethical hacking.",
      image: "https://picsum.photos/536/354",
      button: "Secure Now",
    },
    {
      id: 10,
      title: "Cloud Computing",
      description:
        "Understand cloud services, deployment models, and scalability.",
      image: "https://picsum.photos/seed/picsum/536/354",
      button: "Get Started",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map(function (elem) {
        return <Card key={elem.id} title={elem.title} description={elem.description} image={elem.image} button={elem.button} />;
      })}
    </div>
  );
};

export default App;
