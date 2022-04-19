import { Component } from 'react'
import Product from './Product';
import { products } from "../seeds"

export default class ProductList extends Component {
    
    state = {
        products: [],
        descendent: true
    }

    handleProductVote = (id, num) => {
        const nextProducts = this.state.products.map(
            p => {
                if(p.id === id){
                    return {...p, votes: p.votes + num}; ///ES9 - spread operator for objects
                    //return Object.assign({}, p, {votes: ++p.votes}); ///ES6
                } else {
                    return p;
                }
            }
        )

        this.setState({ products: nextProducts });

        // products.forEach(p => {
        //     if(p.id === id){
        //         p.votes = p.votes + 1;
        //         //debugger;
        //     }
        // })
    }

    toggleSort = () => {
        this.setState({ descendent: !this.state.descendent })
    }

    componentDidMount() {
        this.setState({ products }) ///ES9 - shorthand properties (como tem o mesmo nome, posso omitir a propriedade antes dos 2 pontos)
    }

    render() {
        //const product = products[0];
        //const { id, title, description, productImageUrl, votes, submitterAvatarUrl, url } = products[3];      
        //products.sort( (a,b) => b.votes - a.votes );
        //const sortedProducts = this.state.products.sort( (a,b) => b.votes - a.votes );
        
        const sortedProducts = this.state.products.sort( (a,b) => this.state.descendent ? (b.votes - a.votes) : (a.votes - b.votes));
      
        const productComponents = sortedProducts.map( p => (
            <Product 
                key = { 'id-' + p.id }
                id = { p.id }
                title = { p.title }
                description = { p.description }
                url = { p.url }
                votes = { p.votes }
                submitterAvatarUrl = { p.submitterAvatarUrl }
                productImageUrl = { p.productImageUrl }

                onVote = { this.handleProductVote }
            />
        ))

        return (
            <div className='ui unstackable items'>
                <button className='button-test' onClick={this.toggleSort}>ASC / DESC</button>
                { productComponents }
            </div>
        )
    }
}
