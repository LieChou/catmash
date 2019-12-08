import React, { Component } from 'react';
import RankingStyle from './Ranking.module.scss';
import { connect } from 'react-redux';
import RankingProfile from './RankingProfile';

class Ranking extends Component {

    goToVote = () => {
        this.props.history.push('/vote');
    };


    render() {
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

