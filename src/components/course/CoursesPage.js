/**
 * Created by OluwadamilolaAdebayo on 7/31/16.
 */
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
//import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component{
    constructor(props, context){
        super(props, context);

        this.state= {
            course: {title: ""}
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        //this.props.dispatch(courseActions.createCourse(this.state.course));
    }
    render(){
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" onClick={this.onClickSave} value={'Save'}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}


//export default connect(mapStateToProps)(CoursesPage);
export default CoursesPage;