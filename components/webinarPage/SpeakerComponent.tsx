import React from "react";
import SpeakerCard from "./SpeakerCard";

interface SpeakerComponentProps {
  data: {
    Name: string;
    Position: string;
    LinkedIn: string;
    Image: {
      url: string;
    };
  }[];
  description: string;
}

const SpeakerComponent: React.FC<SpeakerComponentProps> = ({ data, description }) => {
  return (
    <div>
      <section className="md:py-8 py-4">
        <p className="leading-relaxed mt-2 mb-4 text-center text-lg text-gray-800 font-bold">
          || {description} ||
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 text-center py-4">
          Our Speakers for the event
        </h2>

        <div className="flex flex-wrap justify-around py-9">
          {data.map((item) => (
            <SpeakerCard
              key={item.LinkedIn}
              name={item.Name}
              title={item.Position}
              linkedin={item.LinkedIn}
              image={item.Image.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpeakerComponent;
