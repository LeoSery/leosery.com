import React, { useState } from 'react';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import { extractYoutubeId } from '../../../utils/youtube';
import Head from 'next/head';

const YoutubeSection = ({ youtubeVideo, title = 'Project video', size = "double", uploadDate, description, duration }) => {
  const sizeClasses = { single: "", double: "md:col-span-2" };
  const [playing, setPlaying] = useState(false);
  const videoId = extractYoutubeId(youtubeVideo);

  if (!videoId)
  {
    return null;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  const normalizeDate = (date) => {
    if (!date) return undefined;
    if (/^\d{4}-\d{2}$/.test(date)) return `${date}-01`;
    return date;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": description || title,
    "description": title,
    "thumbnailUrl": thumbnailUrl,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    ...(uploadDate && { "uploadDate": normalizeDate(uploadDate) }),
    ...(duration && { "duration": duration })
    };

  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
    <section
      id="project-video"
      aria-label="Project video"
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-4 md:p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4 flex items-center gap-2">
        <FaYoutube className="text-red-500" aria-hidden="true" />
        Video
      </h2>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="group absolute inset-0 w-full h-full cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-[#ff9f1c]"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            type="button"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full
                              bg-red-600 group-hover:bg-red-500
                              shadow-lg group-hover:scale-110
                              transition-all duration-200">
                <FaPlay className="text-white text-xl ml-1" aria-hidden="true" />
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
    </>
  );
};

export default YoutubeSection;