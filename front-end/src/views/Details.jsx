import React from 'react'
import { render } from 'react-dom'
import {getData,postData} from "../http/index"
import Markdown from 'react-markdown';

class Details extends React.Component{
    constructor(props) {
        super(props);
		this.state ={
            blogData:{},
		}
    }
    componentWillMount(){
        let params = {
            id:this.props.match.params.blogId
        }
        getData('/weapp/query-blog',params).then(res =>{
            this.setState({blogData:res.data})
        })
    }
    render(){
        return (
            <div className='blogDetail'>
                <div className='blogDetail-title'>{this.state.blogData.title}</div>
                <div className='blogDetail-author'>作者: {this.state.blogData.name}</div>
                <div className='blogDetail-content'>
                    <Markdown className="markdown-body" raw={true} source={this.state.blogData.content} />
                </div>
            </div>
        )
    }
}

export default Details