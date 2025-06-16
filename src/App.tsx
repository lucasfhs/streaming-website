import React, { useState } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

type Content = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

const mockContents: Content[] = [
  {
    id: 1,
    title: "Sci-Fi Adventure",
    description: "A journey through space and time.",
    thumbnail: "/thumbs/scifi.jpg",
    videoUrl: "/videos/scifi.mp4",
  },
  {
    id: 2,
    title: "Comedy Hour",
    description: "Laughs guaranteed for the whole family.",
    thumbnail: "/thumbs/comedy.jpg",
    videoUrl: "/videos/comedy.mp4",
  },
  {
    id: 3,
    title: "Nature Documentary",
    description: "Explore the wonders of the natural world.",
    thumbnail: "/thumbs/nature.jpg",
    videoUrl: "/videos/nature.mp4",
  },
];

export default function App() {
  const [selectedContent, setSelectedContent] = useState<Content>(
    mockContents[0]
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col">
      <header className="p-4 bg-black flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold text-blue-500">HLSStreamingWebsite</h1>
      </header>

      <main className="flex flex-col md:flex-row gap-6 p-4 flex-1">
        {/* Main video */}
        <div className="flex-1">
          <AspectRatio.Root
            ratio={16 / 9}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <video
              key={selectedContent.videoUrl}
              src={selectedContent.videoUrl}
              controls
              className="w-full h-full object-cover"
            />
          </AspectRatio.Root>
          <h2 className="text-2xl font-semibold mt-4">
            {selectedContent.title}
          </h2>
          <p className="text-gray-400 mt-1">{selectedContent.description}</p>
        </div>

        {/* Thumbnails / Sidebar */}
        <div className="w-full md:w-1/3 space-y-4">
          <h3 className="text-lg font-medium">More to watch</h3>
          <div className="space-y-3">
            {mockContents.map((content) => (
              <div
                key={content.id}
                onClick={() => setSelectedContent(content)}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors
                  ${
                    selectedContent.id === content.id
                      ? "bg-gray-700 ring-2 ring-blue-500"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
              >
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-white">{content.title}</h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
