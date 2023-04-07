import React from 'react'
import { Container, Wrapper, Layout, Title } from './style'
import Card from '../DashboardCard'
import { useHistory } from 'react-router-dom'
import { Routes } from '../../utils/sidebar';
export default () => {
  const history = useHistory()
  return (
    <Layout>
      <Wrapper >
        <Title>General</Title>
        <Container>
          {
            Routes.map(({ title, path }, index) => (
              (path.includes('icons') || path.includes('typography') || path.includes('buttons')) &&
              <Card key={`${index}+1`} onClick={() => history.push(`${path}`)} title={title} />
            ))
          }
        </Container>
      </Wrapper>
      <Wrapper >
        <Title>Data Entery</Title>
        <Container>
          {
            Routes.map(({ title, path }, index) => (
              (path.includes('calendar') || path.includes('inputs') || path.includes('maps') || path.includes('wwitch') || path.includes('checkbox') || path.includes('/transfer') || path.includes('/upload') || path.includes('datePicker')) &&
              <Card key={`${index}+1`} onClick={() => history.push(`${path}`)} title={title} />
            ))
          }
        </Container>
      </Wrapper>
      <Wrapper >
        <Title>Navigation</Title>
        <Container>
          {
            Routes.map(({ title, path }, index) => (
              (path.includes('/dropdown') || path.includes('/menu')) &&
              <Card key={`${index}+1`} onClick={() => history.push(`${path}`)} title={title} />
            ))
          }
        </Container>
      </Wrapper>
      <Wrapper >
        <Title>Data Display</Title>
        <Container>
          {
            Routes.map(({ title, path }, index) => (
              (path.includes('/calendar') || path.includes('/badge') || path.includes('/card') || path.includes('/carousel') || path.includes('/collapse') || path.includes('/image') || path.includes('/pagination') || path.includes('/popover') || path.includes('/calendar') || path.includes('/avatar')) &&
              <Card key={`${index}+1`} onClick={() => history.push(`${path}`)} title={title} />
            ))
          }
        </Container>
      </Wrapper>
      <Wrapper >
        <Title>Feedback</Title>
        <Container>
          {
            Routes.map(({ title, path }, index) => (
              (path.includes('/alert') || path.includes('/drawer') || path.includes('/modal') || path.includes('/notification') || path.includes('/popConfirm') || path.includes('/progress') || path.includes('/spinner')) &&
              <Card key={`${index}+1`} onClick={() => history.push(`${path}`)} title={title} />
            ))
          }
        </Container>
      </Wrapper>
    </Layout>
  )
}