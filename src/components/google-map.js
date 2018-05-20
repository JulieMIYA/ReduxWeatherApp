import React, { Component } from 'react';

export default class GooglMap extends Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }
    componentDidMount() {
        // after react verson 16.3 : this.myRef.current is assigned with the DOM element when the component mounts,
        // and assigned back to null when it unmounts
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    }
    render(){
        return (
            <div ref= "map" />
        )
    }
}