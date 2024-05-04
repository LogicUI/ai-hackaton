import React from 'react';
import { useQuery } from 'react-query';
import getLinkedinProfiles from '../../api/getLinkedinProfiles/getLinkedinProfiles';
import { LinkedInProfileProps } from '../../types/linkedinProfileProps';
import Profile from './Profile/Profile';
import { DotLoader } from 'react-spinners';

const ProfileList = () => {
  const { data, isLoading, isError } = useQuery<LinkedInProfileProps[]>(
    'linkedinProfiles',
    getLinkedinProfiles,
  );

  if (isLoading) {
    return (
      <div className="w-100 h-100 flex flex-col justify-center items-center">
        <DotLoader color="#36d7b7" />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching LinkedIn profiles</div>;
  }
  return (
    <div className="overflow-y-scroll flex justify-between flex-wrap max-h-[50rem]">
      {data &&
        data.map((profile, index) => <Profile key={index} {...profile} />)}
    </div>
  );
};

export default ProfileList;
