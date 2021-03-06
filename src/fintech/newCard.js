import React, { useState } from 'react'

import {Link} from "react-router-dom"

// import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"

import Card from "./components/card"
import BottomNav from "./components/bottomNav"
import DynamicBar from './components/dynamicBar'

import CardInWallet from "./assets/card-in-wallet.jpg"

function NewCard() {

    const [cardName, setCardName] = useState(' ')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiryDate, setCardExpiryDate] = useState('')
    const [cardCVV, setCardCVV] = useState('')
    const [navigation, setNavigation] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setNavigation(true)
    }

    return (
        <div>
            <div id="fintech">
                <DynamicBar title="Add a Card" />
                <Card name={cardName} expiryDate={cardExpiryDate} number={cardNumber} />
                <form id="addCardForm" onSubmit={handleSubmit}>
                    <InputLabel id="nameOnCard">Name on card</InputLabel>
                    <TextField required type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} size="medium" fullWidth variant="outlined"></TextField>
                    <br /> <br />
                    <InputLabel id="nameOnCard">Card number</InputLabel>
                    <TextField
                        onKeyUp={(e) => {
                            if (cardNumber.length >= 17) {
                                let v = cardNumber.split('');
                                v.length = 16;
                                setCardNumber(v.join(""))
                            }
                        }}
                        required value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} type="number" size="medium" fullWidth variant="outlined"></TextField>
                    <br /> <br />
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={6}>
                            <InputLabel id="nameOnCard">Expiry date</InputLabel>
                            <TextField
                                onKeyUp={(e) => {
                                    if (cardExpiryDate.length >= 5) {
                                        let v = cardExpiryDate.split('');
                                        v.length = 4;
                                        setCardExpiryDate(v.join(""))
                                    }
                                }}
                                required value={cardExpiryDate} onChange={(e) => setCardExpiryDate(e.target.value)} type="number" size="medium" fullWidth variant="outlined"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            {/* <input type="number" max mi /> */}
                            <InputLabel id="nameOnCard">CVV</InputLabel>
                            <TextField
                                onKeyUp={(e) => {
                                    if (cardCVV.length >= 4) {
                                        let v = cardCVV.split('');
                                        v.length = 3;
                                        setCardCVV(v.join(""))
                                    }
                                }}
                                required value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} type="number" size="medium" fullWidth variant="outlined"></TextField>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" id="noSubscriptionsButton">Add Card</Button>
                </form>
            </div>
            <Drawer align="center" anchor="bottom" open={navigation} onClose={() => setNavigation(false)}>
                <div id="addCardDrawer">
                    <img alt="card" src={CardInWallet}  id="addedCardImg" />
                    <Typography variant="h6">Bank Card Added</Typography>
                    <Typography variant="body2">You have successfully added a new bank card to your account</Typography>
                    <Button component={Link} to="/" fullWidth variant="contained" color="primary" id="noSubscriptionsButton">Done</Button>
                </div>
            </Drawer>
            <div id="bottomNavSpacing">
                <BottomNav />
            </div>
        </div>
    )
}

export default NewCard
