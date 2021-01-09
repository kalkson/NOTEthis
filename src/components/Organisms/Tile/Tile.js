import React, { useRef } from 'react';
import propTypes from 'prop-types';

const Tile = Component => {
  const TileHOC = props => {
    const tile = useRef(null);

    return <Component {...props} ref={tile} />;
  };
  TileHOC.displayName = 'Tile';
  return TileHOC;
};

Tile.displayName = 'Tile';

Tile.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Tile;
