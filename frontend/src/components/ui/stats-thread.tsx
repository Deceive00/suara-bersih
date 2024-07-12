import React from "react";

const StatsThread = () => {
  // State for count of tags and count of upvotes
  const [tags, setTags] = React.useState(0);
  const [upvotes, setUpvotes] = React.useState(0);

  return (
    <div className="stats shadow text-montserrat w-1/2 mx-auto">
      {/* Left Stats */}
      <div className="stat w-full mx-auto py-4 flex justify-center flex-row-reverse">
        {/* SVG */}
        <div className="stat-figure text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-12 w-12 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4l-8 8h6v8h4v-8h6z"
            ></path>
          </svg>
        </div>
        {/* Desc */}
        <div className="text-left">
          <div className="stat-title text-WhiteSecondary">Total Upvote</div>
          <div className="stat-value w-auto text-green-600">{upvotes}00K</div>
          <div className="stat-desc w-auto text-WhiteSecondary">
            updated in real time
          </div>
        </div>
      </div>

      {/* Right Stats */}
      <div className="stat w-full mx-auto flex justify-center flex-row-reverse">
        {/* Svg */}
        <div className="stat-figure text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-16 w-16 stroke-current text-RedPrimary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4l4 4v-4h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7z"
            />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
        </div>

        {/* Desc */}
        <div className="text-left">
          <div className="stat-title text-WhiteSecondary">Found</div>
          <div className="stat-value text-RedPrimary">{tags} Tags</div>
          <div className="stat-desc text-WhiteSecondary">in this thread</div>
        </div>
      </div>
    </div>
  );
};

export default StatsThread;
