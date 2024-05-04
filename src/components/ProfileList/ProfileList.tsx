import React from 'react';
import { useQuery } from 'react-query';
import getLinkedinProfiles from '../../api/getLinkedinProfiles/getLinkedinProfiles';
import { LinkedInProfileProps } from '../../types/linkedinProfileProps';

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
    <div>
      {data &&
        data.map((profile) => (
          <div key={profile.id}>
            <h2>{profile.fullName}</h2>
            <p>{profile.linkedinHeadline}</p>
          </div>
        ))}
    </div>
  );
};

export default ProfileList;
