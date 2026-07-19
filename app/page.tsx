'use client'

import { useEffect } from 'react'
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

const skillMapping = {
  express: 'Express.js',
  html5: 'HTML5',
  css3: 'CSS3',
  js: 'JavaScript',
  php: 'PHP',
  'node-js': 'Node.js',
  laravel: 'Laravel',
  golang: 'Go (Golang)',
  bootstrap: 'Bootstrap',
  mysql: 'MySQL',
  vue: 'Vue',
  react: 'React'
};

// Dikelompokkan per kategori: Bahasa & Markup -> Framework Frontend -> Backend -> Database
const skillIcons = [
  // Bahasa & Markup
  'html5', 'css3', 'js',
  // Framework / Library Frontend
  'vue', 'react', 'bootstrap',
  // Backend
  'node-js', 'express', 'php', 'laravel', 'golang',
  // Database
  'mysql'
];

function SkillIcon({ icon }: { icon: string }) {
  if (icon === 'express') return <SiExpress className="skill-icon" />;
  if (icon === 'mysql') return <SiMysql className="skill-icon" />;
  if (icon === 'vue') return <SiVuedotjs className="skill-icon" />;
  if (icon === 'react') return <SiReact className="skill-icon" />;
  return <i className={`fab fa-${icon} skill-icon`}></i>;
}

export default function HomePage() {
  useEffect(() => {
    // Reserved for future interactive behavior
  }, [])

  return (
    <>
      {/* Background texture */}
      <div className="bg-animation"></div>

      <div className="container">
        {/* Header */}
        <header>
          <div className="logo">
            Porto<span>folio</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero — welcome message only */}
        <section className="hero" id="home">
          <div className="hero-text">
            <span className="hero-eyebrow">Welcome to my portofolio</span>
            <h1><span> Adrian Baihaqi</span></h1>
            <p>Thanks for stopping by. Here you'll find a bit about who I am, the tools I work with, and a selection of projects I've built along the way.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#about" className="btn btn-outline">About Me</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="section-title"><h2>About Me</h2></div>
          <div className="about-content">
            <div className="about-photo">
              <div className="about-photo-frame">
                <img src="/images/profile.png" alt="Adrian Baihaqi" className="profile-img" />
              </div>
            </div>
            <div className="about-text">
              <h3 className="about-name">Adrian Baihaqi</h3>
              <span className="about-role">Backend Developer</span>
              <p className="about-location">
                <i className="fas fa-map-marker-alt"></i> Based in Indonesia
              </p>
              <p>I'm a backend developer passionate about creating efficient, secure, and maintainable server-side applications. I specialize in API development, database management, and system architecture.</p>
              <p>I continuously expand my knowledge through hands on projects and enjoy exploring new technologies to build better software solutions.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="section-title"><h2>My Skills</h2></div>
          <div className="skills-marquee">
            <div className="skills-track">
              {[...skillIcons, ...skillIcons].map((icon, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-icon-box">
                    <SkillIcon icon={icon} />
                  </div>
                  <span className="skill-name">
                    {skillMapping[icon as keyof typeof skillMapping]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <div className="section-title"><h2>My Projects</h2></div>
          <div className="projects-container">

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/Virtulist.png" alt="Project 1" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Virtulist - To-Do List</h3>
                <p>A responsive and user-friendly task management web application designed to help users organize, prioritize, and track their daily activities efficiently.
                Built using Laravel for both frontend and backend development, and developed using PHP and JavaScript.</p>
                <div className="project-links">
                  <a href="https://github.com/SnowFx1/Virtulist-To-Do-List.git"><i className="fab fa-github"></i> View On Github</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/Student-Data-Management.png" alt="Project 2" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Student Data Management - Desktop App</h3>
                <p>A desktop application designed to manage student data efficiently, including adding, editing, and deleting records.
                Developed using Java and built with the NetBeans IDE, this application features a user-friendly interface suitable for academic environments.</p>
                <div className="project-links">
                  <a href="https://github.com/SnowFx1/Simple-Desktop.git"><i className="fab fa-github"></i> View On Github</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/Starbhak-Market.png" alt="Project 3" className="project-img" />
              </div>
              <div className="project-info">
                <h3>Starbhak Market - Website and Mobile</h3>
                <p>A marketplace application created for both web and mobile platforms, showcasing a modern and intuitive interface for browsing various digital products.
                      The website was developed using standard web technologies such as HTML, CSS, and JavaScript, while the mobile version was built using Flutter.
                      The project emphasizes a clean visual layout, responsive design, and smooth user experience across devices.</p>
                <div className="project-links">
                  <a href="https://github.com/SnowFx1/Assesment_Web.git"><i className="fab fa-github"></i> View On Github for Website</a>
                  <a href="https://github.com/SnowFx1/Asses_Flutter.git"><i className="fab fa-github"></i> View On Github for Mobile</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/WatchSense.png" alt="Project 3" className="project-img" />
              </div>
              <div className="project-info">
                <h3>WatchSense</h3>
                <p>WatchSense is a movie discovery app built with Laravel and Livewire. It pulls film data from TMDb, lets users explore trending titles, inspect movie details, save likes, and surface recommendations based on taste signals like genre, cast, director, and user activity.</p>
                <div className="project-links">
                  <a href="https://github.com/ArkaIbaraki/WatchSense"><i className="fab fa-github"></i> View On Github</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/SmartExpense.png" alt="Project 3" className="project-img" />
              </div>
              <div className="project-info">
                <h3>SmartExpanse</h3>
                <p>SmartExpense is a modern web application designed to simplify personal finance management. It enables users to record income and expenses, organize transactions by category, and monitor their financial activities through an interactive dashboard. With a clean, responsive interface and secure user authentication, SmartExpense helps users maintain organized financial records and gain better insights into their spending habits.</p>
                <div className="project-links">
                  <a href="https://github.com/ArkaIbaraki/SmartExpense"><i className="fab fa-github"></i> View On Github</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img-wrapper">
                <img src="/images/assetborrow.png" alt="Project 3" className="project-img" />
              </div>
              <div className="project-info">
                <h3>AssetBorrow</h3>
                <p>AssetBorrow is a fullstack web-based asset borrowing management system designed to streamline inventory management and borrowing workflows within organizations. The application features secure JWT authentication, role-based access control (Super Admin, Inventory Admin, User, and Technician), asset management, borrowing requests, damage reporting, maintenance tracking, and analytics. Built with Express.js, Prisma ORM, MySQL, React, TypeScript, Vite, and Tailwind CSS, AssetBorrow demonstrates modern fullstack development practices through a secure, scalable, and responsive application.</p>
                <div className="project-links">
                  <a href="https://github.com/SnowFx1/Asset-Borrow"><i className="fab fa-github"></i> View On Github</a>
                </div>
              </div>
            </div>


          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <h2 style={{ marginBottom: 20 }}>Connect with Me</h2>
        <div className="social-links">
          <a href="https://github.com/SnowFx1"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/adrianbaihaqi/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/adrian_portofolio/"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2026 Adrian Baihaqi. All rights reserved.</p>
      </footer>
    </>
  )
}