import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Card from "../DetailsCard";
import Button from "../Buttons/Normal";
import { CardBody } from "../Styles";
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Text, Mark } from "../Bio";
import ProgressBar from "./Bar";
import ProgressCircle from "./Circle";

export default () => {
    const [completed, setCompleted] = useState(10);

    const add = () => {
        setCompleted((prev) => {
            if (completed === 100) {
                return 100;
            } else {
                return prev + 10;
            }
        });
    };
    const minus = () => {
        setCompleted((prev) => {
            if (completed === 0) {
                return 0;
            } else {
                return prev - 10;
            }
        });
    };
    const [COMPLETED, SETCOMPLETED] = useState(10);

    const ADD = () => {
        SETCOMPLETED((prev) => {
            if (COMPLETED === 100) {
                return 100;
            } else {
                return prev + 10;
            }
        });
    };
    const MINUS = () => {
        SETCOMPLETED((prev) => {
            if (COMPLETED === 0) {
                return 0;
            } else {
                return prev - 10;
            }
        });
    };
    return (
        <Container>
            <Bio
                title="Progress"
                bio="Display the current progress of an operation flow."
            >
                <Text>
                    If it will take a long time to complete an operation, you
                    can use Progress to show the current progress and status.
                </Text>
                <Mark>
                    When an operation will interrupt the current interface, or
                    it needs to run in the background for more than 2 seconds.
                </Mark>
                <Mark>
                    When you need to display the completion percentage of an
                    operation.
                </Mark>
            </Bio>
            <CardBody>
                <Card
                    title="basic with sizes"
                    bio="small medium and large sizes."
                    Component={
                        <Wrapper>
                            <ProgressBar
                                size="small"
                                percent={30}
                                showInfo={true}
                            />
                            <ProgressBar
                                size="medium"
                                percent={30}
                                showInfo={false}
                            />
                            <ProgressBar
                                size="large"
                                percent={30}
                                showInfo={false}
                            />
                        </Wrapper>
                    }
                />
                <Card
                    title="basic with status"
                    bio="active, success and exception statuses."
                    Component={
                        <Wrapper>
                            <ProgressBar
                                size="small"
                                percent={30}
                                showInfo={true}
                                status="active"
                            />
                            <ProgressBar
                                size="medium"
                                percent={30}
                                showInfo={true}
                                status="success"
                            />
                            <ProgressBar
                                size="large"
                                percent={30}
                                showInfo={true}
                                status="exception"
                            />
                        </Wrapper>
                    }
                />
                <Card
                    title="dynamic"
                    bio="dynamically increasing or decreasing the value"
                    Component={
                        <Wrapper>
                            <ProgressCircle
                                size="large"
                                percent={COMPLETED}
                                status="active"
                                showInfo={true}
                            />
                            <Button
                                Default
                                title="&#10010;"
                                size="large"
                                onClick={ADD}
                            />
                            <Button
                                Default
                                title="&#9644;"
                                size="large"
                                onClick={MINUS}
                            />
                        </Wrapper>
                    }
                />
                <Card
                    title="dynamic"
                    bio="dynamically increasing or decreasing the value"
                    Component={
                        <Wrapper>
                            <ProgressBar
                                size="large"
                                type="circle"
                                percent={completed}
                                showInfo={true}
                            />
                            <Button
                                Default
                                title="&#10010;"
                                size="large"
                                onClick={add}
                            />
                            <Button
                                Default
                                title="&#9644;"
                                size="large"
                                onClick={minus}
                            />
                        </Wrapper>
                    }
                />
                <Card
                    title="circle with sizes"
                    bio="small medium and large sizes."
                    Component={
                        <Container>
                            <ProgressCircle
                                size="small"
                                percent={40}
                                status="active"
                                showInfo={true}
                            />
                            <ProgressCircle
                                size="medium"
                                percent={50}
                                status="active"
                                showInfo={true}
                            />
                            <ProgressCircle
                                size="large"
                                percent={60}
                                status="active"
                                showInfo={true}
                            />
                        </Container>
                    }
                />
                <Card
                    title="circle with status"
                    bio="active, success and exception statuses."
                    Component={
                        <Container>
                            <ProgressCircle
                                size="large"
                                percent={70}
                                status="success"
                                showInfo={true}
                            />
                            <ProgressCircle
                                size="large"
                                status="exception"
                                percent={10}
                                showInfo={true}
                            />
                            <ProgressCircle
                                size="large"
                                percent={60}
                                status="active"
                                showInfo={true}
                            />
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
