import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const trendingSongs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", image: "src/assets/img/song-thumb/oh-manapennae.png" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", image: "src/assets/img/song-thumb/dhaam_dhoom.png" },
  { id: 3, title: "Save Your Tears", artist: "The Weeknd", image: "src/assets/img/song-thumb/kodi.png" },
  { id: 4, title: "Calm Down", artist: "Rema", image: "src/assets/img/song-thumb/manithan.png" },
];

const popularArtists = [
  { id: 1, name: " A.R Rahman", image: "src/assets/img/arr-mix.jpg" },
  { id: 2, name: "yuvan Shanker Raja", image: "src/assets/img/yuvan.jpg" },
  { id: 3, name: "G.V Prakash", image: "src/assets/img/kolly-chill-out.jpg" },
  { id: 4, name: "Shreya Ghoshal", image: "src/assets/img/romantic-anirudh.jpg" },
];

const popularRadios = [
  { id: 1, title: "Hindi Hits", image: "src/assets/img/song-thumb/guru.png" },
  { id: 2, title: "LoFi Chill", image: "src/assets/img/munpani-kaadhal.jpg" },
  { id: 3, title: "Punjabi Beats", image: "src/assets/img/hip-hop-radio.jpg" },
  { id: 4, title: "Top Global", image: "src/assets/img/10s-romance-tamil.jpg" },
];

const Homescreen = () => {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[25rem] mr-2 mt-14 p-6 bg-zinc-800 rounded-xl h-[calc(100vh-4rem)] overflow-y-auto text-white space-y-10">
        
        {/* Trending Songs */}
        <section>
          <h2 className="text-xl font-bold mb-4">Trending Songs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingSongs.map(song => (
              <div key={song.id} className="bg-zinc-900 rounded-lg p-3 hover:bg-zinc-700 transition">
                <img src={song.image} alt={song.title} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-sm font-semibold">{song.title}</h3>
                <p className="text-xs text-gray-400">{song.artist}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section>
          <h2 className="text-xl font-bold mb-4">Popular Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularArtists.map(artist => (
              <div key={artist.id} className="bg-zinc-900 rounded-lg p-3 hover:bg-zinc-700 transition text-center">
                <img src={artist.image} alt={artist.name} className="w-24 h-24 mx-auto rounded-full mb-3 object-cover" />
                <h3 className="text-sm font-semibold">{artist.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Radio */}
        <section>
          <h2 className="text-xl font-bold mb-4">Popular Radio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRadios.map(radio => (
              <div key={radio.id} className="bg-zinc-900 rounded-lg p-3 hover:bg-zinc-700 transition text-center">
                <img src={radio.image} alt={radio.title} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-sm font-semibold">{radio.title}</h3>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Homescreen;
