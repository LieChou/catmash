import React, { Component } from 'react';
import RankingStyle from './Ranking.module.scss';
import { connect } from 'react-redux';
import RankingProfile from './RankingProfile';

class Ranking extends Component {

    goToVote = () => {
        this.props.history.push('/vote');
    };

    getRankedCats = () => {
        const { cats } = this.props;
        //sort cats array elements and return a new array using a compare function
        cats.sort((a, b) => {
            return a.points < b.points ? 1 : -1;
        })
    }



    render() {
        const newCats = this.getRankedCats();
        return (
            <div className={RankingStyle.container}>
                <div className={RankingStyle.titleDiv}>
                    <div className={RankingStyle.titleElement}>Classement des chats les plus mignons</div>
                </div>
                <div className={RankingStyle.returnButtonDiv}>
                    <button className={RankingStyle.returnButtonElement} onClick={this.goToVote}>Retour</button>
                </div>
                <div className={RankingStyle.rankingContainer}>
                    {this.props.cats.map((c, index) => (
                        <div key={c + index}>
                            <RankingProfile
                                cat={c}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cats: state.cats.cats
    }
}

export default connect(mapStateToProps)(Ranking);

