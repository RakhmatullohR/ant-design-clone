import React from "react";
import Card from "../DetailsCard";
import { Container, Container2 } from "./style";
import { CardBody } from "../Styles";
import Basic from "./Basic";
import Icon from "./Icon";
import { Bio, Text } from "../Bio";
import { data } from "../../data/api";
import Api from "../Api";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { User } from "@styled-icons/boxicons-regular/User";
import { Baidu } from "@styled-icons/boxicons-logos/Baidu"
import { At } from "@styled-icons/boxicons-regular/At"
import {
    // multiOptions,
    commonOptions,
    commonOptions2,
    commonOptions3,
    commonOptions4,
    commonOptions5,
    commonOptions6,
    commonOptions7,
    commonOptions8,
    commonOptions9,
} from "../../data/dropdownData";

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
            <CardBody>
                <Card
                    bio="The most basic dropdown menu."
                    title="disabled with arrow"
                    Component={
                        <Basic
                            disabled
                            arrow
                            size="large"
                            Key="basic-1"
                            hover
                            placeholder="select"
                            options={commonOptions}
                        />
                    }
                />
                <Card
                    bio="The most basic dropdown with hover prop"
                    title="basic"
                    Component={
                        <Basic
                            hover
                            size="large"
                            basic
                            Key="basic-2"
                            placeholder="select"
                            options={commonOptions2}
                        />
                    }
                />
                <Card
                    bio="The most basic dropdown menu."
                    title="basic with aligning top "
                    Component={
                        <Container2>

                            <Basic
                                top
                                arrow
                                size="large"
                                Key="basic-3"
                                placeholder="select"
                                options={commonOptions3}
                            />
                            {/* <Basic
                                top
                                arrow
                                size="large"
                                Key="basic-4"
                                placeholder="select"
                                options={multiOptions}
                            /> */}
                        </Container2>
                    }
                />
                <Card
                    bio="The most basic dropdown menu."
                    title="basic with aligning top"
                    Component={
                        <Basic
                            top
                            arrow
                            size="large"
                            Key="basic-4"
                            placeholder="select"
                            options={commonOptions4}
                        />
                    }
                />
                <Card
                    bio="A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."
                    title="Button with dropdown menu aligned to bottom"
                    Component={
                        <Container2>
                            <Icon
                                bottom
                                arrow
                                Key="basic-5"
                                Icon={Baidu}
                                size="large"
                                placeholder="select"
                                options={commonOptions5}
                            />
                            <Icon
                                top
                                Key="basic-6"
                                arrow
                                Icon={At}
                                size="large"
                                placeholder="select"
                                options={commonOptions6}
                            />
                            <Icon
                                Key="basic-7"
                                bottom
                                arrow
                                Icon={ThreeDots}
                                size="large"
                                placeholder="select"
                                options={commonOptions7}
                            />
                            <Icon
                                top
                                arrow
                                Key="basic-8"
                                Icon={User}
                                size="large"
                                placeholder="select"
                                options={commonOptions8}
                            />
                            <Icon
                                top
                                Key="basic-9"
                                arrow
                                loadingSpinner
                                size="large"
                                placeholder="select"
                                options={commonOptions9}
                            />
                        </Container2>
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
