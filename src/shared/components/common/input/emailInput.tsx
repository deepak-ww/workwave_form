import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

const Label = styled.label`
:before {
  content: '\f007';
  font: 14px fontawesome;
	color: #5b5b5b;
}
`;

type EmailProps = {
    ref?: object | any,
    id?: string,
    placeholder: string,
    type: string,
    required?: boolean
}

const EmailInput = ({ ref, id, placeholder, type, required }: EmailProps) => {
    return (
        <Div>
            <Label>
                <input ref={ref} id={id} placeholder={placeholder} type={type} required={required} />
            </Label>
        </Div>
    );
}

export { EmailInput }