import React from 'react';
import PropTypes from 'prop-types';
// import * as qs from 'query-string';
import Temp1 from '../MysteryTemplates/temp1';

export class MysteryGamePage extends React.Component {

    constructor(props) {
        super(props);
       // const parsed = qs.parse(location.search);
        //console.log(parsed);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
let t= e;
     //   console.log("Game:"+ e +" was selected");
        window.location.assign("http://ynet.co.il"+ t);
    }
    
    render() {
        return (
            <div>
                  <Temp1 onSelect={this.handleClick.bind(this)}></Temp1>
            </div>
        );
    }
}

MysteryGamePage.propTypes = {
    actions: PropTypes.object,
    gameCode: PropTypes.string
};
