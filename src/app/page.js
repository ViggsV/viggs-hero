import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <Link href="/home">
      <div>Click here to go to Home</div>
    </Link>
  );
};

export default Page;