import React from 'react'
import axios from 'axios'

export default class extends React.Component {
    static async getInitialProps({req}) {
        let fart = 'foo'
        let data = await axios.get("http://api.waqi.info/feed/shanghai/?token=demo")
        return {data: data.data.data, status: data.data.status}
    }

    render() {

        return (
            <div>
                <h1>is coby dying today</h1>
                <h2>hows he doin: {this.props.status}</h2>
                <h2>air quality: {this.props.data.aqi}</h2>
            </div>
        )
    }
}