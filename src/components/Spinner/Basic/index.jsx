import React, { useState } from "react";
import Switch from "../../Switch/Basic";
import StateSpinner from "../StateSpinner";
import { Spin, SpinWrapper, LoadingText, AlertMe, Div, P } from "./style";

export const Alert = ({ text, description, spinning }) => {
    return (
        <AlertMe spinning={spinning}>
            <Div>{text}</Div>
            <P>{description}</P>
        </AlertMe>
    );
};

export const LoadingCard = ({ loadingText, size, id }) => {
    const [state, setState] = useState({ loading: false });
    return (
        <div>
            <Spin>
                <Alert
                    spinning={state.loading}
                    text="Alert message title"
                    description="Further details about the context of this alert."
                />
                <SpinWrapper display={state.loading ? 1 : 0}>
                    <StateSpinner size={size} />
                    <LoadingText>{loadingText}</LoadingText>
                </SpinWrapper>
            </Spin>
            <div>
                Loading state：
                <span
                    onChange={() =>
                        setState((prevState) => {
                            return { loading: !prevState.loading };
                        })
                    }
                >
                    <Switch size="medium" id={id} checked={state.loading} />
                </span>
            </div>
        </div>
    );
};
