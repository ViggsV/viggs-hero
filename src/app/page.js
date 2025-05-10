import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center space-y-6 px-4 max-w-md">
        <p className="text-lg text-gray-300">
          This site uses sound for a better user experience. You can mute it using the button at the bottom left.
        </p>

        <Link href="/home">
          <div className="text-2xl px-6 py-3 border border-white hover:bg-white hover:text-black cursor-pointer transition-all duration-300">
            Continue
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
