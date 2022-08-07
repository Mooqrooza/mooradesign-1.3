import React, {Component, Fragment} from 'react';
import './app.css';
import MainBackground from '../main-background';
import Header from '../header';
import MainTxtElements from '../main-txt-elements';
import ProjCardList from '../proj-card-list';
import RedButtonElements from '../red-button-elements';
import Footer from '../footer';
import SolidOverlap from '../solid-overlap';
import InfoPage from '../info-page';
import ProjPresentPage from '../proj-present-page';
import AudioControl from '../audio-control';
import { BgAudioPlayer } from '../audio-players';
import ReactedRemark from '../reacted-remark';
import ExplosionScreen from '../explosion-screen';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';

class App extends Component {
    componentDidMount() {
        fetchProjects();
    }
    render() {
        return (
            <Fragment>
                <MainBackground />
                <Header />
                <div className="main-content" >
                    <MainTxtElements />
                    <ProjCardList />
                    <RedButtonElements />
                </div>
                <Footer />
                <InfoPage />
                <ProjPresentPage />
                <SolidOverlap />
                <AudioControl />
                <ExplosionScreen />
                <BgAudioPlayer />
            </Fragment>
        );
    }
};

const mapStateToProps = ({ mainAnimations: {initialPlay, playState} }) => {
  return { initialPlay, playState }
};

export default connect(mapStateToProps)(App);
