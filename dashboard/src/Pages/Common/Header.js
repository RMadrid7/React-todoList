import {Box,Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Link, useHistory } from "react-router-dom";
import Theme from "../../Theme";
import logo_small from "../../Statics/Images/logo_small.png";

const Header = () =>{
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        avatar: {
            backgroundColor: red[500],
        },
        subColor: {
            color: 'yellow',
            fontSize: 12,
        },
    }));
    const classes = useStyles();
    return (
        <Box py={8} bgcolor="primary.main" color="white" justifyItems="center">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid items xs={6}>
                    <Box display="flex">
                        <img
                            src={logo_small}
                            alt="logo"
                            onClick={() => {
                                history.push("/");
                            }}
                        />
                    </Box>
                </Grid>


            </Grid>

        </Box> 
    )
}

export default Header