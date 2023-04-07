import React from "react";
import { Container } from "./style";
import Basic from "./Basic";
import Api from '../Api'
import { data } from '../../data/api'
import { Bio, Text, Mark } from '../Bio'

import Disabled from "./Disabled";
import TextAndIcon from "./TextAndIcon";
import TwoSizes from "./TwoSizes";
import Loading from "./Loading";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
export default () => {
    return (
        <Container>
            <Bio title='Switch' bio="To toggle an operation">
                <Text>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</Text>
                <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
                <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
                <Mark>Primary button: indicate the main action, one primary button at most in one section.</Mark>
            </Bio>
            <CardBody>
                <Card
                    bio="basic switch accepts size, bgChecked, bgNotChecked props"
                    title="Basic"
                    Component={
                        <Container>
                            <Basic
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="Large"
                                id="basic-switch"
                            />
                            <Basic size="medium" id="basic-switch-medium" />
                            <Basic
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="small"
                                id="basic-switch-small"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="disabled switch accepts size, bgChecked, bgNotChecked props"
                    title="Disabled"
                    Component={
                        <Container>
                            <Disabled
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="Large"
                                id="disabled-switch"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="on and off switch accepts textOn, textOff, size, bgChecked, bgNotChecked props"
                    title="on and off"
                    Component={
                        <Container>
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="large"
                                id="onOff-text-and-icon-switch"
                                textOn="on"
                                textOff="off"
                            />
                            <p>tryout </p>
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="large"
                                id="onOff-text-and-icon-switch-large2"
                                textOn="yes"
                                textOff="no"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="medium"
                                id="onOff-text-and-icon-switch-medium2"
                                textOn="yes"
                                textOff="no"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="medium"
                                id="onOff-text-and-icon-switch-medium"
                                textOn="on"
                                textOff="off"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="small"
                                id="onOff-text-and-icon-switch-small"
                                textOn="on"
                                textOff="off"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="tick and cross switch accepts size, bgChecked, bgNotChecked props"
                    title="with icon"
                    Component={
                        <Container>
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="text-and-icon-switch-tick-x-large"
                                textOn="&#10004;"
                                textOff="&#x2716;"
                                size="large"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="text-and-icon-switch-tick-x-medium"
                                textOn="&#10004;"
                                textOff="&#x2716;"
                                size="medium"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="text-and-icon-switch-tick-x-small"
                                textOn="&#10004;"
                                textOff="&#x2716;"
                                size="small"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="1 and 0 switch accepts size, bgChecked, bgNotChecked props"
                    title="1 and 0 "
                    Component={
                        <Container>
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="large"
                                id="text-and-icon-switch-0-1-large"
                                textOn="1"
                                textOff="0"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="medium"
                                id="text-and-icon-switch-0-1-medium"
                                textOn="1"
                                textOff="0"
                            />
                            <TextAndIcon
                                bgNotChecked="purple"
                                bgChecked="red"
                                size="small"
                                id="text-and-icon-switch-0-1-small"
                                textOn="1"
                                textOff="0"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="basic three sizes switch accepts size, bgChecked, bgNotChecked props"
                    title="Size"
                    Component={
                        <Container>
                            <TwoSizes
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="two-sizes-switch-small"
                                size="small"
                            />
                            <TwoSizes
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="two-sizes-switch-medium"
                                size="medium"
                            />
                            <TwoSizes
                                bgNotChecked="purple"
                                bgChecked="red"
                                id="two-sizes-switch-large"
                                size="large"
                            />
                        </Container>
                    }
                ></Card>
                <Card
                    bio="loading switch accepts loading, size, bgChecked, bgNotChecked props"
                    title="Loading"
                    Component={
                        <Container>
                            <Loading
                                bgNotChecked="purple"
                                bgChecked="red"
                                loading={true}
                                id="loading-switch-large"
                                size="large"
                            />
                            <Loading
                                bgNotChecked="purple"
                                bgChecked="red"
                                loading={true}
                                id="loading-switch-medium"
                                size="medium"
                            />
                            <h5>Loading="false"</h5>
                            <Loading
                                bgNotChecked="purple"
                                bgChecked="red"
                                loading={false}
                                id="loading-switch-small"
                                size="small"
                            />
                        </Container>
                    }
                ></Card>
            </CardBody>
            <Api data={data} headerContent="api explanation || important definition" />
        </Container>
    );
};
