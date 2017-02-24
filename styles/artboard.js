const ArtboardStyles = {
  background: '#FFFFFF',
  boxShadow: '0 2px 6px 0 rgba(0,0,0,0.50)',
  position: 'relative',
  ':before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '2px solid #4CC1FC',
    opacity: 0,
  },
  ':hover': {
    ':before': {
      opacity: 1,
    },
  },
  ':after': {
    content: 'attr(data-name)',
    display: 'block',
    fontSize: 12,
    color: '#7B7B7B',
    position: 'absolute',
    top: -18,
    left: 0,
  },
};

export default ArtboardStyles;
