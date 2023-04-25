import '@google/model-viewer';

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
    </model-viewer>
  );
};

export default ARModelViewer;