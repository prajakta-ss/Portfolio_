import React from "react";

const cardItems = [
  {
    id: 1,
    img: "/mern.png",
    title: "MERN Stack",
  },
  {
    id: 2,
    img: "/java.png",
    title: "Core Java",
  },
  {
    id: 3,
    img: "/postgresql_img.png",
    title: "PostgreSQL",
  },
  {
    id: 4,
    img: "/hibernate.png",
    title: "Hibernate",
  },
  {
    id: 5,
    img: "/spring.png",
    title: "Spring Boot",
  }
];

function Experience() {
  return (
    
    <div  name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16">
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <span className="underline font-semibold">Technologies & Skills</span>
      <p>"Here are some of the technologies I've worked with."</p>

      {/* Display Technology Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {cardItems.map(({ id, img, title }) => (
          <div 
            key={id} 
            className="border rounded-lg p-4 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={img} 
              alt={title} 
              className="w-40 h-40 object-contain rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
