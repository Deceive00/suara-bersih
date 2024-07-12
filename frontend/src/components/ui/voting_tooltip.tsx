import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const VotingTooltip = () => {
  return (
    <ul className="m-0 p-2 menu rounded-box gap-y-2">
      <li>
        <a className="tooltip tooltip-right" data-tip="Up vote">
          <BiUpvote className="text-lg text-green-800"/>
          90
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Down vote">
          <BiDownvote className="text-lg text-RedPrimary"/>
          90
        </a>
      </li>
    </ul>
  );
};

export default VotingTooltip;
