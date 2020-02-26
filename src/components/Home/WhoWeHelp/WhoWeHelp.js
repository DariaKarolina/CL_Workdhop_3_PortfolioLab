import React, {Component} from 'react';
import WhoWeHelpItem from './WhoHelpItem';

class WhoWeHelp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            organization: [],
            currentPage: 1,
            itemPerPage: 3
        }
        this.handleChangePageClick = this.handleChangePageClick.bind(this);
    }

    handleChangePageClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        })
    }

    componentDidMount() {
        fetch(`http://localhost:3000/fundations`)
        .then( resp => {
            if(resp.ok) {
                return resp.json();
            } else {
                throw new Error("Błąd sieci");
            }
        })
        .then(data => {
            this.setState({
                organization: data
            })
        }); 
    }
    
   
    handleClick= e => {
        console.log(e.target.id)  
        fetch(`http://localhost:3000/${e.target.id}`)
            .then( resp => {
                if(resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Błąd sieci");
                }
            })
            .then(data => {
                this.setState({
                    organization: data,
                    currentPage: 1
                })
            });
    }
        
    render() {
        const { organization, currentPage, itemPerPage} = this.state;
        const indexOfLastTodo = currentPage * itemPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
        const currentOrganizations = organization.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentOrganizations)

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(organization.length / itemPerPage); i++){
           pageNumber.push(i);
        }

        const renderPageNumbers = pageNumber.map(numb => {
            return (
                <li id={numb} onClick={this.handleChangePageClick}>
                   {numb}
                </li>
            )
        })
         
        
        return (
            <>
                <section className="whoWeHelp" id="whoWeHelp">
                    <h2>Komu pomagamy?</h2>
                    <div className="decor"></div>
                    <ul className="whoWeHelpTypes">
                        <li id="fundations" onClick={this.handleClick} onMouseDown={this.handleNewClick}>Fundacjom</li>
                        <li id="organizations" onClick={this.handleClick} onMouseDown={this.handleNewClick}>Organizacjom pozarządowym</li>
                        <li id="zbiorki" onClick={this.handleClick} onMouseDown={this.handleNewClick}>Lokalnym zbiórkom</li>
                    </ul>
                    <div className="wrapperWeCooperateWith">
                        <p className="mainParagHere">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        <div className="wrapperCoopFundations">
                            {currentOrganizations.map(el => {
                                return <WhoWeHelpItem title={el.name} subtitle={el.subtitle} description={el.description}/>
                            })}
                            {this.state.organization.length > 3 && <ul className="pagination">
                               {renderPageNumbers}
                            </ul>}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default WhoWeHelp;