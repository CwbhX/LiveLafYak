import React, {Component} from 'react';
import {Yak} from "./Yak.jsx"

class YakList extends React.Component{
    connstructor(props){
        this.state = {
            postList:""
        };
    }

    // Set state here
    componentDidMount(){

    }

    // Render method ofc
    render(){
        return(
            <div>
                <Yak/>
                <Yak/>
            </div>
        );
    }
}

export {YakList};
