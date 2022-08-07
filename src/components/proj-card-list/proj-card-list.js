import React, { Component } from 'react';
import ProjCardItem from './proj-card-item'
import './proj-card-list.css';
import { connect } from 'react-redux';

class ProjCardList extends Component {
    render() {
        const { projects, projsLoading, projsLoadingErr, lessWidth600, stateClass } = this.props;
        if (projsLoading) return <div></div>;
        if (projsLoadingErr) return <div></div>;
        return (
            <div className={`proj-card-list ${lessWidth600 ? 'lessWidth600' : ''} ${stateClass}`} >
              { projects.map( (item) => {
                  const {id, ...props } = item;
                  return <ProjCardItem {...props} key={`k${id}`} id={id} />
               }) }
            </div>
        )
    }
};

const mapStateToProps = ({
  main: { projects, projsLoading, projsLoadingErr },
  responsiveQuery: {lessWidth600},
  mainAnimations: {stateClass} }) => {
  return { projects, projsLoading, projsLoadingErr, lessWidth600, stateClass };
};

export default connect(mapStateToProps)(ProjCardList);
