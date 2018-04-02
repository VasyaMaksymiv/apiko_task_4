import React from 'react';

function FormSearch(props) {
        return (
                <div className='form_serch' >
                <input onChange={props.onChange} value={props.text} placeholder="Search" />
                </div>
                )
        }

export default FormSearch;