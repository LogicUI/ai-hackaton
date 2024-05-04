import React from 'react';
import { useQuery } from 'react-query';
import getLinkedinProfiles from '../../api/getLinkedinProfiles/getLinkedinProfiles';
import { LinkedInProfileProps } from '../../types/linkedinProfileProps';
import Profile from './Profile/Profile';

const ProfileList = () => {
  const { data, isLoading, isError } = useQuery<LinkedInProfileProps[]>(
    'linkedinProfiles',
    getLinkedinProfiles,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching LinkedIn profiles</div>;
  }
  return (
    <div className="max-h-1200 overflow-y-scroll">
      {data && data.map((profile) => <Profile {...profile} />)}
    </div>
  );
};

export default ProfileList;
