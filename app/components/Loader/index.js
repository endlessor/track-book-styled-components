import React from 'react';
import Loader from 'react-loader-spinner';

import { LoaderContainer } from './styles';

function CustomLoader() {
  return (
    <LoaderContainer>
      <Loader type="Oval" color="#64be19" height="30" width="30" />
    </LoaderContainer>
  );
}

export default CustomLoader;
