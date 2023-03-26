import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Text from "./Text";
import clsx from "clsx";

interface ISocialButtons {
  link: string | undefined;
  social: "github" | "instagram" | "linkedIn";
  disabled?: boolean;
}

function handleRedirect(url: string) {
  window.open(`${url}`, "_blank");
}

function handleIcon(media: "github" | "instagram" | "linkedIn") {
  if (media === "github") {
    return <GithubIcon />;
  } else if (media === "instagram") {
    return <InstagramIcon />;
  } else {
    return <LinkedinIcon />;
  }
}

export function SocialButtons({ link, social, disabled }: ISocialButtons) {
  const screenWidth = window.screen.width;

  if (disabled) {
    return (
      <>
        {screenWidth <= 500 ? (
          <div
            className={clsx(
              "rounded-full bg-gray-500 transition-colors duration-150 cursor-not-allowed h-12 w-12 items-center justify-center flex"
            )}
          >
            <Text>{handleIcon(social)}</Text>
          </div>
        ) : (
          <div
            className={clsx(
              "rounded-full bg-gray-500 transition-colors duration-150 cursor-not-allowed h-12 w-12 items-center justify-center flex"
            )}
          >
            <Text>
              <Text>{handleIcon(social)}</Text>
            </Text>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {screenWidth <= 500 ? (
          <div
            className={clsx(
              "rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
            )}
            onClick={() => {
              handleRedirect(`${link}`);
            }}
          >
            <Text>{handleIcon(social)}</Text>
          </div>
        ) : (
          <div
            className={clsx(
              "rounded-full bg-orange-500 hover:bg-orange-300 transition-colors duration-150 cursor-pointer h-12 w-12 items-center justify-center flex"
            )}
            onClick={() => {
              handleRedirect(`${link}`);
            }}
          >
            <Text>
              <Text>{handleIcon(social)}</Text>
            </Text>
          </div>
        )}
      </>
    );
  }
}
