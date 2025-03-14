"use client";

import { Storys } from "@/lib/constants";
import { StoryCard } from "@/components/StoryCard";

export default function Story() {
  return (
    <main className="">
      <h1 className="font-medium text-2xl mb-6 text-center text-white">Tüm Masallar</h1>
      <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-x-6 gap-y-8 items-center justify-center mb-6">
        {Storys.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </main>
  );
}
