import {
    backend,
    web,
    javascript,
    html,
    css,
    git,
    python,
    telegram,
    postgresql,
    reactjs, 
    bootstrap,
    django,
    django_rest,
    docker,
    arzon,
    book_api,
    crm,
    arzonro_bot,
    book_api_bot,
    N24,
    quizapp,
    faketweet,
    data_process,
    cinema_ticket,
    cta
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {name: "python", icon: python,},{name: "django",icon: django,},{name: "django_rest",icon:  django_rest,},{name: "docker",icon: docker,},{name: "postgresql",icon: postgresql,},{name: "git",icon: git,},
    {name: "HTML 5",icon: html,},{name: "CSS 3",icon: css, },{name: "bootstrap",icon:  bootstrap}, {name: "JavaScript",icon: javascript,},{name: "React",icon: reactjs,},
  
  ];
  
  const experiences = [
    {
      title: "Learning and practicing html+css+js together",
      icon: html,
      iconBg: "#ffffff",
      date: "January 2022 - July 2022",
      points: [
        "Taking various courses on stepik",
        "Learning flex-boxes through the game ",
        "Writing pages like Delivery, School and Data Processing websites",
        "Page creation with bootstrap",
      ],
    },
    {
      title: "React JS",
      icon: reactjs,
      iconBg: "#fde910",
      date: "July 2022 - September 2022",
      points: [
        "Language basics (data types, arrays, arithmetic operations, etc.)",
        "Build apps like Cinema ticket reservation App, React Quiz App, Fake Tweet Generator",


      ],
    },
    {
      title: "Python",
      icon: python,
      iconBg: "#abcdef",
      date: "December 2022 - March 2023",
      points: [
        "Language basics (data types, arrays, arithmetic operations, etc.)",
        "Calculator",
        "Basic Python apps like TTS, STT, Login page"
      ],
    },
    {
      title: "Django",
      icon: django,
      iconBg: "#abcdef",
      date: "March 2023 - May 2023",
      points: [
        "Build own blog website",
        "Work with database",

      ],
    },
    {
      title: "Django Rest Framework",
      icon: django_rest,
      iconBg: "#abcdef",
      date: "May 2023 - June 2023",
      points: [
        "Api overview",
        "The api for the news site has been released",
        "API for CRM system", 
        "Arzon.uz is an API for comparing prices of products in online stores", 
        "Book API - API for easy sorting and downloading of books in telegram channels/groups", 
      ],
    },
    {
      title: "SQL + Postgresql",
      icon: postgresql,
      iconBg: "#abcdef",
      date: "May 2023 - June 2023",
      points: [
        "Creating your own database for the store ",
        "draw.io ",
        "taking a course on the stepik", 
        "consolidating information in college",
        "inquiry "
      ],
    },
    {
      title: "Telegram bot using Aiogram",
      icon: telegram,
      iconBg: "#abcdef",
      date: "June 2023 - present",
      points: [
        "Telegram bot for yourself",
        "Telegram bot for Learning center registration",
        "Telegram bot for Arzon.uz API",
        "Telegram bot for BOOK API"
  
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Arzon.uz API",
      description:
        "Arzon.uz is an API for comparing prices of products in online stores",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "DRF",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "BeatifulSoup",
          color: "blue-text-gradient",
        },
      ],
      image: arzon,
      source_code_link: "https://github.com/muhandis-kh/arzon.uz",
    },
    {
      name: "Book API",
      description:
        "Book API - API for easy sorting and downloading of books in telegram channels/groups",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "DRF",
          color: "yellow-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
      ],
      image: book_api,
      source_code_link: "https://github.com/muhandis-kh/book_api",
    },
    {
      name: "CRM System",
      description:
        "Backend part of CRM system for learning center management",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "yellow-text-gradient",
        },
        {
          name: "DRF",
          color: "green-text-gradient",
        },

      ],
      image: crm,
      source_code_link: "https://github.com/muhandis-kh/uitc-crm",
    },
    {
      name: "Telegram bot for ARZON.UZ API",
      description:
        "Telegram bot for ARZON.UZ API",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "aiogram",
          color: "green-text-gradient",
        },

      ],
      image: arzonro_bot,
      source_code_link: "https://t.me/arzonro_bot",
    },
    {
      name: "Telegram bot for BOOK API",
      description:
        "Telegram bot for BOOK API",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "aiogram",
          color: "green-text-gradient",
        },

      ],
      image: book_api_bot,
      source_code_link: "https://t.me/mobilkutubxona_bot",
    },
    {
      name: "N24 - News Site",
      description:
        "N24 - news site landing page",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },

      ],
      image: N24,
      source_code_link: "https://obidxon-h.netlify.app/",
    },
    {
      name: "Quiz App",
      description:
        "React Quiz app",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "red-text-gradient",
        },

      ],
      image: quizapp,
      source_code_link: "https://web-quizapp.netlify.app/",
    },
    {
      name: "Fake Tweet Generator",
      description:
        "Fake Tweet Generator",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },

      ],
      image: faketweet,
      source_code_link: "https://fake-tweet-app.netlify.app/",
    },
    {
      name: "Landing Page",
      description:
        "Data Processing Company - Responsive Landing page",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },

      ],
      image: data_process,
      source_code_link: "http://data-kh123.netlify.app/",
    },
    {
      name: "Landing Page",
      description:
        "ThriveTalk Landing page concept",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },

      ],
      image: cta,
      source_code_link: "http://thrivetalk.kh123.netlify.app/",
    },
    {
      name: "Ticket reservation page",
      description:
        "Cinema ticket reservation App without JavaScript library frameworks",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },

      ],
      image: cinema_ticket,
      source_code_link: "https://tck-kh.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  