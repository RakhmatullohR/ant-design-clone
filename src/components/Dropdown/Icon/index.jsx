import React, { useState, useEffect } from "react";
import { KeyboardArrowDown } from "@styled-icons/material/KeyboardArrowDown";
import { Loader5 } from "@styled-icons/remix-line/Loader5";
import { Container, Selection, Menu, SpinContainer } from "./style";

const Single = ({
    onClick,
    top,
    bottom,
    hover,
    options,
    placeholder,
    marginRight,
    onChange,
    onSelect,
    size,
    Icon,
    loadingSpinner,
    Key,
    disabled,
    ...args
}) => {
    const [open, setOpen] = useState(false);
    const [end, setEnd] = useState(false);
    const [width, setWidth] = useState(0);
    const [windowH] = useState(window.innerHeight);
    const [windowW] = useState(window.innerWidth);
    const [item, setItem] = useState(placeholder || options[0].value);
    let onClik = (e) => {
        setItem(e.target.value);
        onSelect ? onSelect(e.target.id) : console.log(e.target.value);
        setOpen(false);
        if (onClick) onClick(e.target.value);
    };
    const openToggle = () => setOpen(!open);
    const handleResize = (e) => {
        setWidth(e);
    };
    useEffect(() => {
        const vh = document
            .getElementById(`dropdown-container-${Key}`)
            .getBoundingClientRect();
        const wv = document.getElementById(`selection-container-${Key}`)
            .clientWidth;
        const menuHeight = document.getElementById(`menu-container-${Key}`)
            .clientHeight;

        window.addEventListener("resize", handleResize(wv));

        // setWidth(wv);
        if (vh.bottom + menuHeight > window.innerHeight) {
            setEnd(true);
        } else {
            setEnd(false);
        }
    }, [end, windowW, item, open, width, windowH, Key]);
    let DropdownIcon = (
        <SpinContainer>
            <KeyboardArrowDown
                id="KeyboardArrowDownIcon"
                onClick={!disabled ? openToggle : null}
                onMouseEnter={!disabled && hover && openToggle}
            />
        </SpinContainer>
    );

    const icon = () => {
        if (loadingSpinner) {
            return (DropdownIcon = (
                <SpinContainer>
                    <Loader5 id="SPINNER" />
                </SpinContainer>
            ));
        } else {
            return DropdownIcon;
        }
    };
    icon(); 
    return (
        <Container
            id={`dropdown-container-${Key}`}
            end={end ? 1 : 0}
            onMouseLeave={() => setOpen(false)}
            onClick={!disabled && !loadingSpinner ? openToggle : null}
            onMouseEnter={() => {
                if (!disabled && hover) {
                    if (!loadingSpinner) {
                        return openToggle;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }}
        >
            <Selection
                disabled={disabled}
                size={size}
                {...args}
                id={`selection-container-${Key}`}
            >
                <Selection.Text disabled={disabled} {...args}>
                    {item}
                </Selection.Text>
                <Selection.Icon
                    Open={open}
                    onClick={
                        !disabled && hover && !loadingSpinner && openToggle
                    }
                    onMouseEnter={
                        !disabled && hover && !loadingSpinner && openToggle
                    }
                >
                    {Icon ? (
                        <Icon
                            onClick={!disabled ? openToggle : null}
                            onMouseEnter={!disabled && hover && openToggle}
                        />
                    ) : (
                        DropdownIcon
                    )}
                </Selection.Icon>
            </Selection>
            <Menu
                top={bottom}
                bottom={top}
                id={`menu-container-${Key}`}
                open={open}
                disable
                width={width}
                end={end ? 1 : 0}
            >
                {options.map((itm) =>
                    Array.isArray(itm.value) ? (
                        <div key={itm.id}>
                            <Menu.Icon>
                                {itm.icon}
                                <Menu.Item
                                    readOnly
                                    disabled
                                    danger={itm.danger}
                                    key={itm.id}
                                    value={itm.name}
                                    width={width}
                                />
                            </Menu.Icon>
                            {itm.value.map((sub) => (
                                <Menu.SubItem
                                    disabled={itm.disabled}
                                    id={sub.id}
                                    readOnly
                                    key={sub.id}
                                    onClick={(e) => onClik(e)}
                                    value={sub.value}
                                    name={sub.name}
                                    active={item === sub.value}
                                    width={width}
                                />
                            ))}
                        </div>
                    ) : (
                        <Menu.Item
                            id={itm.id}
                            key={itm.id}
                            readOnly
                            danger={itm.danger}
                            disabled={itm.disabled}
                            onClick={(e) => onClik(e)}
                            value={itm.value}
                            name={itm.name}
                            active={item === itm.value}
                        />
                    )
                )}
            </Menu>
        </Container>
    );
};

export default Single;
