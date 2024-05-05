import React, { useState } from 'react';
import ChatGPTComponent from '../components/ChatGPTComponent';
import ProfileList from '../components/ProfileList/ProfileList';
import RecommendedText from '../components/RecommendedText/RecommendedText';

export default function Index() {
  const [gptResponse, setGptResponse] = useState<string[]>([]);
  const [searchKeyed, setSearchedkeyed] = useState<string>('');

  return (
    <main className="p-4 w-full">
      <section className="flex w-full">
        <article className="border border-gray-300 w-3/4 rounded flex">
          <div className="w-2/6 mt-24 ml-6">
            <RecommendedText searchQuery={searchKeyed} />
          </div>
          <div className="w-3/4">
            <ProfileList gptResponse={gptResponse} />
          </div>
        </article>
        <aside className="w-1/4 ml-4">
          <ChatGPTComponent
            setGptResponse={setGptResponse}
            setSearchedkeyed={setSearchedkeyed}
          />
        </aside>
      </section>
    </main>
  );
}
