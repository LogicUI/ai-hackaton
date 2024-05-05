import React from 'react';
import { useQuery } from 'react-query';
import getLinkedinProfiles from '../../api/getLinkedinProfiles/getLinkedinProfiles';
import { LinkedInProfileProps } from '../../types/linkedinProfileProps';
import Profile from './Profile/Profile';
import { DotLoader } from 'react-spinners';

const ProfileList = ({ gptResponse }: { gptResponse: any }) => {
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

  if (gptResponse.length > 0) {
    const [first] = gptResponse;
    const [ids] = first;
    const valuesId = ids.text.value;
    const filteredList = data?.filter((profile) =>
      valuesId.includes(profile.id),
    );
    return (
      <div className="overflow-y-scroll flex justify-between flex-wrap max-h-[50rem]">
        {filteredList &&
          filteredList.map((profile, index) => (
            <Profile key={index} {...profile} />
          ))}
      </div>
    );
  }

  return (
    <div className="overflow-y-scroll flex justify-between flex-wrap max-h-[50rem]">
      {data &&
        data.map((profile, index) => <Profile key={index} {...profile} />)}
    </div>
  );
};

export default ProfileList;
