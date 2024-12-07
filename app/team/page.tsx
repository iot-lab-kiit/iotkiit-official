import TeamHeader from '@/components/teamPage/TeamHeader';
import Mentors from "@/container/teams/Mentors";
import Coordinators from '@/container/teams/Coordinators';
import Team from '@/container/teams/Team';
import { positionData } from '@/types';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

const coordinatorIndex = [
  positionData['1'],
  positionData['2'],
  positionData['3'],
  positionData['4'],
  positionData['5'],
];
const memberIndex = [positionData['6'], positionData['7'], positionData['8']];

interface TeamData {
  coordinators: [MemberData];
  members: [MemberData];
  mentors: [MemberData];
}

export interface MemberData {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name: string;
  position: string;
  email: string;
  dob: string;
  year: string;
  branch: string;

  domain: string;
  avatar: string;
  linkedin: string;
  github: string;
  about: string;
  quote?: string;
  phone_number: string;
  whatsapp_number: string;
  rfid_tag?: string;
  heart_rate?: string;
  oxygen_level?: string;
}

const Layout = async () => {
  const propsData: TeamData = await getData();
  // console.log(propsData.members);
  return (
    <div>
      <TeamHeader />
      <Mentors mentors={propsData.mentors} />
      <Coordinators coordinators={propsData.coordinators} />
      <Team members={propsData.members} />
    </div>
  );
};

async function getData() {
  // Get All Team Data
  const response = await fetch(`${SERVER}/items/teams?limit=200`, {
    next: { revalidate: 2 },
  });
  const allTeamResponse = await response.json();
  const allTeamData = await allTeamResponse.data;
  const coordinatorsData = allTeamData.filter((member: MemberData) =>
    coordinatorIndex.includes(member.position),
  );
  const membersData = allTeamData.filter((member: MemberData) =>
    memberIndex.includes(member.position),
  );
  const mentorsData = allTeamData.filter(
    (member: MemberData) => member.position === "Mentor"
  );
  return {
    coordinators: coordinatorsData,
    members: membersData,
    mentors: mentorsData,
  };
}

export default Layout;
