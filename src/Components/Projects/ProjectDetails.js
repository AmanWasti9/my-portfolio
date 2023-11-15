// ProjectDetails.js
import React from 'react';
import ProjectPage from './ProjectPage';
import pro1 from "../../Images/pro1.png"; 
import pro2 from "../../Images/pro2.png"; 
import pro3 from "../../Images/pro3.png"; 
import pro4 from "../../Images/pro4.png"; 
import pro8 from "../../Images/pro8.png"; 

export default function ProjectDetails() {
  // Array of project details
  const projects = [
    {
      id: 1,
      HeadingOfProject: "Expense Tracker",
      PointsForProject: "I created an Expense Tracker using React JS that efficiently calculates both income and expenses. This web application provides users with a straightforward and intuitive interface to input and track their financial transactions. The application dynamically updates and displays the overall balance, income, and expenses, offering users a clear overview of their financial activities. With a focus on simplicity and functionality, the Expense Tracker facilitates effective budget management and financial tracking for users using React's component-based structure.",
      ImageOfProject: pro8,
      codeLink: "https://github.com/AmanWasti9/Expense-Tracker-Reactjs",
      liveDemoLink: "https://github.com/AmanWasti9/Expense-Tracker-Reactjs",
    },
    {
      id: 2,
      HeadingOfProject: "Sneakers Ecommerce",
      PointsForProject: "I developed a visually appealing Sneakers Ecommerce Website using HTML, CSS, and JavaScript, incorporating function-based components in React JS. The website boasts a dynamic homepage showcasing featured products, detailed product pages complete with comprehensive descriptions and customer reviews, as well as essential e-commerce functionalities such as a shopping cart, Wishlist, and a streamlined checkout process. Additionally, user account functionality was implemented, providing users with the ability to track orders and receive future promotions. The result is a user-friendly and visually captivating platform, offering customers an engaging and seamless experience for purchasing sneakers online.",
      ImageOfProject: pro1,
      codeLink: "https://github.com/AmanWasti9/SneakersWeb-ReactJs",
      liveDemoLink: "https://amanwasti9.github.io/SneakersWeb-ReactJs/",
    },
    {
      id: 3,
      HeadingOfProject: "TextUtils",
      PointsForProject: "I created TextUtils, a React JS-based web application designed to empower users in effortlessly manipulating text. The application offers a range of features, including text formatting, removal of extra spaces, text case conversion, and the generation of Lorem Ipsum text. With a focus on delivering a user-friendly interface, TextUtils ensures optimized performance, even when handling substantial amounts of text, providing users with a seamless and efficient platform for text manipulation.",
      ImageOfProject: pro2,
      codeLink: "https://github.com/AmanWasti9/TextUtils",
      liveDemoLink: "https://amanwasti9.github.io/TextUtils/",
    },
    {
      id: 4,
      HeadingOfProject: "Sample Portfolio",
      PointsForProject: "I designed and developed an innovative Sample Portfolio project utilizing HTML and CSS, effectively showcasing my skills, projects, and achievements in an attractive and professional manner. The portfolio serves as a comprehensive representation of my capabilities, providing a visually appealing platform to highlight my expertise and accomplishments.",
      ImageOfProject: pro3,
      codeLink: "https://github.com/AmanWasti9/Portfolio",
      liveDemoLink: "https://amanwasti9.github.io/Portfolio/",
    },
    {
      id: 5,
      HeadingOfProject: "Book Ecommerce Website",
      PointsForProject: "I meticulously designed and developed a Book Ecommerce Website, leveraging HTML, CSS, and JavaScript to integrate essential features, including a user-friendly search bar, detailed product pages, a convenient shopping cart, and a secure checkout process. The result is a seamless and engaging online shopping experience tailored specifically for books, ensuring users can effortlessly browse, select, and purchase their favorite reads with ease.",
      ImageOfProject: pro4,
      codeLink: "https://github.com/AmanWasti9/Book-Website",
      liveDemoLink: "https://amanwasti9.github.io/Book-Website/",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <ProjectPage key={project.id} {...project} />
      ))}
    </div>
  );
}
