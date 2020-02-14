import React, {Component} from 'react';

//pod paginacją pobieranie z json server?
class WhoWeHelp extends Component{
    render(){
        return (
            <>
                <section className="whoWeHelp">
                    <h2>Komu pomagamy?</h2>
                    <div className="decor"></div>
                    <ul className="whoWeHelpTypes">
                        <li>Fundacjom</li>
                        <li>Organizacjom pozarządowym</li>
                        <li>Lokalnym zbiórkom</li>
                    </ul>
                    <div className="wrapperWeCooperateWith">
                        <p className="mainParagHere">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        <div className="wrapperCoopFundations">
                            <div className="firstPageFundation">
                                <div className="firstFundation">
                                    <div className="wrapperAboutFundation">
                                        <h4 className="nameOfFundation">Fundacja "Dbam o Zdrowie"</h4>
                                        <h5 className="fundationGoals">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h5>
                                    </div>
                                    <p className="fundationNeeds">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                </div>
                                <div className="secondFundation">
                                    <div className="wrapperAboutFundation">
                                        <h4 className="nameOfFundation">Fundacja "Dla dzieci"</h4>
                                        <h5 className="fundationGoals">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h5>
                                    </div>
                                    <p className="fundationNeeds">ubrania, meble, zabawki</p>
                                </div>
                                <div className="thirdFundation">
                                    <div className="wrapperAboutFundation">
                                        <h4 className="nameOfFundation">Fundacja "Bez domu"</h4>
                                        <h5 className="fundationGoals">Cel i misja: Pomoc osobom nie posiadającym miejsca zamieszkania.</h5>
                                    </div>
                                    <p className="fundationNeeds">ubrania, jedzenie, ciepłe koce</p>
                                </div>
                            </div>
                            <ul className="pagination">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default WhoWeHelp;