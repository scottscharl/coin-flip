import * as React from 'react';

interface HeadsImageProps {
  darkMode?: boolean;
}

const HeadsImage: React.FC<HeadsImageProps> = ({ darkMode = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 484.3 484.3"
    fill="#B45309" // Use consistent color regardless of dark mode
  >
    <path d="M262.198 0c-28.1 0-55.1 6.1-80.3 18-32 14.9-59.1 38.4-78.4 68-19.9 30.5-30.4 65.8-30.4 102.3V214l-34 65c-6.5 12.5-6.8 25.3-.8 35.3s17.5 15.7 31.6 15.7h3.2v51.1c0 27.7 22.5 50.2 50.2 50.2.7 0 1.3 0 2-.1l34.9-5.2v35.1c0 .5 0 1.1.1 1.6 1 12.4 11 21.6 23.7 21.6 1.5 0 3-.1 4.6-.4l181.5-32.2c13.2-2.3 23.6-14.7 23.6-28.1v-101c36.1-35.3 56.6-84 56.6-134.5 0-103.7-84.4-188.1-188.1-188.1m108.8 306.8c-2.8 2.6-4.4 6.2-4.4 9.9v106.7c-.1.5-.8 1.4-1.3 1.6l-178.2 31.5-.1-46.5c0-3.9-1.7-7.7-4.7-10.2-2.5-2.1-5.6-3.3-8.8-3.3-.7 0-1.3 0-2 .1l-49.3 7.3c-12.4-.5-22.3-10.7-22.3-23.2v-64.6c0-7.5-6-13.5-13.5-13.5h-16.5c-5.1 0-7.8-1.4-8.5-2.6s-.8-4.3 1.6-8.8l35.6-67.9c1-1.9 1.5-4.1 1.5-6.3v-29c0-62.4 36.6-119.6 93.2-145.9h.1c21.5-10 44.7-15.1 68.8-15.1 88.8 0 161.1 72.3 161.1 161.1 0 45-19.1 88.3-52.3 118.7" />
    <path d="M147.898 202.6c-9.8 0-17.8 8-17.8 17.8s8 17.8 17.8 17.8 17.8-8 17.8-17.8-8-17.8-17.8-17.8" />
  </svg>
);

export default HeadsImage;
