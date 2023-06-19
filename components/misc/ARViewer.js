import '@google/model-viewer';
import ARIcon from "../../public/assets/camara-armin.png";
import Image from "next/image";


const ARModelViewer = ({ src, ios_src, alt }) => {
    return (
    <model-viewer
      src={src}
      ios-src={ios_src}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      ar-placement="floor"
      touch-action="pan-y"
      shadow-intensity="1"
      camera-controls
      xr-environment
    >
      <button slot="ar-button" className="justify-center">
      <Image
        src={"/assets/camara-armin.png"}
        height={48}
        width={48}
        alt="Icon AR"
      />
      Ver En 👋<br/>
       Realiadad Aumentada
      </button>
    </model-viewer>
  );
};

export default ARModelViewer;