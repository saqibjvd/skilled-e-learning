"use client";

// import Login from "./login/page";

export default function Home() {


  return (
    <div>
      <h1 className="m-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">
        Skilled e-Learning
      </h1>
      <h2 className="mt-4 text-l text-center">
        Skilled e-learning{" "}
        <span className="text-amber-100">
          The World best platform to learn
        </span>
      </h2>

      <div>
        <p className="m-4 text-lg font-normal lg:text-xl text-amber-200 text-center">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div>
         {/* <Login/> */}
        </div>
      
      </div>
    </div>
  );
}
