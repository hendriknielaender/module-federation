import React from 'react';


function Page({ title, children }) {
  return (
    <>
        {title}
      <div>{children}</div>
    </>
  );
}

export default Page;

