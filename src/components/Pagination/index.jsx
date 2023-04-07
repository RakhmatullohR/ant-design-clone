import React from "react";
import Card from "../DetailsCard";
import Pagination from "./Basic";
import { Container } from "./style";

import { Bio, Text } from "../Bio";
import { data } from "../../data/api";
import Api from "../Api";



export default () => {
  return (
    <Container>
      <Bio title="Dropdown" bio="A dropdown list.">
        <Text>
          When there are more than a few options to choose from, you
          can wrap them in a Dropdown. By hovering or clicking on the
          trigger, a dropdown menu will appear, which allows you to
          choose an option and execute the relevant action.
              </Text>
      </Bio>
      {/* <CardBody> */}
      <Card
        bio="The most basic dropdown menu."
        title="Basic"
        Component={
          <Pagination
            total={100}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Card
        bio="The most basic dropdown menu."
        title="Page Counter"
        Component={
          <Pagination
            showPageCounter
            total={100}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Card
        bio="The most basic dropdown menu."
        title="Active"
        Component={
          <Pagination
            active={5}
            showPageCounter
            total={100}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Card
        bio="The most basic dropdown menu."
        title="Right Simplifier"
        Component={
          <Pagination
            active={5}
            showPageCounter
            total={200}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Card
        bio="The most basic dropdown menu."
        title="Left Simplifier"
        Component={
          <Pagination
            active={18}
            showPageCounter
            total={200}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Card
        bio="The most basic dropdown menu."
        title="Left & Left Simplifier"
        Component={
          <Pagination
            active={8}
            showPageCounter
            total={200}
            onClick={(e) => console.log('state', e)} />
        }
      />
      <Api
        data={data}
        headerContent="api explanation || important definition"
      />
    </Container>
  );
};
