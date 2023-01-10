import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles.js';


export const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {
    const classes = useStyles();
    
  return (
        <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target ="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://media.istockphoto.com/photos/words-news-on-digital-blue-background-picture-id892726222'}/>
                <div className={classes.details}>
                    <Typography varian="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography varian="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5"></Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
  )
}

export default NewsCard;
