import { images } from './assets/images/index';

const logotext = "Ingrid";
const meta = {
    title: "Ingrid Guntendorfer",
    description: "I’m Ingrid _ Lead Creative Director in Brussels - Belgium",
};


const introdata = {
    title: "I am Ingrid",
    animated: {
        first: "Creative Director",
        second: "Graphic designer",
        third: "2D illustrator and animator",
        forth: "Artist",
    },
    description: "Create is my passion, when my hands are working my mind gets silent. Here is where I share a little bit of what my hands have been doing, in engineering and artistic works.",
    img_path: images.image1,
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am an Italian/Brazilian Engineer that already worked as UI/UX engineer and also as Frontend and Fullstack but now is fully dedicated as a Designer. I was always passionate about design and after working in different aspects of design I current work in taking creative decisions for communications and design for European Institutions. I'm 29 and I currently live in Brussels. I am a native portuguese speaker but I also speak English fluently and French professionally. All of my works were private and I cannot share the prototypes on figma here, but the websites and demos of the products I worked with are in my portfolio. I choose to share only 4 projects here and the rest in my personal freelancer page Not In Grid. ",
    link: "/portfolio",
};
const worktimeline = [{
    jobtitle: "Lead Creative Designer",
    where: "INEXTREMIS (Brussels - BE)",
    date: "2025 - present",
},{
    jobtitle: "Frontend Engineer",
    where: "GORILLA (Antwerp - BE)",
    date: "2023 - 2024",
},
{
    jobtitle: "UI UX designer",
    where: "3DSide ( Louvain-la-neuve - BE)",
    date: "2022-2023",
},
{
    jobtitle: "Fullstack Engineer",
    where: "Pure-Spectrum (California - USA)",
    date: "2021-2022",
},
{
    jobtitle: "Frontend Developer",
    where: "First Ascent Design (Delaware - USA)",
    date: "2019-2022",
},
];

const skills = [{
    name: "JavaScript",
    value: 100,
},
{
    name: "React",
    value: 90,
},
{
    name: "Figma",
    value: 100,
},
{
    name: "Digital art and illustration",
    value: 100,
},
{
    name: "Adobe products (photoshop, inDesign, AdobeXD)",
    value: 100,
},
{
    name: "Animation in 2D",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Creation and Automation of prototypes in FIGMA including KPI's and User Research methods, expert in mobile first and creative websites.",
},
{
    title: "Social Media Marketeer",
    description: "Development of social media post and strategies including metrics and insights.",
},
{
    title: "Frontend Developer",
    description: "Expert in website creation and SEO analytics management.",
},
];

const dataportfolio = [
    {
        img: images.portfolio1,
        title:"Women of Eumeps",
        description: "A campaign to reinforce the women force in the European EPS industry",
        link: "https://www.eumeps.eu/womenofeumeps/",
        tags: ['creative direction','graphic design', 'social media strategy'],
    },
    {
        img: images.portfolio2,
        title: "My Dribbble Page",
        description: "My experimental work and graphic design challenges",
        link: "https://dribbble.com/ingridissima",
        tags: ['creative direction','graphic design'],
    },
    {
        img: images.portfolio3,
        title: "ILSI Europe Symposium",
        description: "On-going Event Campaign for ILSI Europe 40-years-anniversary",
        link: "https://ilsieuropesymposium.eu/",
        tags: ['creative direction','graphic design', "event campaign"],
    },
    {
        img: images.portfolio4,
        title: "Drawing Portfolio",
        description: "Here are some of my 2D drawings that I occasionally publish in my instagram account",
        link: "https://www.instagram.com/notingrid.co/",
        tags: ['art','illustration'],
    },
    {
        img: images.portfolio6,
        description: "Design Company I worked for 2 years",
        link: "https://firstascentdesign.com/",
    },
    {
        img: images.portfolio8,
        description: "Platform for Pricing Energy Market that I current work on",
        link: "https://www.gorilla.co/en",
    },
    {
        img: images.portfolio9,
        description: "This Website on FIGMA prototype",
        link: "https://www.figma.com/design/n4otbwJRBIYEPk0UCLvINR/Untitled?node-id=0-1&t=jJBh7l8YugGhcKXQ-1",
    },
    {
        img: images.portfolio10,
        description: "A newsletter example for a company",
        link: "https://www.figma.com/design/6aGLlkwhUzW1s1hsIyYMXC/newsletter?node-id=0-1&t=jKa24QvPdu4FzcMk-1",
    },

];

const contactConfig = {
    YOUR_EMAIL: "ingridguntendorfer@gmail.com",
    YOUR_FONE: "(+32) 466 39 40 15",
    description: "If you want to hire me or get more information about my work feel free to send me a message :)",
    YOUR_SERVICE_ID: "service_9mxz21a",
    YOUR_TEMPLATE_ID: "template_u7jeaa5",
    YOUR_USER_ID: "iM811GAHKInmlpiUN",
};

const connectData = {
    title: "Hi again!",
    subtitle: " what brings you here today? ", 
    button1title: "I met you at the Ghent Special Convention",
    button1link: "https://www.ingridguntendorfer.com/bestlifeever", 
 
     button2title: "I want to see your website",
    button2link: "https://www.ingridguntendorfer.com/", 
    button3title: "I want to hire your services - Illustration, social media",
    button3link: "https://notingrid.com/", 
    button4title: "I am just curious",
    button4link: "https://www.ingridguntendorfer.com/contact/", 
};

const bestLifeEver = {
    title: "What a joy to have you here!",
    description: "I am assembling this page to share all the convention pictures I have, so soon you will see here many images, in the mean time, why don't we connect?",
    instagraminvite: "Choose a way to connect:", 
    whatsapp: 'https://wa.me/32466394915',
  email: 'mailto:ingridguntendorfer@gmail.com', 
  instagram:'https://www.instagram.com/ingridissima',

}

const socialprofils = {
    github: "https://github.com/ingridbgr",
    instagram: "https://www.instagram.com/in.codes",
    linkedin: "https://www.linkedin.com/in/ingridbgr/",
};

export const projects = [
  {
    slug: "project-1",
    title: "Project One",
    summary: "Short teaser…",
    cover: "/assets/project1.jpg",
    content: "<p>Detailed write-up…</p>",
    tech: ["React", "Node"],
    links: { live: "https://example.com", repo: "https://github.com/you/project-1" }
  },
];
export {
    meta,
    dataabout,
    dataportfolio,
    bestLifeEver,
    worktimeline,
    skills,
    services,
    connectData,
    introdata,
    contactConfig,
    socialprofils,
    logotext,

};
