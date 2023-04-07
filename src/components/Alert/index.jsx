import React from "react";
import Alert from "./Alert";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
import { Container } from "./style";
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Mark } from "../Bio";

export default () => {
    return (
        <Container>
            <Bio title="Alert" bio="Alert component for feedback.">
                <Mark>When you need to show alert messages to users.</Mark>
                <Mark>
                    When you need a persistent static container which is
                    closable by user actions.
                </Mark>
            </Bio>
            <CardBody>
                <Card
                    title="basic"
                    bio="The simplest usage for short messages."
                    Component={
                        <Container>
                            <Alert text="Success alert" type="success" />
                        </Container>
                    }
                />
                <Card
                    title="more types"
                    bio="There are 4 types of Alert: success, info, warning, error"
                    Component={
                        <Container>
                            <Alert text="Success Alert" type="success" />
                            <Alert text="Warning Alert" type="warning" />
                            <Alert text="Error Alert" type="error" />
                            <Alert text="Info Alert" type="info" />
                        </Container>
                    }
                />
                <Card
                    title="description"
                    bio="Additional description for alert message."
                    Component={
                        <Container>
                            <Alert
                                Icon
                                text="Success Alert"
                                type="success"
                                description="description description description description description"
                            />
                            <Alert
                                Icon
                                text="Warning Alert"
                                type="warning"
                                description="description description description description description"
                            />
                            <Alert
                                Icon
                                text="Error Alert"
                                type="error"
                                description="description description description description description"
                            />
                            <Alert
                                Icon
                                text="Info Alert"
                                type="info"
                                description="description description description description description"
                            />
                        </Container>
                    }
                />
                <Card
                    title="Closable"
                    bio="To show close button. "
                    Component={
                        <Container>
                            <Alert
                                Icon
                                closable
                                text="icon alert"
                                type="success"
                            />
                            <Alert
                                Icon
                                closable
                                text="Error Alert"
                                type="error"
                                description="description description description description description description description description description description  description description description description descriptiondescription description description description description"
                            />
                            <Alert
                                Icon
                                closable
                                text="Info Alert"
                                type="info"
                                description="description description description description description description description description description description description description description description descriptiondescription description description description description"
                            />
                        </Container>
                    }
                />
                <Card
                    title="Closable closeText"
                    bio="To show close button. closeText='close now' "
                    Component={
                        <Container>
                            <Alert
                                Icon
                                closable
                                closeText="close now"
                                text="icon alert"
                                type="success"
                            />
                            <Alert
                                Icon
                                closable
                                closeText="close now"
                                text="Error Alert"
                                type="error"
                                description="description description description description description description description description description description  description description description description descriptiondescription description description description description"
                            />
                            <Alert
                                Icon
                                closable
                                closeText="close now"
                                text="Info Alert"
                                type="info"
                                description="description description description description description description description description description description description description description description descriptiondescription description description description description"
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
