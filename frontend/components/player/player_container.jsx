import { connect } from 'react-redux';

import Player from './player';
import {
  fetchVideo,
  fetchVideos,
  incrementViewCount } from '../../actions/player_actions';

const mapStateToProps = ({ videos }, ownProps) => {
  let mvUrl = ownProps.params.mvUrl;
  let currentMV;

  if (videos) {
    currentMV = videos[mvUrl];
  }

  return({
    currentMV,
    videos
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (mvUrl) => dispatch(fetchVideo(mvUrl)),
  fetchVideos: (mvUrl) => dispatch(fetchVideos(mvUrl)),
  incrementViewCount: (mvUrl) => dispatch(incrementViewCount(mvUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
