import Link from "next/link";
import React from "react";

const Interview = () => {
  return (
    <>
      <div
        className="
      flex
      flex-col
      min-h-screen
      text-orange-100
    "
      >
        <h1>Language</h1>
        <div>
          <ul>
            <li>
              <Link href="/interview/javascript">JavaScript</Link>
            </li>
            <li>
              <Link href="/interview/python">Python</Link>
            </li>
            <li>
              <Link href="/interview/java">Java</Link>
            </li>
            <li>
              <Link href="/interview/c">C</Link>
            </li>
            <li>
              <Link href="/interview/c++">C++</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Interview;
