import React from 'react';
import moment from 'moment';
import {
  when,
  pipe,
  take,
  append,
  join,
} from 'ramda';
import cxs from 'cxs';
import Spacing from '../styles/spacing';
import ArtboardStyles from '../styles/artboard';

export default class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('clicked');
    console.log(this.state);
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  }

  render () {
    const {
      id,
      description,
      name,
      thumbnails,
      link,
      created_at,
    } = this.props.post;

    return (
      <div
        className={cx.post}
        {...{ 'data-name': `Artboard ${this.props.artboard}` }}
        key={id}
      >
        <div className={cx.imageWrapper}>
          <img className={cx.image} alt={name} src={thumbnails.large} />
        </div>

        <div className={cx.content}>
          <div className={cx.titleWrapper}>
            {link
              ? <a className={cx.link} href={link}><h3 className={cx.title}>{name}</h3></a>
              : <h3 className={cx.title}>{name}</h3>
            }
            {description &&
              <button className={cx.toggle} onClick={this.handleClick}>
                {this.state.isShow
                  ? <span>Hide</span>
                  : <span>...</span>
                }
              </button>
            }
          </div>
          <h5 className={cx.date}>Added at {moment(created_at).fromNow()}</h5>
          {description && this.state.isShow &&
            <div className={cx.description}>
              <p>{description}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  artboard: React.PropTypes.number.isRequired,
  post: React.PropTypes.shape({
    id: React.PropTypes.number,
    description: React.PropTypes.string,
    name: React.PropTypes.string,
    created_at: React.PropTypes.string,
    link: React.PropTypes.string,
    // eslint-disable-next-line
    thumbnails: React.PropTypes.object
  }),
};

Post.defaultProps = {
  post: {},
};

const cx = {
  post: cxs({
    ...ArtboardStyles,
    width: `calc(33% - ${Spacing.large}px)`,
    marginBottom: Spacing.large,
    flexDirection: 'column',
    'nth-of-type(2n)': {
      marginRight: Spacing.medium,
      marginLeft: Spacing.medium,
    },
  }),
  image: cxs({
    maxWidth: 600,
    height: 'auto',
    overflow: 'hidden',
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
  }),
  imageWrapper: cxs({
    position: 'relative',
    width: '100%',
    height: 240,
    overflow: 'hidden',
    marginBottom: Spacing.small,
  }),
  content: cxs({
    padding: Spacing.small,
  }),
  link: cxs({
    textDecoration: 'none',
    flex: 1,
    width: 'calc(100% - 60px)',
  }),
  titleWrapper: cxs({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  title: cxs({
    fontWeight: 600,
    fontSize: 14,
    color: '#232324',
    marginTop: 0,
    marginBottom: Spacing.small / 2,
    width: 'calc(100% - 60px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ':hover': {
      opacity: 0.5,
    },
  }),
  toggle: cxs({
  }),
  date: cxs({
    opacity: 0.6,
    fontFamily: 'SF Mono, Inconsolata, Menlo, monospace',
    fontSize: 12,
    fontWeight: 400,
    color: '#32383E',
    marginTop: 0,
    marginBottom: Spacing.small,
  }),
  description: cxs({
    fontSize: 13,
    lineHeight: 1.5,
    color: '#32383E',
    opacity: 0.6,
  }),
};
