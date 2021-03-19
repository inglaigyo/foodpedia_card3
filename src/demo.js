import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./card.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450
  },
  media: {
    height: 0,
    paddingTop: "67.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://ardo.com/files/attachments/.18687/w1200h630zcCq85_PAELLA_ROYAL_207.jpg"
        />
        <CardContent>
          <div className="card-title">
            <Typography gutterBottom variant="h5" component="p">
              Paella Dish
            </Typography>
          </div>
          <Typography variant="body1" component="p">
            <div className="card-body">
              {" "}
              Paella is a Spanish rice dish originally from Valencia. Paella is
              one of the best-known dishes in Spanish cuisine. For this reason,
              many non-Spaniards view it as Spain's national dish, but Spaniards
              almost unanimously consider it to be a dish from the Valencian
              region.{" "}
            </div>
          </Typography>
          <CardActions disableSpacing>
            <Typography variant="body1" component="p">
              <p>Caloric Density (kcal) : 431</p>
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body1">
              <ul>
                <li>Fat:10.4g</li>
                <li>Sodium:640mg</li>
                <li>Carbohydrates:35.7g</li>
                <li>Fiber:2.5g</li>
                <li>Protien:12.2g</li>
              </ul>
            </Typography>
          </Collapse>
          <CardActions>
            <div className="btn">
              <Button variant="contained" size="small" color="primary">
                Add item
              </Button>
            </div>
            &nbsp;
            <Button variant="contained" size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
