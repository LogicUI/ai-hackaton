import { useState } from 'react';

export default function ChatGPTComponent() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (text: string) => {
    setMessage(text);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-accent-light rounded-md h-[50em] shadow-md w-80">
      <h2 className="text-lg font-semibold mb-2">Need Suggestions?</h2>
      <p className="text-sm text-gray-500 mb-4">
        Feel free to ask our AI about recommend profiles
      </p>

      <button
        className="mb-2 w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        onClick={() => handleButtonClick('Recommend me profiles by experience')}
      >
        Recommend me profiles by experience
      </button>

      <button
        className="mb-2 w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        onClick={() =>
          handleButtonClick('Recommend me profiles by technologies')
        }
      >
        Recommend me profiles by technologies
      </button>

      <button
        className="mb-2 w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        onClick={() => handleButtonClick('Recommend me profiles by locations')}
      >
        Recommend me profiles by locations
      </button>

      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          className="w-full mb-2 px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-primary focus:ring-primary"
          placeholder="Type your message..."
          rows="6"
          cols="50"
          value={message}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-secondary text-black rounded-md hover:bg-secondary-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
