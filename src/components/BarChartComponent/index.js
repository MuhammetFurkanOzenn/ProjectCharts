import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

class BarChartComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      // legend: {
      //   enabled: true,
      //   textSize: 14,
      //   form: 'SQUARE',
      //   formSize: 14,
      //   xEntrySpace: 10,
      //   yEntrySpace: 5,
      //   formToTextSpace: 5,
      //   wordWrapEnabled: true,
      //   maxSizePercent: 0.5
      // },
      // data: {
      //   dataSets: [{
      //     values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
      //     label: 'Bar dataSet',
      //     config: {
      //       color: processColor('teal'),
      //       barShadowColor: processColor('lightgrey'),
      //       highlightAlpha: 90,
      //       highlightColor: processColor('red'),
      //     }
      //   }],

      //   config: {
      //     barWidth: 0.7,
      //   }
      // },
      highlights: [{x: 3}, {x: 6}],
      // xAxis: {
      //   valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      //   granularityEnabled: true,
      //   granularity : 1,
      // }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
    console.log("Bar Chart Cliked => ", event.nativeEvent.x )
  }


  render() {
    const {data, legend, xAxis, highlights} = this.props;
    return (
      <View style={{flex: 1}}>

        <View style={{height:80}}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>


        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            data={data}
            xAxis={xAxis}
            animation={{durationX: 2000}}
            legend={legend}
            gridBackgroundColor={processColor('#ffffff')}
            visibleRange={{x: { min: 5, max: 5 }}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            onSelect={this.handleSelect.bind(this)}
            highlights={this.state.highlights}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default BarChartComponent;







// import React, { Component } from 'react'
// import { Text, View, StyleSheet, Dimensions } from 'react-native'
// import { LineChart } from 'react-native-charts-wrapper';

// const BarChartComponent = props => {
//     let data = props.data;
//     let chartConfig = props.chartConfig;
    
    
//     return (
//         <View style={styles.container}>
//             <BarChart
//             style={styles.chart}
//             data={data}
//             xAxis={this.state.xAxis}
//             animation={{durationX: 2000}}
//             legend={legend}
//             gridBackgroundColor={processColor('#ffffff')}
//             visibleRange={{x: { min: 5, max: 5 }}}
//             drawBarShadow={false}
//             drawValueAboveBar={true}
//             drawHighlightArrow={true}
//             onSelect={this.handleSelect.bind(this)}
//             highlights={this.state.highlights}
//             onChange={(event) => console.log(event.nativeEvent)}
//           />
//         </View>
//     );
// };

// export default BarChartComponent;



// const windowHeight = Dimensions.get('window').height
// const windowWidth = Dimensions.get('window').width
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5FCFF'
//       },
//     View1: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: windowHeight / 15,
//         marginBottom: windowHeight / 15,
//     },
//     chart: {
//         flex: 1
//     },
//     // chart: {
//     //     width:windowWidth*3/4,
//     //     height:windowHeight*3/4,
//     // },
// });
