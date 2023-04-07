import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import {
  Container,
  Body,
  Wrapper,
  Line,
  Bio,
  Title,
  Footer,
  IconWrapper,
  Code,
} from './style';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { FileCopy } from '@styled-icons/material-outlined/FileCopy';
import { Telegram } from '@styled-icons/remix-line/Telegram';

const DetailsCard = ({ onClick, title, Component, bio, code }) => {
  const [expand, setExpand] = useState(false);
  const onChange = () => setExpand(!expand);

  return (
    <Container onClick={onClick}>
      <Body>{Component}</Body>
      <Bio>
        <Wrapper>
          <Line start={1} />
          <Title>{title || 'title'}</Title>
          <Line />
        </Wrapper>
        <Bio.Content>{bio || 'bio text should be in bio props'}</Bio.Content>
      </Bio>
      <Footer>
        <IconWrapper href='https://t.me/RakhamtullohR'>
          <Telegram color='#0088CC' size='24px' />
        </IconWrapper>
        <IconWrapper>
          <FileCopy size='20px' />
        </IconWrapper>
        <IconWrapper onClick={() => onChange()}>
          <CodeAlt size='22px' />
        </IconWrapper>
      </Footer>
      <Code expand={expand}>
        <SyntaxHighlighter
          language='typescript'
          style={docco}
          customStyle={{
            lineHeight: '0.75',
            fontSize: '1vw',
            background: 'inherit',
            overflow: 'hidden',
          }}
        >
          {code || `import Code from 'your component'`}
        </SyntaxHighlighter>
      </Code>
    </Container>
  );
};
export default DetailsCard;
