const EpisodeBox = ({
    title,
    description,
    guests,
    spotifyButtonImg,
    CardComponent,
    imgSrc,
    spotifyUrl,
  }) => {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
        <CardComponent>
          <img src={imgSrc} alt="Podcast Cover" className="w-full h-full object-cover" />
        </CardComponent>
  
  
        <div className="flex-1 mt-2">
          <h3 className="md:text-xl lg:text-2xl mb-1 font-semibold max-w-xl ">
            {title}
          </h3>
          <p className="md:text-[14px] lg:text-[18px] text-[14px] lg:mt-4 lg:mb-4 md:mt-2 md:mb-2 max-w-2xl">
            {description}
          </p>
          <p className="lg:text-[18px] md:text-[14px] text-[14px] font-bold mb-4">
            Guest Speakers: {guests.join(", ")}
          </p>
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={spotifyButtonImg}
              alt="Listen now on Spotify"
              className="w-auto h-8 md:h-10"
            />
          </a>
        </div>
      </div>
    );
  };
  
export default EpisodeBox;
  