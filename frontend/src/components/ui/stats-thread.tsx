const StatsThread = () => {
  return (
    <div className="stats shadow bg-WhiteSecondary text-montserrat">
      {/* Left Stats */}
      <div className="stat w-full mx-auto flex justify-center flex-row-reverse">
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
        <div>
          <div className="stat-title text-primary">Total Upvote</div>
          <div className="stat-value w-auto text-green-600">8K</div>
          <div className="stat-desc w-auto text-primary">
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
        <div>
          <div className="stat-title text-primary">Tags</div>
          <div className="stat-value text-RedPrimary">24</div>
          <div className="stat-desc text-primary">in this thread</div>
        </div>
      </div>
    </div>
  );
};

export default StatsThread;
