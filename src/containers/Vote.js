import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats } from '../store/action/creators/Cats'



class Vote extends Component {

    // constructor(props) {
    //     super(props);

    //display 2 random cats
    // let viewedCats = [];
    // let cat1 = Math.floor(Math.random() * database.length);

    //make sure they are not the same
    // let splicedCat = database.splice(car1, 1)[0];
    // viewedCats.push(splicedCat);

    // let cat2 = Math.floor(Math.random() * database.length);

    // update Store with infos
    // dispatch printedCats action

    // reset database for next round

    // }

    goToRanking = () => {
        this.props.history.push('/rank');
    };

    getCats = () => {
        this.props.getCats();

    }


    render() {
        console.log(this.props.cats)
        return (
            <div>
                <div>
                    <p>Vote</p>
                    <button onClick={this.getCats} type="button" className="btn btn-info">Get Cats</button>
                </div>

                {/* printed 2 cats */}
                <div>
                    <button>
                        <img alt="cat1" />
                    </button>
                    <button>
                        <img alt="cat2" />
                    </button>

                </div>
                {/* <div>
                    <button type="button" className="btn btn-info" onClick={this.getCats}>Voir les données</button>
                </div > */}


                <div>
                    <button type="button" className="btn btn-info" onClick={this.goToRanking}>Voir le classement</button>
                </div >

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cats: state.cats.cats
    }
}

const mapDispatchToProps = dispatch => ({
    getCats: () => dispatch(getCats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote);