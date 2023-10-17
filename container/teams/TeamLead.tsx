import TeamLeadCard from "@/components/teamPage/TeamLeadCard";
import { positionData, MemberData } from "@/app/team/page";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

interface TeamLeadsPropData {
  teamleads: [MemberData];
}

const getTeamLead = (x: string) => {
  switch (x) {
    case positionData["5"]:
      return "Team Lead";
    default:
      return "Team Lead";
  }
};

const TeamLead = ({ teamleads }: TeamLeadsPropData) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Leading Team
            </p>
          </div> */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x={0}
                    y={0}
                    width=".135"
                    height=".30"
                  >
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width={52}
                  height={24}
                />
              </svg>
              <span className="relative">Meet Our&nbsp;</span>
            </span>
            Team Leads
          </h2>
          <p className="text-base font-light text-gray-700 md:text-lg">
          "Leadership is not about being in charge. It is about taking care of those in your charge." <br />
            <span className="font-bold tracking-wider">- Simon Sinek </span>
          </p>
        </div>
        <div className="flex flex-wrap lg:ml-[3rem] -mt-4">
          {teamleads.map((teamlead) => (
            <TeamLeadCard
              key={`coordinator-card-${teamlead.id}`}
              name={teamlead.name}
              position={getTeamLead(teamlead.position)}
              domain={teamlead.domain}
              imageUrl={SERVER + "/assets/" + teamlead.avatar}
              quote={teamlead.quote}
              githubUrl={teamlead.github}
              linkedinUrl={teamlead.linkedin}
              mailID={teamlead.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLead;
