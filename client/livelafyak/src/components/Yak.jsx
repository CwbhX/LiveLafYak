import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



class Yak extends React.Component{
    connstructor(props){
        this.state = {
            text:"",
            upvotes:0,
            downvotes:0,
            timeStamp:""
        };
    }

    // Set state here
    componentDidMount(){

    }

    // Render method ofc
    render(){
        return(
            <Card className="YakCard">
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <p>Test text</p>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="YakButtons">
                                <IconButton>
                                    <KeyboardArrowUpIcon/>
                                </IconButton>
                                <p>10</p>
                                <IconButton>
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export {Yak};
