/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/website.jpg";
import Mobile from "../assets/images/Services/Web.png";
import UIUX from "../assets/images/Services/social.jpg";
// images.jpg

// Portfolio Img Imports
import Stream from "../assets/images/Portfolio/creator.png";
import Freelance from "../assets/images/Portfolio/ecom.png";
import Aura from "../assets/images/Portfolio/tryon.jpg";
import Surtido from "../assets/images/Portfolio/Surtido.png";
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/defaultfemale.png";
import Reiner from "../assets/images/Testimonials/defaultmale.png";
// import Kruger from "../assets/images/Testimonials/defaultmale.png";

// TeamMembers
import CEO from "../assets/images/TeamMembers/profile.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
// import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
// import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: "Custom Mobile Apps",
    imageUrl: Mobile,
    animation: "left",
    text: "We design and develop high-performance mobile applications tailored to your business needs. From concept to deployment, our apps deliver seamless user experiences, robust functionality, and scalable performance for both iOS and Android.",
  },
  {
    title: "Website Development",
    imageUrl: Web,
    animation: "up",
    text: "Our expert team builds modern, responsive, and secure websites that reflect your brand and drive conversions. Whether it’s an e-commerce store, corporate site, or a custom web platform, we create solutions that work flawlessly across all devices.",
  },
  {
    title: "Social Media Ads",
    imageUrl: UIUX,
    animation: "right",
    text: "We craft impactful, data-driven ad campaigns to maximize your reach and engagement on platforms like Instagram, Facebook, and LinkedIn. From creative design to performance optimization, we help you get the best ROI from your social presence.",
  },
];

export const Portfolios = [
  {
    id: "virtual-try-on",
    title: "Virtual Try-On (AR)",
    imageUrl: Aura,
    type: "AR Experience",
    responsibility: ["AR Development", "Computer Vision", "AI Integration"],
    credit: "/virtual-try-on",
  },
  {
    id: "snapchat-lens",
    title: "Snapchat Lens Creator",
    imageUrl: Stream,
    type: "AR Filter",
    responsibility: ["Lens Development", "Creative Design"],
    credit: "/snapchat-lens",
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Mobile App",
    imageUrl: Freelance,
    type: "Mobile App",
    responsibility: ["Mobile Development", "Payment Integration"],
    credit: "/ecommerce-app",
  },

  {
    id: "brand-website",
    title: "Brand Website & Social Ads",
    imageUrl: Surtido,
    type: "Website + Marketing",
    responsibility: ["Web Development", "Facebook Ads Campaign"],
    credit: "/brand-website",
  },
  // {
  //   id: 'asd1293ulskmnb5',
  //   title: 'Restaurant App & Instagram Ads',
  //   imageUrl: Surtido,
  //   type: 'App + Social Media',
  //   responsibility: [
  //     'Mobile Development',
  //     'Instagram Ad Campaign',
  //   ],
  //   credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  // },
  // {
  //   id: 'asd1293ulkmnbj6',
  //   title: 'Courses Management',
  //   imageUrl: ManagementApp,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  // },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We maintain transparent and consistent communication, ensuring you’re informed at every stage of the project.",
      imageUrl: Communicative,
    },
    {
      title: "Efficient Project Management",
      description:
        "We follow structured processes and agile methodologies to keep projects on track, within budget, and at the highest quality.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "We work closely with our clients, blending your vision with our expertise to deliver outstanding results.",
      imageUrl: Collaborative,
    },
    {
      title: "Trusted & Recommended",
      description:
        "Our proven track record and satisfied clients speak for themselves — we deliver solutions that people love.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    company: "Owner, TechBridge Solutions",
    testimoni:
      "WarTech transformed our business operations with their innovative solutions. Highly professional and reliable team!",
    imageUrl: Reiner,
  },
  {
    id: 2,
    name: "Priya Nair",
    company: "Head, LogiSmart India",
    testimoni:
      "Working with WarTech has been a game-changer. Their expertise and dedication are unmatched.",
    imageUrl: Sasha,
  },
  {
    id: 3,
    name: "Rohit Mehta",
    company: "CEO, SmartTrack Logistics",
    testimoni:
      "WaWarTech delivered beyond our expectations. Their technology solutions boosted our efficiency drastically.",
    imageUrl: Reiner,
  },
  {
    id: 4,
    name: "Neha Kapoor",
    company: "Owner, VisionWare Pvt. Ltd",
    testimoni:
      "WarTech’s commitment to quality and timely delivery impressed us the most. Truly commendable work",
    imageUrl: Sasha,
  },
];

export const TeamMembers = [
  {
    name: "Mohan Mamidala",
    position: "Software Devloper",
    imageUrl: CEO,
  },
  {
    name: "Mohit Dontula",
    position: "HRD",
    imageUrl: HRD,
  },
  {
    name: "Granger Watterson",
    position: "UI UX Designer",
    imageUrl: Finance,
  },
  {
    name: "Tom Jimmy",
    position: "Backend Developer",
    imageUrl: ProjectManager,
  },
  // {
  //   name: 'Jim Hendrix',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend1,
  // },
  // {
  //   name: 'Calvin Max',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend2,
  // },
];
