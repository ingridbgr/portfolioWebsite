import { images } from './assets/images/index';

const logotext = "Ingrid";
const meta = {
    title: "Ingrid Guntendorfer",
    description: "I’m Ingrid _ Frontend Engineer/ UI UX expert, currently working in Antwerp",
};


const introdata = {
    title: "I am Ingrid",
    animated: {
        first: "Frontend Engineer",
        second: "UI UX designer",
        third: "Website Expert",
        forth: "Artist",
    },
    description: "Create is my passion, when my hands are working my mind gets silent. Here is where I share a little bit of what my hands have been doing, in engineering and artistic works.",
    img_path: images.image1,
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am an Italian/Brazilian Engineer that already worked as UI/UX engineer and also as Frontend and Fullstack. I'm 27 and I currently live in Brussels. I am a native portuguese speaker but I also speak English fluently and French professionally. All of my works were private and I cannot share the prototypes on figma here, but the websites and demos of the products I worked with are in my",
    link: "/portfolio",
};
const worktimeline = [{
    jobtitle: "Frontend Engineer",
    where: "GORILLA (Antwerp - BE)",
    date: "2023 - present",
},
{
    jobtitle: "UI UX designer",
    where: "3DSide ( - BE)",
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
    name: "CSS/SASS/Bootstrap",
    value: 100,
},
{
    name: "Python",
    value: 65,
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
        img: images.portfolio7,
        description: "Ballet Company Website that I help develop",
        link: "https://philadelphiaballet.org/",
    },
    {
        img: images.portfolio3,
        description: "Website development that I did with the team for Warner Bros Harry Potter Event",
        link: "https://harrypotterexhibition.com/",
    },
    {
        img: images.portfolio2,
        description: "Artistical Painting on Figma Tailormade for my ETSY store",
        link: "https://www.figma.com/proto/3YKnlKszhZL67TskXVaplO/Poster-Mockup-(Community)?page-id=0%3A1&node-id=1-4&viewport=301%2C208%2C0.08&t=RuaUizIldWVSSPlK-1&scaling=min-zoom",
    },
    {
        img: images.portfolio1,
        description: "Website Development for a non-profit organization that I coordinate",
        link: "https://ddx3x.org/",
    },
    {
        img: images.portfolio11,
        description: "A design for a Cafeteria Menu Website",
        link: "https://dribbble.com/shots/24380600-Grano-Cafeteria?utm_source=Clipboard_Shot&utm_campaign=ingridissima&utm_content=Grano%20Cafeteria&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ingridissima&utm_content=Grano%20Cafeteria&utm_medium=Social_Share",
    },
    {
        img: images.portfolio4,
        description: "Club e-commerce / ticket selling wesbsite that I worked on",
        link: "https://thequeenwilmington.com/",
    },
    {
        img: images.portfolio5,
        description: "Survey Marketing Research Platform development (Pure Spectrum Insights)",
        link: "https://www.purespectrum.com/insights/",
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
    // YOUR_SERVICE_ID: "service_id",
    // YOUR_TEMPLATE_ID: "template_id",
    // YOUR_USER_ID: "user_id",
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
