import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats } from '../../store/action/creators/Cats';
import VoteStyle from './Vote.module.scss';


class Vote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cats: [],
            cat1: [],
            cat2: []
        }
    }

    getRandomCats = () => {
        //get all cats 
        let cats = this.props.cats;

        //create random cat1
        let cat1Id = Math.floor(Math.random() * cats.length);
        let cat1 = cats[cat1Id];
        console.log(cat1);

        //take cat1 out to make sure it won't appear again
        let splicedCat = cats.splice(cat1Id, 1)[0];
        let viewedCat = [];
        viewedCat.push(splicedCat);

        //create random cat2
        let cat2Id = Math.floor(Math.random() * cats.length);
        let cat2 = cats[cat2Id];
        console.log(cat2);
        const randomCats = { cat1, cat2 }
        return (
            randomCats
        )
    }

    goToRanking = () => {
        this.props.history.push('/rank');
    };



    render() {
        console.log(this.props.cats);
        const { cat1, cat2 } = this.getRandomCats();
        console.log(cat1)
        console.log(cat2)

        return (

            <div className={VoteStyle.container}>
                <div className={VoteStyle.header}>
                    <div className={VoteStyle.titleDiv}>
                        <p className={VoteStyle.titleElement}>Votez pour le chat le plus mignon !</p>
                    </div>
                    <div className={VoteStyle.logoDiv}>
                        <img className={VoteStyle.logoElement} src={require('../../assets/pawprints.svg')} alt="catpawprints" />
                    </div>
                </div>

                <div className={VoteStyle.section1}>
                    <button className={VoteStyle.picDiv}>
                        <img className={VoteStyle.picElement} alt="cat1" src={cat1.imageUrl} />
                    </button>
                </div>

                <div className={VoteStyle.section2}>
                    <button className={VoteStyle.picDiv}>
                        <img className={VoteStyle.picElement} alt="cat1" src={cat2.imageUrl} />
                    </button>
                </div>

                <div className={VoteStyle.rankingButtonDiv}>
                    <button className={VoteStyle.rankingButtonElement} onClick={this.goToRanking}>Voir le classement</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cats: state.cats.cats,
    }
}

const mapDispatchToProps = dispatch => ({
    getCats: () => dispatch(getCats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote);