import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats, updateCat } from '../../store/action/creators/Cats';
import VoteStyle from './Vote.module.scss';
import EloRating from 'elo-rating';


class Vote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            catWinner: {},
            catLoser: {}
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

        //create random cat2
        let cat2Id = Math.floor(Math.random() * cats.length);
        let cat2 = cats[cat2Id];
        console.log(cat2);
        const randomCats = { cat1, cat2 }

        //reset cats
        cats.push(splicedCat)

        return (
            randomCats
        )
    }

    calculateScore = (catWinner, catLoser) => {
        console.log(catWinner)
        console.log(catLoser)

        var { gameNumber: gameNumberWinner, points: winnerPoints, imageUrl: urlWinner } = catWinner;
        var { gameNumber: gameNumberLoser, points: loserPoints, imageUrl: urlLoser } = catLoser;
        console.log(gameNumberLoser, gameNumberWinner, loserPoints, winnerPoints, urlWinner, urlLoser)

        // //calculate both new score with Elo Rating component
        let result;
        if (gameNumberWinner < 20) {
            result = EloRating.calculate(winnerPoints, loserPoints, true, 20)
        } else {
            result = EloRating.calculate(winnerPoints, loserPoints, true, 40)
        }
        console.log(result);

        //update database
        //data construction for API call
        var { playerRating, opponentRating } = result

        let dataCatWinner = { gameNumber: gameNumberWinner, imageUrl: urlWinner, points: playerRating }
        let dataCatLoser = { gameNumber: gameNumberLoser, imageUrl: urlLoser, points: opponentRating }
        console.log(dataCatLoser, dataCatWinner)

        //Api call
        this.props.updateCat(dataCatWinner)
        //this.props.updateCat(dataCatLoser)

        //relaunch voting

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
                    <button className={VoteStyle.picDiv} onClick={() => { this.calculateScore(cat1, cat2) }}>
                        <img className={VoteStyle.picElement} alt="cat1" src={cat1.imageUrl} />
                    </button>
                </div>

                <div className={VoteStyle.section2}>
                    <button className={VoteStyle.picDiv} onClick={() => { this.calculateScore(cat2, cat1) }}>
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
    updateCat: (data) => dispatch(updateCat(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote);