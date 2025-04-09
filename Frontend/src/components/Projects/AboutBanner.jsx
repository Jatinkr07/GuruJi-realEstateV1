/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AboutBanner({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateDescription = (text) => {
    if (!text) return "No description available.";

    const plainText = text.replace(/<[^>]*>/g, " ");
    const words = plainText.trim().split(/\s+/);

    if (words.length <= 200) return text;

    const truncatedWords = words.slice(0, 200);
    return truncatedWords.join(" ") + "...";
  };

  const fullDescription = project.description || "No description available.";
  const truncatedDescription = truncateDescription(fullDescription);
  const needsReadMore = truncatedDescription !== fullDescription;

  return (
    <div className="container px-4 py-6 mx-auto max-w-7xl md:py-16">
      <h2 className="text-3xl font-[450] tracking-tight md:text-4xl text-center lg:mb-8 border-b-4 border-gray-900 lg:mx-[540px] pb-2">
        About
      </h2>
      <div className="flex flex-col lg:gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="relative -mt-16 lg:mt-0">
            <img
              src="/A-2.jpg"
              alt="Modern"
              className="object-contain h-[60vh] w-full hover:scale-105 transition-transform rounded-lg"
            />
          </div>
        </div>
        <div className="-mt-20 space-y-6 lg:mt-0 lg:w-1/2">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <div
              className="text-base leading-relaxed lg:text-lg text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: isExpanded ? fullDescription : truncatedDescription,
              }}
            />
            {needsReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 font-medium text-blue-600 hover:text-blue-800"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          <div className="space-y-4 text-base lg:text-lg font-[400]">
            <p className="flex gap-2">
              <span>🏢</span>
              <span className="font-[400]">Project:</span>
              <span className="font-[300]">{project.title}</span>
            </p>
            <p className="flex gap-2">
              <span>📍</span>
              <span className="font-[400]">Location:</span>
              <span className="font-[300]">{project.location}</span>
            </p>
            <p className="flex gap-2">
              <span>🏡</span>
              <span className="font-[400]">Size:</span>
              <span className="font-[300]">{project.size}</span>
            </p>
            <p className="flex gap-2">
              <span>💰</span>
              <span className="font-[400]">Price:</span>
              <span className="font-[300]">
                INR {project.price.toLocaleString()} onwards
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
