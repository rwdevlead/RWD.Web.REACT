import { useEffect, useState } from "react";

/**
 * LoadingScreen component displays an animated loading screen with a typewriter effect
 * for the text "<Hello World />" and a loading bar. Once the animation completes,
 * it calls the optional `onComplete` callback after a short delay.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} [props.onComplete] - Optional callback invoked when the loading animation finishes.
 * @returns {JSX.Element} The loading screen UI.
 */

export const LoadingScreen = ({ onComplete }) => {
  // State to track the portion of the full text currently displayed
  const [text, setText] = useState("");

  // TODO change this text The full text to animate using the typewriter effect
  const fullText = "<Hello World />";

  useEffect(() => {
    // Index to track how many characters to display
    let index = 0;

    // Start an interval to simulate typing effect every 100ms
    const interval = setInterval(() => {
      // Set text to a substring of the full text from 0 to current index
      setText(fullText.substring(0, index));
      index++;

      // Once we've typed out the whole string
      if (index > fullText.length) {
        // Ensure the full text is set (in case of timing issues)
        setText(fullText);

        // Stop the typing interval
        clearInterval(interval);

        // Wait 1 second before calling onComplete, if provided
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 100);

    // Cleanup the interval if the component unmounts
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Display the animated text with a blinking cursor */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      {/* Animated loading bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

/* tailwind defs https://kombai.com/tailwind/cheat-sheet/ */
