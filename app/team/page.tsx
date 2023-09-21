// import TeamHeader from "@/components/teamPage/TeamHeader";
// import TeamHeader from "../../components/teamPage/TeamHeader";
// import Mentors from "../../container/teams/Mentors";
// import Coordinators from "../../container/teams/Coordinators";
// import TeamHeadSEO from "../../container/teams/TeamHeadSEO";
// import Team from "../../container/teams/Team";
// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
// const { SERVER } = publicRuntimeConfig;

// const Layout = (props: any) => {
//   return (
//     <div>
//       {/* <TeamHeadSEO /> */}
//       {/* <TeamHeader /> */}
//       {/* <Mentors mentors={props.mentors} /> */}
//       {/* <Coordinators coordinators={props.coordinators} /> */}
//       {/* <Team members={props.members} /> */}
//     </div>
//   );
// };

// export async function getStaticProps(context) {
//   const positionData = {
//     1: "Coordinator",
//     2: "Non-Tech Coordinator",
//     3: "Tech Coordinator",
//     4: "Administrative Coordinator",
//     5: "Team Lead",
//     6: "Co-Lead",
//     7: "Member",
//   };
//   //Getting Members from Server
//   const response = await fetch(`${SERVER}/items/teams`);
//   const allTeamResponse = await response.json();
//   const allTeamData = allTeamResponse.data;
//   const coordinatorIndex = [
//     positionData["1"],
//     positionData["2"],
//     positionData["3"],
//     positionData["4"],
//     "1",
//     "2",
//     "3",
//     "4",
//   ];
//   const memberIndex = [
//     positionData["5"],
//     positionData["6"],
//     positionData["7"],
//     "5",
//     "6",
//     "7",
//   ];
//   const coordinatorsData = allTeamData.filter((member) =>
//     coordinatorIndex.includes(member.position)
//   );
//   const membersData = allTeamData.filter((member) =>
//     memberIndex.includes(member.position)
//   );

// const mentorsData = totalDataArray.filter(member => member.position === "Mentor");

//   return {
//     props: {
//       coordinators: coordinatorsData,
//       members: membersData,
//   mentors: mentorsData,
//     },
//     revalidate: 600,
//   };
// }

const Layout = () => {
  return <div>Teams Page</div>;
};

export default Layout;
