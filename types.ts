export const positionData = {
  1: "coordinator",
  2: "nontechcoordinator",
  3: "techcoordinator",
  4: "administrativecoordinator",
  5: "Faculty Coordinator",
  6: "teamlead",
  7: "colead",
  8: "member",
};
export interface WebinarProps {
  speakers: any;
  eventDescription: [];
}

export interface ProjectCardProps {
  id: string;
  status: string;
  sort: string | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name: string;
  type: string;
  link: string;
  linktext: string;
  imgUrl: string;
  addr: string;
  description: string;
}