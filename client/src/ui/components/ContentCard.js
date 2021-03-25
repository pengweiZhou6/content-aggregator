import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dummyImage from '../../homePic.jpg';
import server from '../../config/server';
import Skeleton from '@material-ui/lab/Skeleton';

const dict = {
    "AI": "🤖",
    "Career": "👔",
    "Data": "🔢",
    "Design": "🖌️",
    "Development": "💻",
    "DevOps": "🔌",
    "Diversity": "✌️",
    "Engineering": "⚙️",
    "Culture": "🌎",
    "News": "🆕",
};

const companyColour = {
    "Clio": "#3d8af7",
    "Visier": "#91e4fb",
    "Radical IO": "#4dd7fa",
    "Procurify": "#629c44",
    "Hootsuite": "#444444",
    "Galvanize": "#9c29b7",
    "Tasktop": "#92d36e"
};

const useStyles = makeStyles({
    root: {
        marginBottom: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    media: {
        maxHeight: '84px',
        maxWidth: '84px',
        padding: '16px',
        flexGrow: '1',
        cursor: 'pointer'
    },
    header: {
        flexGrow: '1',
        flexBasis: '0',
        minWidth: '0',
        boxSizing: 'border-box',
    },
    content: {
        overflow: 'hidden'
    },
    title: {
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    titleText: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: 'block'
    },
    companyChip: {
        color: props => (props.company && companyColour[props.company]) || '#f50057'
    }
});

const fetchMetaData = async (metaDataUrl) => {
    try {
        const url = new URL(`${server}/proxy/`);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: metaDataUrl,
            })
        });

        if (!response.ok) { 
            return null;
        }

        const metaData = await response.json();
        return metaData;
    } catch (error) {
        return null;
    }
}

export default function ContentCard(props) {
    const classes = useStyles({ company: props.company && props.company.name });

    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        fetchMetaData(props.url).then((metaData) => {
            if (metaData) {
                setImage(metaData['og:image']);
                setDescription(metaData['description']);
            } else {
                setImage("");
                setDescription("");
             }

        });
    }, [props.url]);

    return (
        <Card className={classes.root}>
            {image === null ?
                <Skeleton animation="wave" variant="rect" height={116} width={116} /> :
                <CardMedia
                    className={classes.media}
                    onClick={() => window.open(props.url, '_blank')}
                    image={image === "" ? dummyImage : image}
                />
            }
            <CardHeader
                classes={{
                    root: classes.header,
                    content: classes.content
                }}
                title={<div className={classes.title}>
                    <Link className={classes.titleText} target="_blank" rel="noopener" href={props.url} color="inherit">{props.title}</Link>
                    {description == null ?
                        <Skeleton animation="wave" variant="text" height={20} /> :
                        <Typography className={classes.titleText} variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography> 
                    }
                </div>}
                subheader={
                    <div>
                        {props.category &&
                            <Chip
                                variant="outlined"
                                size="medium"
                                color="primary"
                                label={props.category && props.category.name + " " + (dict[props.category.name] ? dict[props.category.name] : "")}
                            />
                        }
                    {props.category && <span>&nbsp;</span>}
                    {props.company &&
                            <Chip variant="outlined"
                                size="medium"
                                className={classes.companyChip}
                                label={props.company && props.company.name}
                            />
                        }
                    {props.company && <span>&nbsp;</span>}
                    <Chip variant="outlined"
                            size="medium"
                            label={" Posted On: " + new Date(props.last_updated).toLocaleDateString()}
                        />
                    </div>}
            />
        </Card>
    );
}
