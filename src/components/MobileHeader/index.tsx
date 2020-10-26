import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQGgSJQeBllWQg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=oHkga5_SsUc7LMNejTLt4WJ6NmOSVfvBiNwklB0XmZY" />
          <SearchInput placeholder="Pesquisar" />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;