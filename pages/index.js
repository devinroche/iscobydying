import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout.js'

const apiKey = 'b9d3d62415587dc6ffbbc2f3f3f28835cf015f8e'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        let data = await axios.get(`http://api.waqi.info/search/?token=${apiKey}&keyword=Shanghai`)
        let aqi = Number(data.data.data[0].aqi)
        let quality = ''
        switch (true) {
            case (aqi < 50):
                quality = 'great'
                break;
            case (50 < aqi && aqi < 100):
                quality = 'decent'
                break;
            case (100 < aqi && aqi < 150):
                quality = 'sorta unhealty'
                break;
            case (150 < aqi && aqi < 200):
                quality = 'unhealthy'
                break;
            case (200 < aqi && aqi < 300):
                quality = 'very unhealthy'
                break;
            case (300 < aqi && aqi < 500):
                quality = 'hazardous'
                break;
            default:
                quality = 'unsure'
        }

        return { aqi: data.data.data[0].aqi, quality: quality }
    }

    render() {

        return (
            <Layout>
                <div>
                    <h1>is coby dying today?</h1>
                    <h2>air quality: {this.props.aqi} </h2>
                    <h2>coby is feeling {this.props.quality}!</h2>
                </div>
            </Layout>
        )
    }
}