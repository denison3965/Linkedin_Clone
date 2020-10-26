import React from 'react';
// import { ProfileCircle } from '../MobileHeader/styles';

import { 
    Container,
    Wrapper,
    LinkedIcon,
    SearchInput,
    HomeIcon,
    NotificationIcon,  
    CaretDownIcon,
    ProfileCircle
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div className="left">
                  <LinkedIcon />
                  <SearchInput placeholder="Perquisar" />
              </div>

              <div className="right">
                  <nav>
                      <button className="active">
                          <HomeIcon />
                          <span>Inicio</span>
                      </button>
                      <button>
                          <NotificationIcon />
                          <span>Notificacoes</span>
                      </button>
                      <button>
                        <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQGgSJQeBllWQg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=oHkga5_SsUc7LMNejTLt4WJ6NmOSVfvBiNwklB0XmZY" />
                        <span>
                            Eu <CaretDownIcon />
                        </span>
                      </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  );
}

export default DesktopHeader;