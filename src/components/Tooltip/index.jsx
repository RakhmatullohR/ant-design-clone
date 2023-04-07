import React from "react";
import Tooltip from "./Tooltip";
import { Container, InnerWrapper, PlacementContainer, Colors } from "./style";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
import Button from '../../components/Buttons/Normal'
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Mark } from "../Bio";


export default () => {
    return (
        <Container>
            <Bio title="Tooltip" bio="A simple text popup tip.">
                <Mark>
                    The tip is shown on mouse enter, and is hidden on mouse
                    leave.
                </Mark>
                <Mark>
                    The Tooltip doesn't support complex text or operations.
                </Mark>
                <Mark>
                    It's often used instead of the html title attribute.
                </Mark>
            </Bio>
            <CardBody>

                <Card
                    bio="Basic hover tooltip with text"
                    title="Basic Text"
                    Component={
                        <Tooltip
                            size="Large"
                            direction="top"
                            content="Content tooltip bottom"
                        >
                            Hover me
                        </Tooltip>
                    }
                />
                <Card
                    bio="Buttons with different Large, Medium, Small sizes"
                    title="Buttons with Sizes"
                    Component={
                        <InnerWrapper>
                            <Tooltip size="small" direction="top" content="Content tooltip bottom">
                                <Button Default title="Small Tooltip with button" size="small" />
                            </Tooltip>
                            <Tooltip size="medium" direction="top" content="Content tooltip bottom">
                                <Button Default title="Med Tooltip with button" size="medium" />
                            </Tooltip>
                            <Tooltip size="large" direction="top" content="Content tooltip bottom">
                                <Button Default title=" Large Tooltip with button " size="large" />
                            </Tooltip>
                        </InnerWrapper>
                    }
                />
                <Card
                    bio="Basic hover tooltip with text"
                    title="Placement"
                    Component={
                        <PlacementContainer>
                            <PlacementContainer.Top>
                                <Tooltip size="large" direction="top" content="Content tooltip bottom">
                                    <Button Default title="Top Tooltip" size="large" />
                                </Tooltip>
                                <Tooltip size="large" direction="top" content="Content tooltip bottom">
                                    <Button Default title="Top Tooltip" size="large" />
                                </Tooltip>
                                <Tooltip size="large" direction="top" content="Content tooltip bottom">
                                    <Button Default title="Top Tooltip" size="large" />
                                </Tooltip>
                            </PlacementContainer.Top>
                            <PlacementContainer.Layout>

                                <PlacementContainer.Left>
                                    <Tooltip size="large" direction="left" content="Content tooltip bottom">
                                        <Button Default title="Left Tooltip" size="large" />
                                    </Tooltip>
                                    <Tooltip size="large" direction="left" content="Content tooltip bottom">
                                        <Button Default title="Left Tooltip" size="large" />
                                    </Tooltip>
                                </PlacementContainer.Left>
                                <PlacementContainer.Right>
                                    <Tooltip size="large" direction="right" content="Content tooltip bottom">
                                        <Button Default title="Right Tooltip" size="large" />
                                    </Tooltip>
                                    <Tooltip size="large" direction="right" content="Content tooltip bottom">
                                        <Button Default title="Right Tooltip" size="large" />
                                    </Tooltip>
                                </PlacementContainer.Right>
                            </PlacementContainer.Layout>
                            <PlacementContainer.Bottom>
                                <Tooltip size="large" direction="bottom" content="Content tooltip bottom">
                                    <Button Default title="Bottom Tooltip" size="large" />
                                </Tooltip>
                                <Tooltip size="large" direction="bottom" content="Content tooltip bottom">
                                    <Button Default title="Bottom Tooltip" size="large" />
                                </Tooltip>
                                <Tooltip size="large" direction="bottom" content="Content tooltip bottom">
                                    <Button Default title="Bottom Tooltip" size="large" />
                                </Tooltip>
                            </PlacementContainer.Bottom>
                        </PlacementContainer>
                    }
                />
                <Card
                    bio="Basic hover tooltip with text"
                    title="Placement"
                    Component={
                        <Colors>
                            <Tooltip size="large" bgColor="red" direction="top" content="Content tooltip bottom">
                                <Button Default title="red" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="black" direction="top" content="Content tooltip bottom">
                                <Button Default title="black" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="green" direction="top" content="Content tooltip bottom">
                                <Button Default title="green" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="blue" direction="top" content="Content tooltip bottom">
                                <Button Default title="blue" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="pink" direction="top" content="Content tooltip bottom">
                                <Button Default title="pink" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="cany" direction="top" content="Content tooltip bottom">
                                <Button Default title="cany" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="yellow" direction="top" content="Content tooltip bottom">
                                <Button Default title="yellow" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="orange" direction="top" content="Content tooltip bottom">
                                <Button Default title="orange" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="magenta" direction="top" content="Content tooltip bottom">
                                <Button Default title="magenta" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="volcano" direction="top" content="Content tooltip bottom">
                                <Button Default title="volcano" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="gold" direction="top" content="Content tooltip bottom">
                                <Button Default title="gold" size="large" />
                            </Tooltip>
                            <Tooltip size="large" bgColor="lime" direction="top" content="Content tooltip bottom">
                                <Button Default title="lime" size="large" />
                            </Tooltip>
                        </Colors>
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
