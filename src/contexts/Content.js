import React, { Component }  from 'react';
import axios from 'axios';

export const ContentContext = React.createContext();

export class ContentProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: []
        }
    }

    componentDidMount() {
        axios.get('https://db-server-project.herokuapp.com/Contents')
          .then(res => {
            this.setState({
              contents: res.data
            });
          })
          .catch(err => {
            console.log(err);
          })
    }
    
    render() {
        const { contents } = this.state;
        return (
            <ContentContext.Provider 
                value = {{
                    contents
                }}
            >
                {this.props.children}
            </ContentContext.Provider>
        );
    }
}