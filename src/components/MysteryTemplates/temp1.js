import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/temp1.scss';

const Temp1 = props => {

    return (
        <div>
            <ul className='pie'>
                <li className='pie-slice' onClick={() => props.onSelect('1')}>
                    <div className='pie-slice-contents-1'></div>
                </li>
                <li className='pie-slice' onClick={() => props.onSelect('2')}>
                    <div className='pie-slice-contents-2'></div>
                </li>
                <li className='pie-slice' onClick={() => { props.onSelect('3') }}>
                    <div className='pie-slice-contents-3'></div>
                </li>
                <li className='pie-slice' onClick={() => { props.onSelect('4') }}>
                    <div className='pie-slice-contents-4'></div>
                </li>
                <li className='pie-slice' onClick={() => { props.onSelect('5') }}>
                    <div className='pie-slice-contents-5'></div>
                </li>
                <li className='pie-slice' onClick={() => { props.onSelect('6') }}>
                    <div className='pie-slice-contents-6'></div>
                </li>
            </ul>
        </div>

    );

};

Temp1.propTypes = {
    onSelect: PropTypes.func
};

export default Temp1;