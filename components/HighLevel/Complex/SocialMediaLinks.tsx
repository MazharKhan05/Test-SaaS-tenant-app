import LinkedIn_Logo from "@../../public/linkedin.png";
import Facebook_Logo from "@../../public/facebook.png";
import Instagram_Logo from "@../../public/instagram.png";
import Twitter_Logo from "@../../public/twitter.png";
import Youtube_Logo from "@../../public/youtube.png";

import Image from "next/image";
import { SocialMediaInfo } from "@/lib/types/orgManagement";

export const SocialMediaLinks = ({ params }: { params: SocialMediaInfo }) => {
  return (
    <div className="flex items-center space-x-4">
      {params.facebookUrl ? (
        <a href={params.facebookUrl} title="Facebook" target="_blank">
          <Image width="24" height="24" src={Facebook_Logo} alt="Facebook" />
        </a>
      ) : (
        <></>
      )}

      {/* {params.appleProfileLink ? (
        <a href={params.appleProfileLink} title="Apple" target="_blank">
          <Image width="24" height="24" src={Apple_Logo} alt="Apple" />
        </a>
      ) : (
        <></>
      )} */}

      {params.twitterUrl ? (
        <a href={params.twitterUrl} title="Twitter" target="_blank">
          <Image width="24" height="24" src={Twitter_Logo} alt="Twitter" />
        </a>
      ) : (
        <></>
      )}

      {params.youTubeUrl ? (
        <a href={params.youTubeUrl} title="Youtube" target="_blank">
          <Image width="24" height="24" src={Youtube_Logo} alt="Youtube" />
        </a>
      ) : (
        <></>
      )}
      {params.instagramUrl ? (
        <a href={params.instagramUrl} title="Instagram" target="_blank">
          <Image width="24" height="24" src={Instagram_Logo} alt="Instagram" />
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
