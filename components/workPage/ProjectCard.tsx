import { ProjectCardProps } from "@/types";

const ProjectCard = (props: {key: string, project: ProjectCardProps}) => {
    return (
      <div className=" w-full pt-6 pb-20 px-3 swiper-pagination-bullet ">
    
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-44 p-4"
            style={{
              backgroundImage: `url(${props.project.imgUrl})`,
            }}
          ></div>
          <div className="p-4">
            <p className="uppercase tracking-wide leading-relaxed text-xs font-bold text-gray-700">
              {props.project.type}
            </p>
            <p className="text-2xl leading-relaxed  text-gray-900">
              {props.project.name}
            </p>
            <p className="text-gray-700 leading-relaxed ">{props.project.addr}</p>
          </div>
          <div className="flex p-4 border-t border-gray-300 text-gray-700">
            <div className="flex-1 inline-flex items-center px-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
              </svg>
              <p>
                <span className="text-gray-900 font-normal text-sm px-4 ">
                  <a
                    href={props.project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.project.linktext}
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
            <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
              Description:
            </div>
            <div className="flex items-center pt-2">
              <div>
                <p className="text-sm text-gray-700">{props.project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;