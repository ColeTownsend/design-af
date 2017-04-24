import React, { PropTypes } from 'react';
import moment from 'moment';
import cxs from 'cxs';
import Spacing from '../styles/spacing';
import Colors from '../styles/colors';
import ArtboardStyles from '../styles/artboard';
import { Sectra, Mono } from '../styles/fontFamily';

const LEARNING_COLLECTION_ID = 400671;

export default class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
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

    const collectionId = this.props.post.collection_id;

    return (
      <div
        className={cx.post}
        {...{ 'data-name': `Artboard ${this.props.artboard}` }}
        key={id}
      >
        <Header
          collectionId={collectionId}
          imageSrc={thumbnails.large}
          name={name}
          link={link}
        />

        <div className={cx.content}>
          <div className={cx.titleWrapper}>
            {link
              ? <a
                className={cx.link}
                href={link}
              >
                <h3 className={cx.title}>{name}</h3>
              </a>

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
          <h5 className={cx.date}>Added {moment(created_at).fromNow()}</h5>
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
  artboard: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    created_at: PropTypes.string,
    link: PropTypes.string,
    collection_id: PropTypes.number,
    // eslint-disable-next-line
    thumbnails: PropTypes.object
  }).isRequired,
};

// Creates a learn graphic or uses the screenshot / website image.
function Header ({ collectionId, imageSrc, name, link }) {
  if (collectionId === LEARNING_COLLECTION_ID) {
    return (
      <a href={link}>
        <div className={cx.learnGraphic}>
          <span className={cx.learnTitle}>Learn</span>
        </div>
      </a>
    );
  } else {
    return (
      <a href={link}>
        <div className={cx.imageWrapper}>
          <img className={cx.image} alt={name} src={imageSrc} />
        </div>
      </a>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const cx = {
  post: cxs({
    ...ArtboardStyles,
    width: `calc(33% - ${Spacing.large}px)`,
    maxWidth: 600,
    marginBottom: Spacing.large,
    flexDirection: 'column',
    boxSizing: 'border-box',
    'nth-of-type(2n)': {
      marginRight: Spacing.medium,
      marginLeft: Spacing.medium,
    },
    ':hover': {
      boxShadow: '0 2px 6px 0 rgba(0,0,0,0.50), 0 0 2px 0 #4CC1FC',
    },
  }),
  image: cxs({
    maxWidth: 600,
    width: '100%',
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
    borderBottom: '1px solid rgba(0,0,0,0.10)',
  }),
  learnGraphic: cxs({
    position: 'relative',
    width: '100%',
    height: 240,
    marginBottom: Spacing.small,
    // background: 'linear-gradient(to bottom, #ddd6f3 , #faaca8)',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `inset 0 -4px 0 0 ${Colors.Red}`,
  }),
  learnTitle: cxs({
    color: Colors.Red,
    fontSize: 72,
    fontFamily: Sectra,
    fontWeight: 600,
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
    color: Colors.Black,
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
  date: cxs({
    opacity: 0.6,
    fontFamily: Mono,
    fontSize: 12,
    fontWeight: 400,
    color: Colors.DarkNavy,
    marginTop: 0,
    marginBottom: Spacing.small,
  }),
  description: cxs({
    fontSize: 13,
    lineHeight: 1.5,
    color: Colors.DarkNavy,
    opacity: 0.6,
  }),
};
