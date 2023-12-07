import { ImageData } from "@/lib/types/websiteManagement/page/components/core/data";
import Image from "next/image";

const OurImage = ({ data }: { data?: ImageData }) => {
  return (
    <div style={{ width: "100%" }}>
      {data ? (
        <Image
          id={data.id}
          src={
            data.url && data.url !== ""
              ? data.url
              : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" //data.url
          }
          alt={data.alt}
          sizes="100vw"
          width={0}
          height={0}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
          unoptimized={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default OurImage;
