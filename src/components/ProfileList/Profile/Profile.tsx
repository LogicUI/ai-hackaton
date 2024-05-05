import React from 'react';
import { LinkedInProfileProps } from '../../../types/linkedinProfileProps';
import Avatar, { genConfig } from 'react-nice-avatar';
import {
  FaLaptopCode,
  FaBaby,
  FaResearchgate,
  FaSeedling,
  FaShoppingCart,
  FaServer,
  FaBriefcase,
} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { LiaRobotSolid } from 'react-icons/lia';
import { TbMoodKid } from 'react-icons/tb';
import { CiMobile1 } from 'react-icons/ci';
import { GrUserManager } from 'react-icons/gr';
import { BsCloudArrowUpFill } from 'react-icons/bs';
import { SiCoinmarketcap } from 'react-icons/si';

const Profile: React.FC<LinkedInProfileProps> = (profile) => {
  const config = genConfig(profile.fullName);
  const { experience, about } = profile;
  const listOfExperience = experience.split(', ');

  const getIcon = (exp: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      marketing: <SiCoinmarketcap />,
      mobile: <CiMobile1 />,
      backend: <FaServer />,
      junior: <TbMoodKid />,
      machine: <LiaRobotSolid />,
      management: <GrUserManager />,
      'E-Commerce': <FaShoppingCart />,
      researcher: <FaResearchgate />,
      cloud: <BsCloudArrowUpFill />,
      software: <FaLaptopCode />,
      startup: <FaSeedling />,
      web: <CgWebsite />,
      consulting: <FaBriefcase />,
      intern: <FaBaby />,
    };

    for (const key in iconMap) {
      if (exp.toLowerCase().includes(key)) {
        return iconMap[key];
      }
    }

    return null;
  };

  return (
    <div
      key={profile.fullName}
      className="basis-1/2 shadow-lg p-4 mb-3 bg-white rounded-lg border border-slate-300	"
    >
      <Avatar className="w-32 h-32 mx-auto rounded-full" {...config} />
      <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
        {profile.fullName}
      </h3>
      <p className="text-sm text-center text-gray-600">
        {profile.linkedinHeadline}
      </p>
      <div className="mt-4 text-center">
        <h4 className="text-lg font-semibold text-gray-900">Experiences</h4>
        <div className=" text-gray-800">
          {listOfExperience.map((exp) => (
            <div key={exp} className="mt-3 flex text-left">
              {getIcon(exp)} <span className="ml-2">{exp}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-800">
        <strong>Location:</strong> {profile.location}
      </div>
      <div className="mt-1 text-sm text-gray-800">
        <strong>Languages Spoken:</strong> {profile.languages}
      </div>
      <p className="mt-4 text-sm text-gray-800">
        <strong>About:</strong> {about}
      </p>
      <div className="flex justify-center mt-6">
        <a
          href={profile.linkedinProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700"
        >
          <button
            type="button"
            className="rounded-md flex items-center bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
            <svg
              className="h-5 w-5 mr-2"
              aria-hidden="true"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
            View Full Profile
          </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
