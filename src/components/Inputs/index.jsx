import React from "react";
import { Container } from "./style";
import { User } from "@styled-icons/boxicons-regular/User";
import NormalInput from "./Normal";
import InputIcon from "./Icon";
import InputPassword from "./Password";
import InputNumber from "./Number";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Text, Mark } from "../Bio";


export default () => (
    <Container>
        <Bio title="Input" bio="To get user input">
            <Text>
                A basic widget for getting the user input is a text field.
                Keyboard and mouse can be used for providing or changing data.
            </Text>
            <Mark>A user input in a form field is needed.</Mark>
        </Bio>
        <CardBody>
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Normal Default"
                Component={
                    <Container>
                        <NormalInput size="small" placeholder="Normal  Default Small" />
                        <NormalInput size="medium" placeholder="Normal Default  Medium" />
                        <NormalInput size="large" placeholder="Normal  Default  Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Normal Danger"
                Component={
                    <Container>
                        <NormalInput type="danger" size="small" placeholder="Normal Danger Small" />
                        <NormalInput type="danger" size="medium" placeholder="Normal Danger Medium" />
                        <NormalInput type="danger" size="large" placeholder="Normal Danger Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Normal Success"
                Component={
                    <Container>
                        <NormalInput type="success" size="small" placeholder="Normal Success Small" />
                        <NormalInput type="success" size="medium" placeholder="Normal Success Medium" />
                        <NormalInput type="success" size="large" placeholder="Normal Success Large" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Normal Disabled All Types"
                Component={
                    <Container>
                        <NormalInput disabled size="large" placeholder="Normal Default Disabled" />
                        <NormalInput disabled size="large" placeholder=" Normal Danger Disabled" type="danger" />
                        <NormalInput disabled size="large" placeholder=" Normal Success Disabled" type="success" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Normal bgColor"
                Component={
                    <Container>
                        <NormalInput bgColor="whitesmoke" size="large" placeholder="Normal Default Disabled" />
                        <NormalInput bgColor="#ffe9ed" size="large" placeholder=" Normal Danger Disabled" type="danger" />
                        <NormalInput bgColor="#e3f7ec" size="large" placeholder=" Normal Success Disabled" type="success" />
                    </Container>
                }
            />
            {/* Password */}
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Password Default"
                Component={
                    <Container>
                        <InputPassword size="small" placeholder="Password  Default Small" />
                        <InputPassword size="medium" placeholder="Password Default  Medium" />
                        <InputPassword size="large" placeholder="Password  Default  Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Password Danger"
                Component={
                    <Container>
                        <InputPassword typePwd="danger" size="small" placeholder="Password Danger Small" />
                        <InputPassword typePwd="danger" size="medium" placeholder="Password Danger Medium" />
                        <InputPassword typePwd="danger" size="large" placeholder="Password Danger Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Password Success"
                Component={
                    <Container>
                        <InputPassword typePwd="success" size="small" placeholder="Password Success Small" />
                        <InputPassword typePwd="success" size="medium" placeholder="Password Success Medium" />
                        <InputPassword typePwd="success" size="large" placeholder="Password Success Large" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Password Disabled All Types"
                Component={
                    <Container>
                        <InputPassword disabled size="large" placeholder="Password Default Disabled" />
                        <InputPassword disabled size="large" placeholder=" Password Danger Disabled" typePwd="danger" />
                        <InputPassword disabled size="large" placeholder=" Password Success Disabled" typePwd="success" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Password bgColor"
                Component={
                    <Container>
                        <InputPassword bgColor="whitesmoke" size="large" placeholder="Password Default Disabled" />
                        <InputPassword bgColor="#ffe9ed" size="large" placeholder=" Password Danger Disabled" typePwd="danger" />
                        <InputPassword bgColor="#e3f7ec" size="large" placeholder=" Password Success Disabled" typePwd="success" />
                    </Container>
                }
            />
            {/* Icon */}
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Default"
                Component={
                    <Container>
                        <InputIcon Icon={User} position="left" size="small" placeholder="Left  Default Small" />
                        <InputIcon Icon={User} position="right" size="small" placeholder="Right  Default Small" />
                        <InputIcon Icon={User} position="left" size="medium" placeholder="Left Default  Medium" />
                        <InputIcon Icon={User} position="right" size="medium" placeholder="Right Default  Medium" />
                        <InputIcon Icon={User} position="left" size="large" placeholder="Left  Default  Large" />
                        <InputIcon Icon={User} position="right" size="large" placeholder="Right  Default  Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Danger"
                Component={
                    <Container>
                        <InputIcon Icon={User} position="left" type="danger" size="small" placeholder="Left Danger Small" />
                        <InputIcon Icon={User} position="right" type="danger" size="small" placeholder="Right Danger Small" />
                        <InputIcon Icon={User} position="left" type="danger" size="medium" placeholder="Left Danger Medium" />
                        <InputIcon Icon={User} position="right" type="danger" size="medium" placeholder="Right Danger Medium" />
                        <InputIcon Icon={User} position="left" type="danger" size="large" placeholder="Left Danger Large" />
                        <InputIcon Icon={User} position="right" type="danger" size="large" placeholder="Right Danger Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Success"
                Component={
                    <Container>
                        <InputIcon Icon={User} position="left" type="success" size="small" placeholder="Left Success Small" />
                        <InputIcon Icon={User} position="right" type="success" size="small" placeholder="Right Success Small" />
                        <InputIcon Icon={User} position="left" type="success" size="medium" placeholder="Left Success Medium" />
                        <InputIcon Icon={User} position="right" type="success" size="medium" placeholder="Right Success Medium" />
                        <InputIcon Icon={User} position="left" type="success" size="large" placeholder="Left Success Large" />
                        <InputIcon Icon={User} position="right" type="success" size="large" placeholder="Right Success Large" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Disabled All Types"
                Component={
                    <Container>
                        <InputIcon Icon={User} position="left" disabled size="large" placeholder="Left Default Disabled" />
                        <InputIcon Icon={User} position="right" disabled size="large" placeholder="Right Default Disabled" />
                        <InputIcon Icon={User} position="left" disabled size="large" placeholder=" Left Danger Disabled" type="danger" />
                        <InputIcon Icon={User} position="right" disabled size="large" placeholder=" Right Danger Disabled" type="danger" />
                        <InputIcon Icon={User} position="left" disabled size="large" placeholder=" Left Success Disabled" type="success" />
                        <InputIcon Icon={User} position="right" disabled size="large" placeholder=" Right Success Disabled" type="success" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" bgColor"
                Component={
                    <Container>
                        <InputIcon Icon={User} position="left" bgColor="whitesmoke" size="large" placeholder="Left Default Disabled" />
                        <InputIcon Icon={User} position="right" bgColor="whitesmoke" size="large" placeholder="Right Default Disabled" />
                        <InputIcon Icon={User} position="left" bgColor="#ffe9ed" size="large" placeholder=" Left Danger Disabled" type="danger" />
                        <InputIcon Icon={User} position="right" bgColor="#ffe9ed" size="large" placeholder=" Right Danger Disabled" type="danger" />
                        <InputIcon Icon={User} position="left" bgColor="#e3f7ec" size="large" placeholder=" Left Success Disabled" type="success" />
                        <InputIcon Icon={User} position="right" bgColor="#e3f7ec" size="large" placeholder=" Right Success Disabled" type="success" />
                    </Container>
                }
            />
            {/* Number */}
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Default"
                Component={
                    <Container>
                        <InputNumber size="small" placeholder=" Default Small" />
                        <InputNumber size="medium" placeholder=" Default  Medium" />
                        <InputNumber size="large" placeholder=" Default  Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Danger"
                Component={
                    <Container>
                        <InputNumber typeNum="danger" size="small" placeholder=" Danger Small" />
                        <InputNumber typeNum="danger" size="medium" placeholder=" Danger Medium" />
                        <InputNumber typeNum="danger" size="large" placeholder=" Danger Large" />
                    </Container>
                }
            />
            <Card
                bio=" type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Success"
                Component={
                    <Container>
                        <InputNumber typeNum="success" size="small" placeholder="Number Success Small" />
                        <InputNumber typeNum="success" size="medium" placeholder="Number Success Medium" />
                        <InputNumber typeNum="success" size="large" placeholder="Number Success Large" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" Disabled All Types"
                Component={
                    <Container>
                        <InputNumber disabled size="large" placeholder="Number Default Disabled" />
                        <InputNumber disabled size="large" placeholder=" Number Danger Disabled" typeNum="danger" />
                        <InputNumber disabled size="large" placeholder=" Number Success Disabled" typeNum="success" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title=" bgColor"
                Component={
                    <Container>
                        <InputNumber bgColor="whitesmoke" size="large" placeholder="Number Default " />
                        <InputNumber bgColor="#ffe9ed" size="large" placeholder=" Number Danger " typeNum="danger" />
                        <InputNumber bgColor="#e3f7ec" size="large" placeholder=" Number Success " typeNum="success" />
                    </Container>
                }
            />
            <Card
                bio="type='normal' button size='large, medium, small' placeholder='normal medium'"
                title="Float Number"
                Component={
                    <Container>
                        <InputNumber step="0.1" size="large" placeholder="Float Number Default " />
                        <InputNumber step="0.1" size="large" placeholder=" Float Number Danger " typeNum="danger" />
                        <InputNumber step="0.1" size="large" placeholder=" Float Number Success " typeNum="success" />
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