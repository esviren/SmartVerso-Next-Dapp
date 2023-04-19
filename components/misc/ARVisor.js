import '@google/model-viewer';

const ARModelViewer = ({ src }) => {
    return (
    <model-viewer
      src={src}
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      camera-controls
    >
        <a slot="ar-button">
      👋 Ver En Realidad Aumentada
  </a>
    </model-viewer>
  );
};

export default ARModelViewer;