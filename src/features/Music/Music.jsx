import React, { useEffect, useState } from "react";
import MusicHooks from "../../hooks/MusicHooks";
import { Link } from "react-router-dom";
const Music = () => {
  const { getMusicTrack } = MusicHooks;
  const [musicTracks, setMusicTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMusicTrack();
        setMusicTracks(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Music Track</h1>
      <div className="space-y-2">
        {musicTracks.map((top, index) => {
          return (
            <div
              key={top.id}
              className="flex items-center space-x-4 rounded px-0 py-2 xs:px-2"
            >
              <p>{index + 1}</p>
              <img
                src={top.albumImageUrl}
                alt={top.title}
                className="w-16 h-16 rounded object-cover"
              />
              <Link
                to={top.songUrl}
                target="_blank"
                className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky w-full"
                rel="noopener noreferrer"
              >
                <p className="font-semibold">{top.title}</p>
                <p className="text-xs font-medium">{top.artist}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Music;
