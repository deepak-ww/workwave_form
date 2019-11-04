import React from 'react';
import styled from 'styled-components';

type ButtonProp = {
    onClick?: () => {},
    primary?: boolean,
    children: any
}

const ButtonElement = styled.button`
    background: #00B9BC;
    color: white;
    border: 5px solid #00B9BC;
    border-radius: 4px;
    width: ${(props: ButtonProp) => props.primary ? "250px" : "40px"};
    height: ${(props: ButtonProp) => props.primary ? "50px" : "120px"};
    :hover,:active{
        background: white;
        color: black;
        cursor: pointer;
    };
    :focus{
        outline: 0;
    };
`;

const Button = (props: ButtonProp): JSX.Element => {
    const { onClick, children } = props;
    return (
        <ButtonElement {...props} onClick={onClick} >{children}</ButtonElement>
    );
}

export { Button };