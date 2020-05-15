import React from 'react'
import "./shop.css"
import {Button} from 'antd';
import shopIcon from "./../Pic/shopIcon.png"
import bannerPic from "./../Pic/banner.jpg"
import hat from "./../Pic/hat.png"
import hatLogo from "./../Pic/hatLogo.png"


export class Shop extends React.Component {
    jump(e) {
        window.location.href = '/cart'
    }


    render() {
        return (
            <body id='container1'>
                <div id="header">
                    <img class='shopIcon' src={shopIcon}/>
                </div>
                <div id="banner">
                    <img class='bannerPic' src={bannerPic}/>
             	</div>
                <div className="container1">
                    <img class='hatPic' src={hat}/> <span/><span/>
                    <h2>Purple Cap</h2> <span/>
                    <p>$30</p>
                    <Button type="primary" htmlType="back" onClick={this.jump.bind(this)}>
                      Buy it now!
                    </Button>
                </div>
                <div id="footer">
                    <img class='hatLogo' src={hatLogo}/>
                </div>
            </body>
        )
    }
}

export default Shop
