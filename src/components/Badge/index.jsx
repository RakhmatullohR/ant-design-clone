import React, { useState } from "react";
import { Container, Wrapper, Tester, Span } from "./style";
import BasicBadge from "./Badge";

import { Clock } from "@styled-icons/fa-regular/Clock";
import { Chrome } from '@styled-icons/boxicons-logos/Chrome'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { Github } from '@styled-icons/boxicons-logos/Github'

import Card from "../DetailsCard";
import Button from '../Buttons/Normal'
import { CardBody } from "../Styles";
import { Bio, Mark } from "../Bio";
import Api from "../Api";
import { data } from "../../data/api";

export default () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(98)
    return (
        <Container>
            <Bio
                title="Badge"
                bio="Small numerical value or status descriptor for UI elements."
            >
                <Mark>
                    Badge normally appears in proximity to notifications or user
                    avatars with eye-catching appeal, typically displaying
                    unread messages count.
                </Mark>
            </Bio>
            <CardBody>

                <Card
                    title="basic badge"
                    bio="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
                    Component={
                        <Wrapper>
                            <BasicBadge ><Tester /></BasicBadge>
                            <BasicBadge showZero><Tester /></BasicBadge>
                            <BasicBadge count={9}><Tester /></BasicBadge>
                            <BasicBadge count={100}><Tester /></BasicBadge>
                        </Wrapper>
                    }
                />
                <Card
                    title="basic badge"
                    bio="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
                    Component={
                        <Wrapper>
                            <BasicBadge Icon={Clock} ><Tester /></BasicBadge>
                            <BasicBadge Icon={FacebookCircle} size={20} ><Tester /></BasicBadge>
                            <BasicBadge Icon={Github} size={24} ><Tester /></BasicBadge>
                            <BasicBadge Icon={Chrome} size={28}><Tester /></BasicBadge>
                        </Wrapper>
                    }
                />
                <Card
                    title="StandAlone"
                    bio="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
                    Component={
                        <Wrapper alone>
                            <BasicBadge showZero bgColor="blue" />
                            <BasicBadge count={88} bgColor="orange" />
                            <BasicBadge bgColor="red" count={100} />
                        </Wrapper>
                    }
                />

                <Card
                    title="basic badge"
                    bio="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
                    Component={
                        <Wrapper>
                            <Container>
                                <BasicBadge showZero count={count1}><Tester /></BasicBadge>
                                <Button onClick={() => setCount1(count1 + 1)} Primary title="+" />
                                <Button onClick={() => setCount1(count1 - 1)} Primary title="-" />
                            </Container>
                            <Container>
                                <BasicBadge count={count2}><Tester /></BasicBadge>
                                <Button onClick={() => setCount2(count2 + 1)} Primary title="+" />
                                <Button onClick={() => setCount2(count2 - 1)} Primary title="-" />
                            </Container>
                        </Wrapper>
                    }
                />
                <Card
                    title="StandAlone Dot Sizes"
                    bio="standalone prop is when you want to render only the badge without any other element."
                    Component={
                        <>
                            <Wrapper alone>
                                <BasicBadge dot size="large" />
                                <BasicBadge dot size="medium" />
                                <BasicBadge dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge type="processing" dot size="large" />
                                <BasicBadge type="processing" dot size="medium" />
                                <BasicBadge type="processing" dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge type="error" dot size="large" />
                                <BasicBadge type="error" dot size="medium" />
                                <BasicBadge type="error" dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge type="warning" dot size="large" />
                                <BasicBadge type="warning" dot size="medium" />
                                <BasicBadge type="warning" dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge type="success" dot size="large" />
                                <BasicBadge type="success" dot size="medium" />
                                <BasicBadge type="success" dot size="small" />
                            </Wrapper>
                        </>
                    }
                />
                <Card
                    title="bgColor Props"
                    bio="standalone prop is when you want to render only the badge without any other element."
                    Component={
                        <>
                            <Wrapper alone>
                                <BasicBadge dot size="large" />
                                <BasicBadge dot size="medium" />
                                <BasicBadge dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge dotColor='lime' dot size="large" />
                                <BasicBadge dotColor='lime' dot size="medium" />
                                <BasicBadge dotColor='lime' dot size="small" />
                            </Wrapper>
                            <Wrapper alone>
                                <BasicBadge dotColor='black' dot size="large" />
                                <BasicBadge dotColor='black' dot size="medium" />
                                <BasicBadge dotColor='black' dot size="small" />
                            </Wrapper>
                        </>
                    }
                />
                <Card
                    title="type"
                    bio="success, warning, processing, error, default types"
                    Component={
                        <Container>
                            <BasicBadge type="processing" dot />
                            <Span style={{ margin: "15px" }}>processing</Span>
                            <BasicBadge type="success" dot />
                            <Span style={{ margin: "15px" }}>success</Span>
                            <BasicBadge type="warning" dot />
                            <Span style={{ margin: "15px" }}>warning</Span>
                            <BasicBadge type="default" dot />
                            <Span style={{ margin: "15px" }}>default</Span>
                            <BasicBadge type="error" dot />
                            <Span style={{ margin: "15px" }}>error</Span>
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
