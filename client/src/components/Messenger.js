import React,{useContext} from 'react'
import {AppBar , Toolbar , makeStyles , Box} from '@material-ui/core'
import Login from './account/Login'
import {AccountContext} from "./context/AccountProvider"
import ChatBox from './account/ChatBox'


const useStyles = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    loginHeader : {
        height: 200,
        background : "#00bfa5",
        boxShadow:'none'
    },
    header : {
        height: 115,
        background : "#00bfa5",
        boxShadow:'none'
    },
})


const Messenger = () => {
    const {account} = useContext(AccountContext)
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.component} >
            <AppBar  className={ account ? classes.header :  classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
             {account ? <ChatBox /> : <Login/>}
            </Box>
        </div>
    )
}

export default Messenger
