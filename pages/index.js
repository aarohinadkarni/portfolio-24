import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const options = ["CONCERTGOER.", "READER.", "TRAVELER.", "LEARNER.", "CHEF."];


export default function Home() {
  const [currentOption, setCurrentOption] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = options[currentOption];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentOption((prevOption) => (prevOption + 1) % options.length);
        }
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? 50 : 150);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentOption]);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] flex items-center justify-between bg-hatch`}
    >
      <div className="flex flex-col justify-center text-6xl max-w-lg text-pink">
        <p>
          HI! I&apos;M AAROHI NADKARNI, A{" "}
          <span className="hover:text-green transition-colors duration-300">DEVELOPER,</span>{" "}
          <span className="hover:text-green transition-colors duration-300">STUDENT,</span> &{" "}
          <span className="hover:text-green transition-colors duration-300">
          {displayedText}
          </span>
        </p>
      </div>

      <div className="w-300 h-300 rounded-full overflow-hidden border-4 border-purple">
        <Image
          src="/AarohiNadkarniHeadshot.JPEG"
          width="300"
          height="300"
          alt="Aarohi Nadkarni"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
