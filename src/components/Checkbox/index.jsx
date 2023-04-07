import React, { useState } from "react"
import Card from "../DetailsCard";
import Button from "../Buttons/Normal";
import { CardBody } from "../Styles";
import { Container, GroupContainer } from "./style";
import Checkbox from "./Basic";
import CheckAll from "./CheckAll";
import { Bio, Mark } from "../Bio";
import Api from "../Api";
import { data } from "../../data/api";


export default () => {
    const [checked, setChecked] = useState(true)
    const [disabled, setDisabled] = useState(true)
    return (
        <Container>
            <Bio title="Checkbox" bio="Checkbox component.">
                <Mark>
                    Used for selecting multiple values from several options.
              </Mark>
                <Mark>
                    If you use only one checkbox, it is the same as using Switch
                    to toggle between two states. The difference is that Switch
                    will trigger the state change directly, but Checkbox just
                    marks the state as changed and this needs to be submitted.
              </Mark>

            </Bio>
            <CardBody>
                <Card
                    title="Basic"
                    bio="default props with differnt size and lableText"
                    Component={
                        <Container flex>
                            <Checkbox labelText="Large" size="large" />
                            <Checkbox labelText="Medium" size="medium" />
                            <Checkbox labelText="Small" size="small" />
                        </Container>
                    }
                />
                <Card
                    title="Controlled"
                    bio="default props with differnt size and lableText"
                    Component={
                        <>
                            <Checkbox labelText="Checked - Disabled" checked={checked} disabled={disabled} /> <br />
                            <Container>
                                <Button Primary onClick={() => setDisabled(!disabled)} title={disabled ? "Enable" : "Disabled"} />
                                <Button Primary onClick={() => setChecked(!checked)} title={checked ? "Uncheck" : "Check"} />
                            </Container>
                        </>
                    }
                />
                <Card
                    title="With Color"
                    bio="default props with differnt size and lableText"
                    Component={
                        <>
                            <Container flex>
                                <Checkbox checked bgColor="red" labelText="Large" size="large" />
                                <Checkbox bgColor="red" labelText="Medium" size="medium" />
                                <Checkbox bgColor="red" labelText="Small" size="small" />
                            </Container>
                            <Container flex>
                                <Checkbox checked bgColor="green" labelText="Large" size="large" />
                                <Checkbox bgColor="green" labelText="Medium" size="medium" />
                                <Checkbox bgColor="green" labelText="Small" size="small" />
                            </Container>
                            <Container flex>
                                <Checkbox checked bgColor="#696969" labelText="Large" size="large" />
                                <Checkbox bgColor="#696969" labelText="Medium" size="medium" />
                                <Checkbox bgColor="#696969" labelText="Small" size="small" />
                            </Container>
                        </>
                    }
                />
                <Card
                    title="check all checkbox"
                    bio={` labelText="checkbox to check all" firstCheckTitle="banana" secondCheckTitle="apple" thirdCheckTitle="pear"`}
                    Component={
                        <Container>
                            <CheckAll
                                indeterminate={true}
                                labelText="checkbox to check all"
                                firstCheckTitle="banana"
                                secondCheckTitle="apple"
                                thirdCheckTitle="pear"
                            />
                        </Container>
                    }
                />
                <Card
                    title="Checkbox Group"
                    bio={`Group of checkboxes`}
                    Component={
                        <GroupContainer>
                            <Checkbox checked labelText="apple" bgColor="red" />
                            <Checkbox checked labelText="pear" bgColor="green" />
                            <Checkbox checked labelText="apple" bgColor="blue" />
                            <Checkbox checked labelText="pear" bgColor="yellowgreen" />
                            <Checkbox checked labelText="apple" bgColor="pink" />
                            <Checkbox checked labelText="pear" bgColor="black" />
                            <Checkbox checked labelText="mango" bgColor="orange" />
                            <Checkbox checked labelText="coconat" bgColor="brown" />
                            <Checkbox checked labelText="vinograt" />
                        </GroupContainer>
                    }
                />
            </CardBody>
            <Api
                data={data}
                headerContent="api explanation || important definition"
            />
        </Container>
    );
}