import React from 'react';
import { RecommendedTextProps } from '@/src/types/RecommendTextProps';

const RecommendedText: React.FC<RecommendedTextProps> = ({
  text = 'Recommended Profiles',
  description = 'Based on your search, here are the profiles recommended by our recommendation engine.',
}) => {
  return (
    <div>
      <div className="max-w-2xl xl:col-span-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {text}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default RecommendedText;
