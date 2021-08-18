import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  LayoutAnimation,
  TouchableOpacity
} from "react-native";
import update from "immutability-helper";

import { LineChart } from "react-native-charts-wrapper";

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";
const _orange = "rgb(221, 70, 31)";
const _red = '#F95D6A';
const _purple = '#665191';
const _pink = '#ff64fe';

class LineChartGradientComponent extends React.Component {
  constructor() {
    super();
    


    this.state = {
      colorBool:false,
    };
    
  }
  chageLineColor (){
    this.setState({colorBool :!this.state.colorBool})
    console.log("Color Changed...");
  }


  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
      this.chageLineColor();
    } else {
      this.setState({ ...this.state, selectedEntry: event.nativeEvent.y  });  //JSON.stringify(entry)
      // event.nativeEvent.y ? null : this.chageLineColor();
    }

    console.log(event.nativeEvent);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{height: 80, alignItems:'center',}}>
          <Text >selected entry :  {this.state.selectedEntry}</Text>
          <TouchableOpacity onPress ={()=> this.chageLineColor()}><Text>Change Color</Text></TouchableOpacity>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={{
              dataSets: [
                {
                  values: [
                    {
                      y: 65,
                      x: 0,
                      marker: "65 kg"
                    },
                    {
                      y: 7,
                      x: 1,
                      marker: "77 kg"
                    },
                    {
                      y: 76,
                      x: 2,
                      marker: "76 kg"
                    },
                    {
                      y: 74,
                      x: 3,
                      marker: "|"
                    },
                    {
                      y: 76,
                      x: 4,
                      marker: "76 kg"
                    },
                    {
                      y: 65,
                      x: 5,
                      marker: "Today: 65 kg"
                    }
                  ],
                  label: "3.131",
                  config: {
                    mode: "CUBIC_BEZIER",
                    drawValues: false,
                    lineWidth: 2,
                    drawCircles: true,
                    circleColor: processColor(_purple),
                    drawCircleHole: false,
                    circleRadius: 3,
                    highlightColor: processColor("transparent"),
                    color: this.state.colorBool ?  processColor(_pink) : processColor(_purple),
                    drawFilled: false,
                    fillGradient: {
                      colors: [processColor(petrel), processColor(greenBlue)],
                      positions: [0, 0.5],
                      angle: 90,
                      orientation: "TOP_BOTTOM"
                    },
                    fillAlpha: 1000,
                    valueTextSize: 15
                  }
                },

                {
                  values: [
                    {
                      y: 35,
                      x: 0,
                      marker: "35 kg"
                    },
                    {
                      y: 47,
                      x: 1,
                      marker: "47 kg"
                    },
                    {
                      y: 78,
                      x: 2,
                      marker: "46 kg"
                    },
                    {
                      y: 44,
                      x: 3,
                      marker: "44 kg"
                    },
                    {
                      y: 46,
                      x: 4,
                      marker: "46 kg"
                    },
                    {
                      y: 35,
                      x: 5,
                      marker: "Today: 35 kg"
                    }
                  ],
                  label: "1.131",
                  config: {
                    mode: "CUBIC_BEZIER",
                    drawValues: false,
                    lineWidth: 2,
                    drawCircles: true,
                    circleColor: processColor(_red),
                    drawCircleHole: false,
                    circleRadius: 3,
                    highlightColor: processColor("transparent"),
                    color: processColor(_red),
                    drawFilled: false,
                    fillGradient: {
                      colors: [processColor('red'), processColor('yellow')],
                      positions: [0, 0.5],
                      angle: 90,
                      orientation: "TOP_BOTTOM"
                    },
                    fillAlpha: 1000,
                    valueTextSize: 15
                  }
                }
              ]
            }}
            chartDescription={{ text: "", textSize:13 }}  //Line Chart
            legend={{
              enabled: true,
            }}
            marker={{
              enabled: true,
              markerColor: processColor("white"),
              textColor: processColor("black"),
              textSize : 14, 
            }}
            xAxis={{
              enabled: true,
              granularity: 1,
              drawLabels: false,  //label which shows time
              position: "BOTTOM",
              drawAxisLine: true,
              drawGridLines: true,
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 12,
              textColor: processColor("grey"),
              valueFormatter: ["M", "T", "W", "T", "F", "S"]
            }}
            yAxis={{
              left: {
                enabled: true,
                textSize:11,
                drawLabels:false,
              },
              right: {
                enabled: false
              }
            }}
            autoScaleMinMaxEnabled={true}
            animation={{
              durationX: 0,
              durationY: 1500,
              easingY: "EaseInOutQuart"
            }}
            drawGridBackground={true}     //BG PROPS
            gridBackgroundColor= {processColor('white')}      //BG PROPS
            
            drawBorders={true}              //BORDER PROPS
            borderWidth={1}   //BORDER PROPS
            borderColor={processColor("grey")}    //BORDER PROPS

            touchEnabled={true}
            dragEnabled={false}
            scaleEnabled={false}
            scaleXEnabled={false}
            scaleYEnabled={false}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={event => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  chart: {
    height: 250
  }
});

export default LineChartGradientComponent;
