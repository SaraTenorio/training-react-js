import { Component } from 'react'

export default class Product extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleUpVote = this.handleUpVote.bind(this);
    // }

    handleVote = (num) => {        
        const { id, onVote } = this.props;
        onVote(id, num);
    }

    render() {
        const { id, title, description, productImageUrl, votes, submitterAvatarUrl, url } = this.props;

        return (
            <div className='item'>                
                <div className='image'>
                    <img src={ productImageUrl } />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={ () => this.handleVote((1)) }>
                            <i className='large caret up icon'></i>
                        </a>
                        <a onClick={ () => this.handleVote((-1)) }>
                            <i className='large caret down icon'></i>
                        </a>
                        { votes }
                    </div>
                    <div className='description'>
                        <a href={ url }>{ title }</a>
                        <p>{ description }</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img className='ui avatar image' src={ submitterAvatarUrl } />
                    </div>
                </div>
            </div>
        )
    }
}
