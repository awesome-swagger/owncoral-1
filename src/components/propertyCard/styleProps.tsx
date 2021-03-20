export const CardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  position: 'relative',
};

export const CardGradient: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background:
    'linear-gradient(180deg,rgba(78, 80, 79, 1) 0%,rgba(78, 80, 79, 0) 50%,rgba(78, 80, 79, 1) 100%)',
  zIndex: -1,
};
export const CardImg: React.CSSProperties = {
  width: '100%',
  position: 'absolute',
  left: '0%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -2,
};

export const ImgZoom: React.CSSProperties = {
  width: '100%',
  position: 'absolute',
  left: '0%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -2,
  animation: 'zoom 0.75s',
};
export const ImgZoomIn: React.CSSProperties = {
  width: '100%',
  position: 'absolute',
  left: '0%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -2,
  animation: 'zoomin 0.5s',
};
export const ImgZoomOut: React.CSSProperties = {
  width: '100%',
  position: 'absolute',
  left: '0%',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -2,
  animation: 'zoomout 0.5s',
};
