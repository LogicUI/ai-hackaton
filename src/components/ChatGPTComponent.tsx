import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import getRecommendedResults from '../api/getRecommededResults/getRecommendedResults';
import { DotLoader } from 'react-spinners';

export default function ChatGPTComponent({
  setGptResponse,
  setSearchedkeyed,
}: {
  setGptResponse: any;
  setSearchedkeyed: any;
}) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const queryClient = useQueryClient();
  const sendMessage = useMutation(
    async (message: string) => {
      const response = await getRecommendedResults(message);
      setGptResponse(response.messages);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('message');
      },
      onSettled: () => {
        setIsLoading(false);
      },
    },
  );
  const handleButtonClick = (text: string) => {
    setMessage(text);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    sendMessage.mutate(message);
    setSearchedkeyed(message);
    setMessage('');
    event.preventDefault();
  };

  if (isLoading) {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DotLoader color="#36d7b7" />
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-accent-light rounded-md shadow-md w-80">
      <h2 className="text-lg font-semibold mb-4">Need Suggestions?</h2>
      <p className="text-sm text-gray-500 mb-6">
        Hey there! Looking to connect with professionals who share your
        interests? Just drop me a line with your keywords, and I'll find the
        perfect matches for you!
      </p>

      <div className="space-y-2 mb-6">
        <Button
          onClick={() =>
            handleButtonClick('Help me find co-founder with Gen AI experience!')
          }
        >
          Help me find co-founder with Gen AI experience!
        </Button>
        <Button
          onClick={() =>
            handleButtonClick('Are there any Portugese speaking users?')
          }
        >
          Are there any Portugese speaking users?
        </Button>
        <Button
          onClick={() =>
            handleButtonClick('Skills: AWS, cloud automation; Location: Sydney')
          }
        >
          Skills: AWS, cloud automation; Location: Sydney
        </Button>
        <Button
          onClick={() =>
            handleButtonClick(
              'User Looking to connect with people in Munich area!',
            )
          }
        >
          User Looking to connect with people in Munich area!
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <textarea
          className="w-full mb-4 px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-primary focus:ring-primary"
          placeholder="Type your message..."
          rows={6}
          value={message}
          onChange={handleInputChange}
        />
        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>{' '}
        {/* Disable the button when isLoading is true */}
        {isLoading && <div>Loading...</div>}{' '}
        {/* Show a loader when isLoading is true */}
      </form>
    </div>
  );
}

// Button component for consistent styling
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="w-full px-4 py-2 bg-white font-semibold rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      {...props}
    >
      {children}
    </button>
  );
};
