// src/pages/Login.jsx
// const CLIENT_ID = 'your-client-id'; // Replace with your real Client ID
// const REDIRECT_URI = 'http://localhost:5173/callback';
// const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
// const RESPONSE_TYPE = 'token';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* <a
        className="bg-white text-black px-8 py-4 rounded-full shadow-xl text-xl font-bold hover:scale-105 transition duration-300"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-library-read user-read-playback-state user-read-currently-playing`}
      >
        Login with Spotify
      </a> */}
    </div>
  );
};

export default Login;
