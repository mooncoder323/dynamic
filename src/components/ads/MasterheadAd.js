import dynamic from "next/dynamic";
import useGlobalConfig from "@contexts/GlobalSiteContext";
const MasterAdComp = dynamic(() => import("./MasterAdComp"));

export default function MasterheadAd({ ID }) {
  // const config = useGlobalConfig();
  const config =  {
    siteConfigOptions: { showAd: true, showMailchimp: true },
    sidebarVideo: {
      showVideo: true,
      textBelowVideoOne: null,
      textBelowVideoTwo: null,
      vimeoVideoIdOne: "766377317",
      vimeoVideoIdTwo: null,
      showVideoTwo: null,
    },
    sidebarImage: {
      showImage: null,
      textBelowImage: null,
      imageUrl: {
        sourceUrl:
          "https://backend.dynamicbusiness.com/wp-content/uploads/2021/08/bermix-studio-F7DAQIDSk98-unsplash-scaled-e1642466307168.jpg",
        altText: "Hackers Lockdown guide",
        mediaDetails: { height: 377, width: 300 },
      },
    },
  };

  console.log(`config ===`, config);
  const showAd = config?.siteConfigOptions?.showAd ?? false;

  return <>{showAd ? <MasterAdComp ID={ID} /> : null}</>;
}
