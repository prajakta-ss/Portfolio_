import React from "react";

const cardItems = [
  {
    id: 1,
    img: "/age_calc1 (1).png",
    title: "Age Calculator",
    description: "A web app that calculates a user's age based on their date of birth.",
    link: "https://prajakta-ss.github.io/Age-calculator/"
  },
  {
    id: 2,
    img: "/exam-form1.png",
    title: "Exam Form",
    description: "An online exam platform with multiple-choice questions in Java, Python, and JavaScript.",
    link: "https://prajakta-ss.github.io/Exam-form/"
  },
  {
    id: 3,
    img: "/bookstorehome.png",
    title: "Book Store",
    description: "A Book Store app where users can register and log in to view available books.",
    link: "https://github.com/prajakta-ss/BookStore.git"
  },
  {
    id: 4,
    img: "/banking.png",
    title: "Banking System",
    description: "A console-based banking project where users can register, log in, and perform operations like checking balance, depositing money, and withdrawing money.",
    link: "https://github.com/prajakta-ss/Banking_System_Core_Java.git"
  }
];

function Portfolio() {
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <p>"Here are some of the projects I've worked on."</p>

      {/* Display Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {cardItems.map(({ id, img, title, description,link }) => (
          <div key={id} className="border rounded-lg p-4 shadow-lg hover:scale-110 duration-300">
            <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="mt-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Visit Site</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
