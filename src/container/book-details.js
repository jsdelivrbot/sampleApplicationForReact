import React,{Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component{
    render(){
        console.log('value>>>',this.props.book)
        if(!this.props.book){
            return <div>select a book to get started...</div>
        }

        return (
            <div>
                <h3>Details for selected Book:</h3>
                <div>Title :{this.props.book.title}</div>
                <div>Page No:{this.props.book.page}</div>
                <div>Author: {this.props.book.author}</div>
            </div>
        );
    }
}
const mapStateToProps=state =>{
    return {
        book:state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetail)