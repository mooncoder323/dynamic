import { useEffect } from "react";
import useWindowSize from "@hooks/useWindowSize";
import createAd from "@utils/createAd";
import doesAdExist from "@utils/doesAdExist";
import { Adsense } from "@ctrl/react-adsense";

export default function MasterAdComp({ ID }) {
  const { width } = useWindowSize();
  useEffect(() => {
    console.log("ID === ", ID);
    const desktopAdd = doesAdExist(ID);
    if (width >= 970 && !desktopAdd) {
      createAd({
        slotName: "/9577281/DB_Com_Desktop_ROS_Billboard",
        sizes: [
          [970, 90],
          [970, 250],
        ],
        ID,
      });
    }
  }, [width, ID]);
  //return null;
  return (
    <div className="lg:pb-8 lg:pt-5 bg-gray-100">
      <div className="container mx-auto hidden lg:flex flex-col justify-center items-center">
        <span className="text-xs mb-1">ADVERTISEMENT</span>
        <div id={ID} style={{ minWidth: "728px", minHeight: "90px" }}>
          <Adsense
            client="ca-pub-7640562161899788"
            slot="7259870550"
            style={{ display: "block" }}
            layout="in-article"
            format="fluid"
          />
        </div>
      </div>
    </div>
  );
}
