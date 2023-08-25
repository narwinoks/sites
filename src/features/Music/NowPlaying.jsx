import React, { useEffect, useState } from "react";
import clsx from "clsx";
import MusicHooks from "../../hooks/MusicHooks";

const NowPlaying = () => {
  const { getMusicPlayNow } = MusicHooks;
  const [musicPlay, setMusicPlay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMusicPlayNow();
        setMusicPlay(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h2 className="font-bold my-3 text-2xl">Music</h2>
      <div
        className={clsx(
          "mb-4 flex items-center space-x-1 rounded bg-gray-200 p-3",
          "transition-[background-color] duration-300",
          "dark:bg-gray-700"
        )}
      >
        {!musicPlay?.isPlaying ? (
          <p>
            <strong>Not Playing</strong> - Spotify
          </p>
        ) : (
          <iframe
            style={{ borderRadius: "14px" }}
            src={musicPlay?.embedUrl}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default NowPlaying;
