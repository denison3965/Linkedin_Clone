import React from 'react';

import LoadingProps from '.'
import LoadingTrendingPanel from '../Shimmer/LoadingTrandingPanel';
import TrendingPanel from './TrendingPanel'

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}


    </Container>
  );
};

export default RightColumn;
