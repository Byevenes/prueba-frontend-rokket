import React from 'react';
import PropTypes from 'prop-types';
//import moment from 'moment';
import 'moment/locale/es';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostEntry = ({ owner, ...post }) => {
  const classes = useStyles();

  // No pude modificar la fecha con moments no entendi el porque de esto
  //   const datePubling = moment(post.publishDate, 'DD-MM-YYYY HH:mm:ss').toDate();
  //   console.log(datePubling);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={owner.picture}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${owner.firstName}  ${owner.lastName}`}
        subheader={owner.email}
      />
      <CardMedia
        className={classes.media}
        image={post.image}
        title="Paella dish"
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {post.tags.map((tag, index) => (
          <div
            style={{
              backgroundColor: '#ed2c6c',
              margin: 20,
              borderRadius: 20,
              textAlign: 'center',
              width: '100vw',
              color: 'white',
            }}
            key={index + 1}
          >
            {tag}
          </div>
        ))}
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing style={{ justifyContent: 'center' }}>
        <IconButton aria-label="add to favorites" color="primary">
          <FavoriteIcon />
        </IconButton>
        {post.likes} Likes {post.publishDate}
      </CardActions>
      <hr />
    </Card>
  );
};

PostEntry.propTypes = {
  owner: PropTypes.object.isRequired,
  post: PropTypes.object,
};

export default PostEntry;
