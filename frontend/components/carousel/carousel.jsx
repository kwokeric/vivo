import React from 'react';
import Slider from 'react-slick';
import { hashHistory } from 'react-router';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (mvUrl) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`/mv/${mvUrl}`);
    };
  }

  renderItems () {
    return(
      this.props.videos.map((video, i) => (
        <div
          key={`item-${i}`}
          className={"carousel-item"}
          onClick={this.clickHandler(video.mv_url)}>
          <img
            className="thumbnail"
            src={`https://img.youtube.com/vi/${video.mv_url}/hqdefault.jpg`} />
          <div className="item-info">
            <p className="artist">{video.artist_name}</p>
            <p className="song-title">{video.song_title}</p>
          </div>
        </div>
      ))
    );
  }

  render () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    };

    if (!this.props.videos || !this.props.videos[0]) {
      return (
        <div className="loading">
          loading...
        </div>
      );
    } else {
      return (
        <Slider {...settings} className="carousel-slider">
          {this.renderItems()}
        </Slider>
      );
    }
  }
}

export default Carousel;
