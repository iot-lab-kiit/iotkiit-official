const TeamHoverCard = ({ name, position, email, imageUrl }) => {
  return (
    <div>
      <div className="relative max-w-sm overflow-hidden transition duration-300 transform rounded-lg shadow-lg mx-3 md:mx-0 lg:hover:-translate-y-2  hover:shadow-2xl">
        <img
          className="object-cover w-full h-40 md:h-60 xl:h-60 "
          src={imageUrl}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-sm sm:text-xl font-bold text-gray-100">
            {name}
          </p>
          <p className="mb-4 text-xs sm:text-lg text-gray-100">{position}</p>
          <p className="break-all  mb-4 text-xs sm:text-base tracking-tighter  text-gray-400">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamHoverCard;
