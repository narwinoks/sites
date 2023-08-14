import React from "react";

const Music = () => {
  return (
    <section>
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Music Track</h1>
      <div className="space-y-2">
        <div class="flex items-center space-x-4 rounded px-0 py-2 xs:px-2">
          <p>01</p>
          <img
            src="https://placehold.co/600x400"
            alt=""
            class="w-16 h-16 rounded object-cover"
          />
          <a
            href="https://open.spotify.com/track/0TuttExCt1JaKvrX2DvIXU"
            class="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="font-semibold">NEMEN</p>
            <p class="text-xs font-medium">Sasya Arkhisna</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
