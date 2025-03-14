import React from "react";
import Image from "next/image";

interface Story {
  color: string;
  image: string;
  mp3: string;
  name: string;
  date: string;
}

export const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div
      className={`w-full max-w-md p-4 mx-auto rounded-lg shadow-xl ${story.color}`}
    >
      <div className="max-w-sm mx-auto space-y-6">
        <div className="w-full h-full flex flex-col p-4 rounded-lg bg-black/40">
          <div className="">
            <div className="">
              <Image
                src={story.image}
                alt="story image"
                width={1000}
                height={1000}
                className="object-cover rounded w-[350px] h-[250px]"
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <audio controls src={story.mp3}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
          <h1 className="font-semibold text-lg text-center text-white mt-3">
            {story.name}
            <span className="block text-sm text-gray-200">({story.date})</span>
          </h1>
        </div>
      </div>
    </div>
  );
};