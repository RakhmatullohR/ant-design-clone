import React from 'react';
import {
  Container,
  UserName,
  IconWrapper,
  NavItem,
  Right,
  activeStyle,
  Left,
  Title,
} from './style';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { SearchInput } from '../FormElements/Inputs';
import { useHistory } from 'react-router-dom';
// import { Youtube } from '@styled-icons/entypo-social/Youtube';
import { Telegram } from '@styled-icons/fa-brands/Telegram';
import { Github } from '@styled-icons/boxicons-logos/Github';

function Navbar() {
  const history = useHistory();
  return (
    <Container>
      <Left>
        <Logo
          onClick={() => history.push('/dashboard')}
          width='60px'
          height='60px'
        />
        <Title onClick={() => history.push('/dashboard')}>
          <span />
          <span />
          <span />
          <span />
          Ant Design Clone
        </Title>
        <SearchInput />
        <NavItem exact activeStyle={activeStyle} to='/docs'>
          Docs{' '}
        </NavItem>
        <NavItem exact activeStyle={activeStyle} to='/components'>
          Components{' '}
        </NavItem>
        <NavItem exact activeStyle={activeStyle} to='/resources'>
          Resources{' '}
        </NavItem>
        <NavItem exact activeStyle={activeStyle} to='/youtube'>
          YouTube{' '}
        </NavItem>
      </Left>
      <Right>
        <UserName>Rakhmatullo Rustamov</UserName>
        <IconWrapper href='https://t.me/RakhmatullohR'>
          <Telegram color='#0088CC' size='26px' />
        </IconWrapper>
        <IconWrapper href='https://github.com/RakhmatullohR'>
          <Github color='#35465C' size='30px' />
        </IconWrapper>
      </Right>
    </Container>
  );
}

export default Navbar;
