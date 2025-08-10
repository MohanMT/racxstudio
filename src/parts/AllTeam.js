/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import CEO from 'assets/images/TeamMembers/profile.jpg';
import Frontend1 from 'assets/images/TeamMembers/mohit.jpg';
// import Frontend2 from 'assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from 'assets/images/TeamMembers/deep.jpg';
// import Backend2 from 'assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from 'assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from 'assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from 'assets/images/TeamMembers/soham.jpg';

const teamData = [
  {
    name: 'Mohan Mamidala',
    position: 'Software Engineer',
    imageUrl: CEO,
  },
  {
    name: 'Mohit Dontula',
    position: 'HRD',
    imageUrl: Frontend1,
  },
  {
    name: 'Deep Karmur',
    position: 'Backend Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Soham More',
    position: 'FullStack Developer',
    imageUrl: UIUX1,
  },
  // {
  //   name: 'Alex Rodriguez',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile1,
  // },
  // {
  //   name: 'Lisa Wang',
  //   position: 'Frontend Developer',
  //   imageUrl: Frontend2,
  // },
  // {
  //   name: 'Tom Wilson',
  //   position: 'Backend Developer',
  //   imageUrl: Backend2,
  // },
  // {
  //   name: 'Jessica Brown',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile2,
  // },
];

export default function AllTeam() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {teamData.map((item, index) => (
          <Fade key={item.name} direction="up" triggerOnce delay={index * 100}>
            <div className="bg-background rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">
                {item.name}
              </h3>
              <p className="text-sm lg:text-base text-text-light">
                {item.position}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
