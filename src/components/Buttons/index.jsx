import React from "react";
import Card from "../DetailsCard";
import { Container, GhostContainer } from "./style";
import { CardBody } from "../Styles";
import Icon from "./Icon";
import Normal from "./Normal";
import Loading from "./Loading";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { Download } from "@styled-icons/zondicons/Download";
import { Spinner } from "@styled-icons/fa-solid/Spinner";
import { PowerOff } from "@styled-icons/boxicons-regular/PowerOff";

export default () => {
    return (
        <Container>
            <CardBody>
                <Card
                    bio="Ant Design supports a default button size as well as a large and small size.
If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
                    title="test button"
                    Component={
                        <Container>
                            <Loading
                                title="click me"
                                size="large"
                                Icon={Spinner}
                                Primary
                                iconHidden={true}
                            />
                            <Loading
                                title="click me"
                                size="medium"
                                Icon={Spinner}
                                Primary
                                rounded
                            />
                            <Loading
                                size="small"
                                title="click me"
                                Icon={Spinner}
                                Primary
                                squared
                            />
                        </Container>
                    }
                />
                <Card
                    bio="There are primary button, default button, dashed button, text button and link button in antd."
                    title="normal"
                    Component={
                        <Container>
                            <Normal
                                Primary
                                title="primary button"
                                size="large"
                            />
                            <Normal Link title="link button" size="large" />
                            <Normal Dashed title="dashed button" size="large" />
                            <Normal
                                Default
                                title="default button"
                                size="large"
                            />
                            <Normal Text title="text button" size="large" />
                        </Container>
                    }
                />

                <Card
                    bio="Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property."
                    title="button with icon"
                    Component={
                        <Container>
                            <Icon
                                Icon={Search}
                                Default
                                title="default button"
                                size="large"
                            />
                            <Icon
                                Icon={Search}
                                Dashed
                                title="dashed button"
                                size="large"
                            />
                            <Icon
                                Icon={Search}
                                Primary
                                title="primary button"
                                size="small"
                            />
                            <Icon
                                Icon={Search}
                                Default
                                title="default button"
                                size="small"
                            />
                            <Icon
                                Icon={Search}
                                Dashed
                                title="dashed button"
                                size="small"
                            />
                            <Icon Icon={Search} Primary rounded size="small" />
                            <Icon Icon={Search} Default rounded size="medium" />
                            <Icon Icon={Search} Primary rounded size="large" />
                        </Container>
                    }
                />
                <Card
                    bio="To mark a button as disabled, add the disabled property to the Button."
                    title="disabled button"
                    Component={
                        <Container>
                            <Normal Primary title="primary " size="large" />
                            <Normal
                                Primary
                                disabled
                                title="primary disabled "
                                size="large"
                            />
                            <Normal Default title="default " size="large" />
                            <Normal
                                Default
                                disabled
                                title="default disabled "
                                size="large"
                            />
                            <Normal Dashed title="dashed " size="large" />
                            <Normal
                                Dashed
                                disabled
                                title="dashed disabled "
                                size="large"
                            />
                            <Normal Text title="text " size="large" />
                            <Normal
                                Text
                                disabled
                                title="text disabled "
                                size="large"
                            />
                            <Normal Link title="link  " size="large" />
                            <Normal
                                Link
                                disabled
                                title="link disabled "
                                size="large"
                            />
                            <Normal
                                Primary
                                Danger
                                title="primary danger "
                                size="large"
                            />
                            <Normal
                                Primary
                                Danger
                                disabled
                                title="primary danger disabled "
                                size="large"
                            />
                            <Normal
                                Text
                                Danger
                                title="Text danger "
                                size="large"
                            />
                            <Normal
                                Text
                                Danger
                                disabled
                                title="Text danger disabled "
                                size="large"
                            />
                            <Normal
                                Link
                                Danger
                                title="Link danger "
                                size="large"
                            />
                            <Normal
                                Link
                                Danger
                                disabled
                                title="Link danger disabled "
                                size="large"
                            />
                            <GhostContainer>
                                <Normal Ghost title="ghost" size="large" />
                                <Normal
                                    Ghost
                                    disabled
                                    title="ghost disabled"
                                    size="large"
                                />
                            </GhostContainer>
                        </Container>
                    }
                />
                <Card
                    bio="block property will make the button fit to its parent width."
                    title="block button"
                    Component={
                        <Container>
                            <Normal block title="block button" size="large" />
                            <Normal
                                Default
                                block
                                title=" default block button"
                                size="large"
                            />
                            <Normal
                                Primary
                                block
                                title=" primary block button"
                                size="large"
                            />
                            <Normal
                                Link
                                block
                                title=" link  block button"
                                size="large"
                            />
                            <Normal
                                Dashed
                                block
                                title=" dashed  block button"
                                size="large"
                            />
                        </Container>
                    }
                />
                <Card
                    bio="Ant Design supports a default button size as well as a large and small size.
If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
                    title="download button"
                    Component={
                        <Container>
                            <Icon size="large" Icon={Download} Primary />
                            <Icon
                                size="large"
                                Icon={Download}
                                Primary
                                rounded
                            />
                            <Icon
                                size="large"
                                Icon={Download}
                                Primary
                                squared
                            />
                            <Icon
                                size="large"
                                Icon={Download}
                                title="download"
                                Primary
                                squared
                            />
                        </Container>
                    }
                />
                <Card
                    bio="A loading indicator can be added to a button by setting the loading property on the Button."
                    title="loading button"
                    Component={
                        <Container>
                            <Loading size="large" Icon={Spinner} Primary />
                            <Loading
                                size="large"
                                title="loading"
                                Icon={Spinner}
                                Primary
                            />
                            <Loading
                                size="medium"
                                title="loading"
                                Icon={Spinner}
                                Primary
                            />
                            <Loading
                                size="large"
                                title="loading"
                                Icon={Spinner}
                                Primary
                            />
                            <Loading size="large" Icon={PowerOff} Primary />
                            <Loading
                                size="large"
                                title="loading"
                                Icon={PowerOff}
                                Primary
                            />
                            <Loading
                                size="medium"
                                title="loading"
                                Icon={PowerOff}
                                Primary
                            />
                            <Loading
                                size="large"
                                title="loading"
                                Icon={PowerOff}
                                Primary
                            />
                        </Container>
                    }
                />
                <Card
                    bio="Ghost property will make button's background transparent, it is commonly used in colored background."
                    title="ghost button"
                    Component={
                        <GhostContainer>
                            <Normal Ghost title="ghost" size="large" />
                            <Normal
                                Ghost
                                disabled
                                title="ghost disabled"
                                size="large"
                            />
                            <Normal Ghost title="ghost" size="large" />
                            <Normal
                                Ghost
                                Primary
                                title="ghost primary"
                                size="large"
                            />
                            <Normal
                                Ghost
                                Dashed
                                title="ghost dashed"
                                size="large"
                            />
                        </GhostContainer>
                    }
                />
                <Card
                    bio="danger is a property of button after antd 4.0."
                    title="danger button"
                    Component={
                        <Container>
                            <Normal
                                Danger
                                Default
                                title="danger default "
                                size="large"
                            />
                            <Normal
                                Danger
                                Link
                                title="danger link  "
                                size="large"
                            />
                            <Normal
                                Primary
                                Danger
                                title="danger primary"
                                size="large"
                            />
                            <Normal
                                Dashed
                                Danger
                                title="Dashed danger "
                                size="large"
                            />
                        </Container>
                    }
                />
            </CardBody>
        </Container>
    );
};
