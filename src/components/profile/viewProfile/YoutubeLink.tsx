import React from "react";
import FormDataType from "../../../utils/DeclareType";

interface Props {
  profile: FormDataType | null;
}

const YoutubeLink = ({ profile }: Props) => {
  console.log(profile?.video);

  // Function to convert shortened YouTube link to embed format
  const convertToEmbedUrl = (url: string) => {
    // Check if the URL is in the standard format
    const standardUrlMatch = url.match(/(?:youtube\.com\/.*v=)([^&]+)/);
    // Check if the URL is in the shortened youtu.be format
    const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/);

    const videoId = standardUrlMatch
      ? standardUrlMatch[1]
      : shortUrlMatch
      ? shortUrlMatch[1]
      : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <div>
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {profile?.video?.map((link, index) => (
            <div key={index}>
              <iframe
                width="384"
                height="220"
                className="rounded-lg"
                src={convertToEmbedUrl(link)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeLink;
