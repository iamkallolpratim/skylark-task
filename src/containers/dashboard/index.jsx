import React, { Component } from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { mapBoxToken  , setPolygonData,getPolygonData} from '../../helpers/utils';
import PolygonForm from './polygonForm';

class DashboardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible : false,
            polyGondata : JSON.parse(getPolygonData('polygon_data')) ? JSON.parse(getPolygonData('polygon_data')) : [] ,
            index:0,
            polygons:{}
            
        }
    }

    saveArea = (data) => {
        let {polyGondata } = this.state;
        let newpolyGondata = polyGondata;
        this.setState({visible:false , polyGondata :newpolyGondata });
        setTimeout(
            function() {
                setPolygonData('polygon_data' , this.state.polyGondata)
            }
            .bind(this),
            100
        );
    }

    componentDidMount(){
        let {polygons} = this.state
        let newPolygons = polygons;
        newPolygons['type'] = 'FeatureCollection';
        newPolygons['features'] = [];
        const data = JSON.parse(getPolygonData('polygon_data'));
        
        if(data){
            data.forEach(x=>{
                newPolygons['features'].push(x);
            })
    
            this.setState({polygons : newPolygons});
    
            setTimeout(
                function() {
                    console.log('Polygon Data',this.state.polygons);
                }
                .bind(this),
                100
            );
        }
        
        
    }

    cancel = () => {
        this.setState({visible:false});
    }

    onDrawCreate = ({features}) => {
        const {polyGondata} = this.state;
        let index = this.state.index;
        let newIndex =  index+1;
        let newData = polyGondata;
        newData.push(features[0]);

        let filteredData = newData.filter(function (el) {
            return el != null;
        });
        this.setState({visible:true , polyGondata:filteredData , index:newIndex});
    }

    onDrawDelete = (e) => {
        console.log(e);
    }

    render() {
        return (
            <React.Fragment>
                <p>
                    Draw a Polygon using the draw tool. Save the polyfon with a name and reload the page
                </p>
                <MapGL
                    style={{ width: "100%", height: "500px" }}
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    accessToken={mapBoxToken}
                    latitude={37.78}
                    longitude={-122.41}
                    zoom={14}
                    
                >
                    <Draw
                        combineFeaturesControl={false}
                        uncombineFeaturesControl={false}
                        lineStringControl={false}
                        pointControl={false}
                        onDrawCreate={this.onDrawCreate}
                        trashControl={false}
                        data = {this.state.polygons}
                    />
                </MapGL>
                <PolygonForm visible={this.state.visible} saveArea={this.saveArea} cancel={this.cancel}/> 
            </React.Fragment>
        );
    }

}
export default DashboardContainer;