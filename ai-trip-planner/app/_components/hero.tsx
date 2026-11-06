"use client"

import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { ArrowDown, Globe2, Send } from "lucide-react";
import { useRouter } from "next/navigation";

const suggestions = [
  {
    title: "Create a New Trip",
    icon: <Globe2 className="h-5 w-5 text-blue-400" />,
  },
  {
    title: "Inspire Me Where to Go",
    icon: <Globe2 className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Globe2 className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="h-5 w-5 text-yellow-600" />,
  },
];

function Hero() {

  const {user} = useUser();

  const router = useRouter();

  const onSend = () => {
    if(!user)
    {
      router.push('/sign-in')
      return;
    }
    // Navigate to Create Trip Planner Web Screen
  }
  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="w-full max-w-3xl space-y-6 text-center">

        {/* Heading */}
        <h1 className="text-xl font-bold md:text-5xl">
          Hey, I'm Your Personal{" "}
          <span className="text-primary">
            Trip Planner
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg">
          Tell me what you want, and I'll handle the rest:
          flights, hotels, trip planner - all in seconds
        </p>

        {/* Input Box */}
        <div className="relative rounded-2xl border p-4 shadow">
          <textarea
            placeholder="Create a Trip for Pairs From New York"
            className="h-28 w-full resize-none border-none bg-transparent outline-none shadow-none focus:border-none focus:outline-none focus:ring-0"
          />

          <Button
            size="icon"
            className="absolute bottom-6 right-6 " onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Suggestions */}
        <div className="flex justify-center gap-5">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.title}
              className="flex cursor-pointer items-center gap-2 rounded-full border p-2 transition-all hover:bg-primary hover:text-white"
            >
              {suggestion.icon}

              <h2 className="text-sm">
                {suggestion.title}
              </h2>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <span>Not Sure Where to Start?</span>

          <strong className="cursor-pointer hover:text-primary">
            See How It Works
          </strong>

          <ArrowDown className="h-5 w-5" />
        </div>

        {/* Video Section */}
        <div className="pt-2">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="/hero.png"
            thumbnailAlt="AI Trip Planner preview"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;