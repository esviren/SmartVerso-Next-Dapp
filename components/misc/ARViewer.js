import '@google/model-viewer';

const ARModelViewer = ({ src, ios_src, alt }) => {
    return (
    <model-viewer
      src={src}
      ios-src={ios_src}
      alt={alt}
      ar
      ar-modes="webxr quick-look"
      ar-scale="auto"
      touch-action="pan-y"
      camera-controls
      xr-environment
    >
    </model-viewer>
  );
};

export default ARModelViewer;