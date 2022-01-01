import React, { useContext } from "react";
import {AccountContext} from "../context/AccountProvider"
import {clientId} from "../../data"
import {addUser} from "../../server/api.js"
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrCode: {
    height: 264,
    width: 264,
    padding: "50px 0 0 50px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "&  > *": {
      padding: 0,
      marginTop: 15,
      fontSize: 18,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialog: {
    marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
  },
};
const Login = ({ classes }) => {

const {account, setAccount} = useContext(AccountContext)


  const classStyle = useStyles();
  
const onLoginSuccess = async (res) =>{
  console.log('Login Success:', res.profileObj);
  setAccount(res.profileObj);
  await addUser(res.profileObj)
}
const onLoginFailure = ()=>{
    console.log("Login Failed");
}

  return (
    <div>
      <Dialog
        open={true}
        classes={{ paper: classes.dialog }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={classStyle.component}>
          <Box className={classStyle.leftComponent}>
            <Typography className={classStyle.title}>
              To use WhatsApp on your computer:
              <List className={classStyle.list}>
                <ListItem>1.Open WhatsApp on your phone</ListItem>
                <ListItem>
                  2.Tap Menu Or Settings and Select Linked Devices
                </ListItem>
                <ListItem>
                  3.Point your phone to this screen to capture the code
                </ListItem>
              </List>
            </Typography>
          </Box>
          <Box style={{position:'relative'}}>
            <img
              src={"https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"}
              alt="qr"
              className={classStyle.qrCode}
            />
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
            <GoogleLogin 
             clientId={clientId}
             buttonText=""
             onSuccess={onLoginSuccess}
             onFailure={onLoginFailure}
             cookiePolicy={'single_host_origin'}
             isSignedIn={true}
            />
            </div>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default withStyles(style)(Login);
