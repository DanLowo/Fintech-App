import React from 'react'

import Navbar from "./components/navbar"
import Card from "./components/card"
import Subscriptions from "./components/Subscriptions"
import BottomNav from "./components/bottomNav"

function index() {
    return (
        <div>
            <div id="fintech">
                <Navbar/>
                <Card name="Damilola Francis" expiryDate="02/24" number="5696 **** **** **69"/>
                <Subscriptions show={true} sectionTitle="My Subscriptions" showTabs={true}/>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>
        </div>
    )
}

export default index
