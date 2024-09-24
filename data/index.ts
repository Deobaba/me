export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Experienced Full-Stack Software Engineer with 3 years of experience in designing and developing scalable applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/deobaba3.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm Adenekan Adeola",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a C-C [buying and seling] platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to schedule a meeting with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Financial Banking APP",
    des: "Finacial application linked with different Debit or Credit cards",
    img: "/finance.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "SnapGram",
    des: "Social Media app where users can upload pictures and videos",
    img: "/snapgram.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/#",
  },
  {
    id: 3,
    title: "Shoe Collections",
    des: "For the lovers of Nice kicks, collection displaying various kinds of shoe",
    img: "/shoe.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/#",
  },
  {
    id: 4,
    title: "Jobs",
    des: "Looking for job ? I am here",
    img: "/jobs.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/#",
  },
  {
    id: 5,
    title: "films",
    des: "Cinema in your gadget",
    img: "/film.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/#",
  },
  {
    id: 6,
    title: "UrlCut",
    des: "Ur shortner",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/#",
  },
];

export const testimonials = [
  {
    quote:
      "I built a backend service using NestJS and RabbitMQ to handle bulk transactions for bank staff, allowing transfers to multiple customers from multiple accounts, integrated with core banking APIs. I also developed financial services like a POS system using AdonisJS, MySQL, and third-party APIs for card withdrawals and bill payments. Additionally, I set up CI/CD pipelines with Jenkins, utilized AWS for hosting and storage, and created web applications for Astrapolaris microfinance bank, including a loan management system and a banking dashboard to track transactions.",
    name: "Fullstack Developer",
    title: "SigmaOctantis",
  },
  {
    quote:
      "I led backend development for a school management app using Node.js and TypeScript, designing a robust API system and managing databases with MySQL and MongoDB. I utilized AWS services for scalability and deployed containerized applications with Docker. Additionally, I collaborated with frontend developers for a seamless user experience and contributed to code reviews to enhance code quality.",
    name: "Backend Developer",
    title: "Basitech",
  },
  {
    quote:
      "I built a communication platform using NestJS for the backend, focusing on real-time messaging and user interactions. The app features channel creation, direct messaging, and notifications to facilitate efficient collaboration among users. I emphasized a user-friendly interface and robust performance, implementing secure authentication and data management practices to enhance the overall user experience.",
    name: "Backend Deveoper",
    title: "Cortex AI",
  },
  {
    quote:
      "I developed the backend for a talent acquisition app by creating RESTful APIs using Node.js and NestJS. I utilized MySQL to manage relational data and optimized database queries for faster access while implementing a matching algorithm to recommend jobs that best suit candidates. Additionally, I employed database obscurity as a security measure and used Mocha and Chai for unit and integration testing to ensure code reliability and quality.",
    name: "Backend Developer",
    title: "Thrivee",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },

  {
    id: 3,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 4,
    name: "AWS",
    img: "/aws.svg",
    nameImg: "/awsName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Engineer",
    desc: "Assisted in the development of a web-based platform using React.js and nodejs, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer",
    desc: "Designed and developed fintech solutions adopted by microfinance banks",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Deobaba",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://x.com/Deopappy",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/deobaba/",
  },
];
