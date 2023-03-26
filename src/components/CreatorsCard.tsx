import React, { HTMLAttributes } from "react";
import Text from "./Text";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { SocialButtons } from "./SocialButtons";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  links: [{ github?: string; instagram?: string; linkedIn?: string }];
}

export function CreatorsCard({ name, links }: ICardProps) {
  const screenWidth = window.screen.width;

  console.log(links[0].github);

  function handleButtons(
    links: [{ github?: string; instagram?: string; linkedIn?: string }]
  ) {
    if (links[0].github && links[0].instagram && links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" />
          <SocialButtons link={links[0].instagram} social="instagram" />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" />
        </>
      );
    } else if (links[0].github && links[0].instagram && !links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" />
          <SocialButtons link={links[0].instagram} social="instagram" />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" disabled />
        </>
      );
    } else if (links[0].github && !links[0].instagram && !links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" />
          <SocialButtons
            link={links[0].instagram}
            social="instagram"
            disabled
          />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" disabled />
        </>
      );
    } else if (links[0].github && !links[0].instagram && links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" />
          <SocialButtons
            link={links[0].instagram}
            social="instagram"
            disabled
          />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" />
        </>
      );
    } else if (!links[0].github && !links[0].instagram && links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" disabled />
          <SocialButtons
            link={links[0].instagram}
            social="instagram"
            disabled
          />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" />
        </>
      );
    } else if (!links[0].github && links[0].instagram && !links[0].linkedIn) {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" disabled />
          <SocialButtons link={links[0].instagram} social="instagram" />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" disabled />
        </>
      );
    } else {
      return (
        <>
          <SocialButtons link={links[0].github} social="github" disabled />
          <SocialButtons
            link={links[0].instagram}
            social="instagram"
            disabled
          />
          <SocialButtons link={links[0].linkedIn} social="linkedIn" disabled />
        </>
      );
    }
  }

  if (links[0].github) {
    return (
      <>
        {screenWidth <= 500 ? (
          <div className="bg-blue-500 w-full px-8 pb-2 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
            <div className="absolute -top-[25%]">
              <img
                src={`${links[0].github}.png`}
                alt={`${name} Picture`}
                className="rounded-full w-16 h-16 ring-2 ring-orange-500"
              />
            </div>
            <div className="pt-8">
              <Text size="xlg" weight="black" uppercase>
                {name}
              </Text>
            </div>
            <div className="flex gap-8 pt-2">{handleButtons(links)}</div>
          </div>
        ) : (
          <div className="bg-blue-500 w-full px-8 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
            <div className="absolute -top-[25%]">
              <img
                src={`${links[0].github}.png`}
                alt={`${name} Picture`}
                className="rounded-full w-16 h-16 ring-2 ring-orange-500"
              />
            </div>
            <div className="pt-8">
              <Text size="xlg" weight="black" uppercase>
                {name}
              </Text>
            </div>
            <div className="flex gap-8 pt-2">{handleButtons(links)}</div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {screenWidth <= 500 ? (
          <div className="bg-blue-500 w-full px-8 pb-2 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
            <div className="absolute -top-[25%]">
              <img
                src={
                  "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                }
                alt={`${name} Picture`}
                className="rounded-full w-16 h-16 ring-2 ring-orange-500"
              />
            </div>
            <div className="pt-8">
              <Text size="xlg" weight="black" uppercase>
                {name}
              </Text>
            </div>
            <div className="flex gap-8 pt-2">{handleButtons(links)}</div>
          </div>
        ) : (
          <div className="bg-blue-500 w-full px-8 h-32 rounded-md items-center justify-center flex flex-col relative mb-4">
            <div className="absolute -top-[25%]">
              <img
                src={
                  "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                }
                alt={`${name} Picture`}
                className="rounded-full w-16 h-16 ring-2 ring-orange-500"
              />
            </div>
            <div className="pt-8">
              <Text size="xlg" weight="black" uppercase>
                {name}
              </Text>
            </div>
            <div className="flex gap-8 pt-2">{handleButtons(links)}</div>
          </div>
        )}
      </>
    );
  }
}
