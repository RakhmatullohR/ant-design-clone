import React, { Component } from "react";
import { CheckboxContainer, Layout, Input } from "./style";
// import Checkbox from "../Basic"

class App extends Component {
    state = {
        fruites: [
            {
                id: 1,
                value: this.props.firstchecktitle || "banana",
                isChecked: false,
            },
            {
                id: 2,
                value: this.props.secondchecktitle || "apple",
                isChecked: false,
            },
            {
                id: 3,
                value: this.props.thirdchecktitle || "mango",
                isChecked: false,
            },
        ],
    };

    handleAllChecked = (event) => {
        let fruites = this.state.fruites;
        fruites.forEach((fruite) => (fruite.isChecked = event.target.checked));
        this.setState({ fruites: fruites });
    };
    seeChange = (state, event) => {
        if (state) {
            let fruites = this.state.fruites;
            fruites.forEach((fruite) => (fruite.isChecked = event.target.checked));
            this.setState({ fruites: fruites });
        }
    }

    handleChildElement = (event) => {
        let fruites = this.state.fruites;
        fruites.forEach((fruite) => {
            if (fruite.value === event.target.value) {
                fruite.isChecked = event.target.checked;
            } else if (fruite.isChecked) {
            }
        });
        this.setState({ fruites: fruites });
    };

    render() {
        return (
            <Layout>
                <Input
                    type="checkbox"
                    onClick={this.handleAllChecked}
                    value="checkedall"
                // indeterminate = {true}
                // ref={ (el) => el.indeterminate = true }
                // ref={(el) => (el.indeterminate = true)}
                />
                {this.props.labeltext || "Check / Uncheck All"}
                <div>
                    <br />
                    {this.state.fruites.map((fruite) => {
                        return (
                            <CheckBox1
                                key={fruite.id}
                                handleChildElement={this.handleChildElement}
                                {...fruite}
                                thirdchecktitle
                                firstchecktitle
                                secondchecktitle
                            />
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

export const CheckBox1 = ({ checked,
    labeltext,
    id,
    firstchecktitle,
    secondchecktitle,
    thirdchecktitle,
    handleChildElement,
    isChecked,
    value,
}) => {
    return (
        <CheckboxContainer>
            <Input
                key={id}
                id="childofInput"
                labeltext={labeltext}
                firstchecktitle={firstchecktitle ? "true" : "false"}
                secondchecktitle={secondchecktitle ? "true" : "false"}
                thirdchecktitle={thirdchecktitle ? "true" : "false"}
                onClick={handleChildElement}
                type="checkbox"
                checked={isChecked}
                value={value}
                onChange={() => console.log("")}
            />
            {value}
        </CheckboxContainer>
    );
}

export default App