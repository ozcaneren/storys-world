import { Storys } from "@/lib/constants";
import { StoryCard } from "./StoryCard";
import Link from "next/link";

export default function LastStorys() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="font-medium text-2xl mb-6 text-center text-white">Yeni Masallar</h1>
        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-x-6 gap-y-8 items-center justify-center mb-6">
          {Storys.slice(-3)
            .reverse()
            .map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
        </div>
        <div className="py-6 w-full flex justify-center items-center">
          <button className="w-2/4 md:w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg py-2 px-4 rounded">
            <Link href="/masal">Tüm Masallar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
