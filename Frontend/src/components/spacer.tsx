import React from "react";

interface SpacerProps {
  height: string; // Define 'height' as a string type, since CSS heights are strings (e.g., '20px')
}

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ height: height || '0px' }} />;
};

export default Spacer;
