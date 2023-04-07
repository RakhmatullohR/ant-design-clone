import React from "react";
import { Collapse, Panel } from "./Basic";
import { ContentWrapper } from "./style";
import Card from "../DetailsCard";
import { CardBody } from "../Styles";
import { data } from "../../data/api";
import Api from "../Api";
import { Bio, Text } from "../Bio";


export default () => (
    <ContentWrapper>
        <Bio
            title="Collapse"
            bio="A content area which can be collapsed and expanded."
        >
            <Text>
                Can be used to group or hide complex regions to keep the page
                clean.
            </Text>
            <Text>
                Accordion is a special kind of Collapse, which allows only one
                panel to be expanded at a time.
            </Text>
        </Bio>
        <CardBody>
            <Card
                bio="By default, any number of panels can be expanded at a time. The first panel is expanded in this example."
                title="Basic collapse"
                Component={
                    <Collapse>
                        <Panel header="New Header" id='1'>Test data</Panel>
                        <Panel header="New Header" id='2'>Test data</Panel>
                        <Panel header="New Header" id='3'>Test data</Panel>
                    </Collapse>
                }
            />
            <Card
                bio="By default, any number of panels can be expanded at a time. The first panel is expanded in this example."
                title="Icon Right"
                Component={
                    <Collapse>
                        <Panel alignIcon="right" header="New Header" id='1'>Test data</Panel>
                        <Panel alignIcon="right" header="New Header" id='2'>Test data</Panel>
                        <Panel alignIcon="right" header="New Header" id='3'>Test data</Panel>
                    </Collapse>
                }
            />
            <Card
                bio="By default, any number of panels can be expanded at a time. The first panel is expanded in this example."
                title="Icon Left with setting"
                Component={
                    <Collapse>
                        <Panel setting header="New Header" id='1'>Test data</Panel>
                        <Panel setting header="New Header" id='2'>Test data</Panel>
                        <Panel setting header="New Header" id='3'>Test data</Panel>
                    </Collapse>
                }
            />
            <Card
                bio="By default, any number of panels can be expanded at a time. The first panel is expanded in this example."
                title="Icon Right with setting"
                Component={
                    <Collapse>
                        <Panel alignIcon="right" setting header="New Header" id='1'>Test data</Panel>
                        <Panel alignIcon="right" setting header="New Header" id='2'>Test data</Panel>
                        <Panel alignIcon="right" setting header="New Header" id='3'>Test data</Panel>
                    </Collapse>
                }
            />
        </CardBody>

        <Api
            data={data}
            headerContent="api explanation || important definition"
        />
    </ContentWrapper>
);
