import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import gsap from 'gsap';
import {
  overwriteStore,
  sendToFirebase,
} from 'components/store/Actions/actions';
import MainTile from '../Tile/MainTile/MainTile';
import SecondaryTile from '../Tile/SecondaryTile/SecondaryTile';
import ThirdTile from '../Tile/ThirdTile/ThirdTile';
import StyledTilesContainer from './TilesContainer.styled';

const TilesContainer = ({
  data,
  auth,
  userData,
  updateStoreFromFirebase,
  sendStoreToFirebase,
}) => {
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const [isSecondActive, setSecondActivity] = useState(false);
  const [isThirdActive, setThirdActivity] = useState(false);
  const [activePosition, setActivePosition] = useState(null);
  const [activeType, setActiveType] = useState([]);
  const [activeThirdData, setActiveThirdData] = useState([]);
  const [isFirestoreFetched, setFirestoreFetched] = useState(false);
  const [isStoreFetchingAvailable, setStoreFetchingAvailable] = useState(false);

  useEffect(() => {
    if (!isFirestoreFetched && userData) {
      updateStoreFromFirebase(userData);
      setFirestoreFetched(true);
      setStoreFetchingAvailable(true);
      document.querySelector('body').style.backgroundColor = userData.userColor;
    }

    if (!auth.uid) {
      setFirestoreFetched(false);
      setStoreFetchingAvailable(false);
    }

    if (auth && isStoreFetchingAvailable) sendStoreToFirebase(data, auth.uid);
  }, [data]);

  const handleReveal = tile => {
    if (tile?.current) {
      const elements = Array.from(tile.current.children);

      elements.forEach(element => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            visibility: 'hidden',
            y: '-25',
          },
          { opacity: 1, visibility: 'visible', y: 0, duration: 0.5, delay: 0.3 }
        );
      });
    }
  };

  const handleClick = (which, type) => {
    switch (which) {
      case 'second': {
        if (type !== activeType) {
          setSecondActivity(true);
          setActiveType(type);

          setThirdActivity(false);
          handleReveal(secondRef);
        }
        break;
      }
      case 'third': {
        setActiveThirdData([]);
        setThirdActivity(true);
        setActiveThirdData(type);
        handleReveal(thirdRef);
        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledTilesContainer>
      <MainTile
        isActive={isSecondActive}
        type={activeType}
        handleClick={handleClick}
        counters={[
          userData?.notes.active.length || data?.notes.active.length || 0,
          userData?.lists.active.length || data?.lists.active.length || 0,
        ]}
        userName={userData?.name}
        userColor={userData?.userColor}
        userImage={userData?.userImage}
      />
      <SecondaryTile
        isActive={isSecondActive}
        handleClick={handleClick}
        data={(userData && userData[activeType]) || data[activeType]}
        type={activeType}
        ref={secondRef}
        activePosition={activePosition}
        setActivePosition={setActivePosition}
        setSecondActivity={setSecondActivity}
        setActiveType={setActiveType}
      />
      <ThirdTile
        isActive={isThirdActive}
        storeData={userData || data}
        type={activeType}
        ref={thirdRef}
        setThirdActivity={setThirdActivity}
        thirdDataId={activeThirdData.id}
      />
    </StyledTilesContainer>
  );
};

TilesContainer.propTypes = {
  data: propTypes.shape(propTypes.shape).isRequired,
  auth: propTypes.shape(propTypes.shape),
  userData: propTypes.shape(propTypes.shape),
  updateStoreFromFirebase: propTypes.func.isRequired,
  sendStoreToFirebase: propTypes.func.isRequired,
};

TilesContainer.defaultProps = {
  auth: null,
  userData: null,
};

const mapStateToProps = state => {
  return {
    data: state.data,
    auth: state.firebase.auth,
    userData: state.firestore.ordered.userData?.find(
      data => data.id === state.firebase.auth.uid
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStoreFromFirebase: store => dispatch(overwriteStore(store)),
    sendStoreToFirebase: (store, uid) => dispatch(sendToFirebase(store, uid)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'userData' }])
)(TilesContainer);
