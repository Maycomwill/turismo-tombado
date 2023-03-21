import React, { HTMLAttributes } from "react";
import Text from "./Text";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  name: String;
  links: {
    instagram?: String;
    github?: String;
    linkedIn?: String;
  };
}

export function CreatorsCard({ name, links }: ICardProps) {
  const screenWidth = window.screen.width;

  function handleRedirect(url: string) {
    window.open(`${url}`, "_blank");
  }

  return (
    <>
      {screenWidth <= 500 ? (
        <div className="bg-blue-500 w-full px-8 pb-2 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
          <div className="absolute -top-[25%]">
            <img
              src={`${links.github}.png`}
              alt={`${name} Picture`}
              className="rounded-full w-16 h-16 ring-2 ring-orange-500"
            />
          </div>
          <div className="pt-8">
            <Text size="xlg" weight="black" capitalize>
              {name}
            </Text>
          </div>
          <div className="flex gap-8 pt-2">
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.github}`);
              }}
            >
              <Text>
                <GithubIcon />
              </Text>
            </div>
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.instagram}`);
              }}
            >
              <Text>
                <InstagramIcon />
              </Text>
            </div>
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.linkedIn}`);
              }}
            >
              <Text>
                <LinkedinIcon />
              </Text>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-500 w-full px-8 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
          <div className="absolute -top-[25%]">
            <img
              src={`${links.github}.png`}
              alt={`${name} Picture`}
              className="rounded-full w-16 h-16 ring-2 ring-orange-500"
            />
          </div>
          <div className="pt-8">
            <Text size="xlg" weight="black" capitalize>
              {name}
            </Text>
          </div>
          <div className="flex gap-8 pt-2">
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.github}`);
              }}
            >
              <Text>
                <GithubIcon />
              </Text>
            </div>
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.instagram}`);
              }}
            >
              <Text>
                <InstagramIcon />
              </Text>
            </div>
            <div
              className="rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
              onClick={() => {
                handleRedirect(`${links.linkedIn}`);
              }}
            >
              <Text>
                <LinkedinIcon />
              </Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
