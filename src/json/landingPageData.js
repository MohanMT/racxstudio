/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/website.jpg';
import Mobile from '../assets/images/Services/Web.png';
import UIUX from '../assets/images/Services/social.jpg';
// images.jpg

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/tryon.jpg';
import Stream from '../assets/images/Portfolio/creator.png';
import Freelance from '../assets/images/Portfolio/ecom.png';
import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Custom Mobile Apps',
    imageUrl: Mobile,
    animation: 'left',
  },
  {
    title: 'Website Development',
    imageUrl: Web,
    animation: 'up',
  },
  {
    title: 'Social Media Ads',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'virtual-try-on',
    title: 'Virtual Try-On (AR)',
    imageUrl: Recruiting,
    type: 'AR Experience',
    responsibility: [
      'AR Development',
      'Computer Vision',
      'AI Integration',
    ],
    credit: '/virtual-try-on',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Snapchat Lens Creator',
    imageUrl: Stream,
    type: 'AR Filter',
    responsibility: [
      'Lens Development',
      'Creative Design',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'E-Commerce Mobile App',
    imageUrl: Freelance,
    type: 'Mobile App',
    responsibility: [
      'Mobile Development',
      'Payment Integration',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },

  {
    id: 'asd1293ufgdfgs4',
    title: 'Brand Website & Social Ads',
    imageUrl: Aura,
    type: 'Website + Marketing',
    responsibility: [
      'Web Development',
      'Facebook Ads Campaign',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
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
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for Racxstudio, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with Racxstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Racxstudio is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Mohan Mamidala',
    position: 'Software Devloper',
    imageUrl: CEO,
  },
  {
    name: 'Mohit Dontula',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
];
