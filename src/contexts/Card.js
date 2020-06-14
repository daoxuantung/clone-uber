import React, { Component }  from 'react';
import axios from 'axios';

export const CardContext = React.createContext();

export class CardProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        axios.get('https://db-server-project.herokuapp.com/cards')
          .then(res => {
            this.setState({
              cards: res.data
            });
          })
          .catch(err => {
            console.log(err);
          })
    }
    
    render() {
        const { cards } = this.state;
        return (
            <CardContext.Provider 
                value = {{
                    cards
                }}
            >
                {this.props.children}
            </CardContext.Provider>
        );
    }
}