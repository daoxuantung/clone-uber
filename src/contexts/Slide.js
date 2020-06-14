import React, { Component }  from 'react';
import axios from 'axios';

export const SlideContext = React.createContext();

export class SlideProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: []
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        axios.get('https://db-server-project.herokuapp.com/slides')
          .then(res => {
            this.setState({
              slides: res.data
            });
          })
          .catch(err => {
            console.log(err);
          })
    }
    
    onClick(target, item) {
        const marked = target.parentElement.parentElement.parentElement.children[0];
        const { slides } = this.state;
        const index = slides.indexOf(item);
        let slidesMatched = [];

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].isBorder) {
                slides[i].isBorder = false;
            }

            if (slides.indexOf(slides[i]) === index) {
                slides[i].isBorder = true;
            }

            slidesMatched.push(slides[i]);
        }

        this.setState({
            slides: slidesMatched
        })
        marked.style.left = target.parentElement.offsetLeft + 'px';
        marked.style.width = target.parentElement.offsetWidth + 'px';
    }
    render() {
        const {slides} = this.state;
        return (
            <SlideContext.Provider 
                value = {{
                    slides,
                    onClick: this.onClick
                }}
            >
                {this.props.children}
            </SlideContext.Provider>
        );
    }
}