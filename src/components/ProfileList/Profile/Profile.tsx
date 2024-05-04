import React from 'react';
import { LinkedInProfileProps } from '../../../types/linkedinProfileProps';
import Avatar, { genConfig } from 'react-nice-avatar';
import Link from 'next/link';

const Profile: React.FC<LinkedInProfileProps> = (profile) => {
  const config = genConfig(profile.fullName);
  const profileData = encodeURIComponent(JSON.stringify(profile));

  return (
    <div key={profile.fullName} className="basis-2/5 shadow-md p-3 mb-2">
      <Avatar className="w-full h-64 rounded" {...config} shape="rounded" />
      <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
        {profile.fullName}
      </h3>
      <p className="text-base leading-7 text-gray-600">
        {profile.linkedinHeadline}
      </p>
      <div className="mt-2 text-base leading-7 text-gray-600 text-wrap">
        <span className="font-semibold"> Location:</span> {profile.location}
      </div>
      <div className="mt-2 text-base leading-7 text-gray-600 text-wrap">
        <span className="font-semibold"> Language Spoken:</span>{' '}
        {profile.languages}
      </div>
      <div role="list" className="mt-6 flex gap-x-6 items-center	">
        <div>
          <a
            href={profile.linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <Link
          href={`/profile/[id]?profile=${profileData}`}
          as={`/profile/${profile.id}`}
        >
          <button
            type="button"
            className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          >
            View Full Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
