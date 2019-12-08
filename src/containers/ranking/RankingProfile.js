import React, { Component } from 'react';
import RankingStyle from './Ranking.module.scss';



class RankingProfile extends Component {
    render() {
        return (
            <div className={RankingStyle.boxSizing}>
                <div className={RankingStyle.picDiv}>
                    <img className={RankingStyle.picElement} alt="cat" src={this.props.cat.imageUrl} />
                </div>
                <p className={RankingStyle.textElement}>Nombre de points : {this.props.cat.points}</p>
            </div>
        )
    }
}

export default RankingProfile;