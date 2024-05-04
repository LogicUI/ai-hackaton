import React from 'react';
import ChatGPTComponent from '../components/ChatGPTComponent';

export default function Index() {
  return (
    <main className="p-4 w-full">
      <section className="flex w-full">
        <article className="border border-gray-300 w-3/4 rounded">
          <div className="w-1/4"></div>
          <div className="w-3/4"></div>
        </article>
        <aside className="w-1/4 ml-4">
          <ChatGPTComponent />
        </aside>
      </section>
    </main>
  );
}
