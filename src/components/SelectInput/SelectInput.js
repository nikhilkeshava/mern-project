import React from 'react';
import './selectInput.scss';
import Select from 'react-select';


export default function SelectInput(props) {
    return (
        <div>
            <Select
                classNamePrefix="select-state"
                className={props.className ? props.className : "react-select project"}
                onChange={props.onChange}
                options={props.options}
                placeholder={props.placeholder}
                value={props.value}
                isDisabled={props.disabled}
                 />

        </div>
    );
}
