import React from "react";
import { LoadingCard } from "./Basic";
import DelaySpinner from "./DelaySpinner";
import StateSpinner from "./StateSpinner";
import DotSpinner from "./DotSpinner";
import LoadingSpinner from "./LoadingSpinner";
import { Container, Wrapper } from "./style";
import { Spinner } from "./Basic/style";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Text } from "../Bio";

export default () => {
    return (
        <Container>
            <Bio
                title="Spinner"
                bio="A spinner for displaying loading state of a page or a section."
            >
                <Text>
                    When part of the page is waiting for asynchronous data or
                    during a rendering process, an appropriate loading animation
                    can effectively alleviate users' inquietude.
                </Text>
            </Bio>
            <CardBody>
                <Card
                    bio="A simple loading status. large, medium and small sizes"
                    title="Basic Spinner"
                    Component={
                        <Container>
                            <Spinner size="large" />
                            <Spinner size="medium" />
                            <Spinner size="small" />
                        </Container>
                    }
                />
                <Card
                    bio="A simple loading status. large, medium and small sizes"
                    title="StateSpinner"
                    Component={
                        <Container>
                            <StateSpinner size="large" />
                            <StateSpinner size="medium" />
                            <StateSpinner size="small" />
                        </Container>
                    }
                />
                <Card
                    bio="LoadingCard with switch to toggle loading spinner. It needs id for the switch to work correctly if using more than one"
                    title="LoadingCard"
                    Component={
                        <Wrapper>
                            <LoadingCard
                                loadingText="loading ..."
                                id="loadingCardId1"
                            />
                        </Wrapper>
                    }
                />
                <Card
                    bio="A simple loading status. large, medium and small sizes"
                    title="Loading Spinner"
                    Component={
                        <Container>
                            <LoadingSpinner size="large" />
                            <LoadingSpinner size="medium" />
                            <LoadingSpinner size="small" />
                        </Container>
                    }
                />
                <Card
                    bio="LoadingCard with switch to toggle loading spinner without the loadingText"
                    title="LoadingCard"
                    Component={
                        <Wrapper>
                            <LoadingCard id="loading-Card-Id-2" />
                        </Wrapper>
                    }
                />
                <Card
                    bio="A simple loading status. large, medium and small sizes"
                    title="DotSpinner"
                    Component={
                        <Container>
                            <DotSpinner size="large" />
                            <DotSpinner size="medium" />
                            <DotSpinner size="small" />
                        </Container>
                    }
                />
                <Card
                    bio="A simple loading status. large, medium and small sizes"
                    title="DelaySpinner"
                    Component={
                        <Container>
                            <DelaySpinner size="large" />
                            <DelaySpinner size="medium" />
                            <DelaySpinner size="small" />
                        </Container>
                    }
                />
            </CardBody>

            <Api
                data={data}
                headerContent="api explanation || important definition"
            />
        </Container>
    );
};
