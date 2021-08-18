import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

class PieChartComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'SQUARE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true,
        
      },
      data: {
        dataSets: [{
          values: [{value: 65, label: 'Sandwiches'},
            
            {value: 15, label: 'Soup'},
            {value: 9, label: 'Beverages'},
            {value: 15, label: 'Desserts'}],
          label: 'Pie dataset',
          config: {
            colors: [processColor('#665191'), processColor('#A05195'), processColor('#F95D6A'), processColor('#FF7C43')],
            valueTextSize: 15,
            valueTextColor: processColor('white'),
            sliceSpace: 5,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 0.5
          }
        }],
      },
      highlights: [{x:2}],
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor('darkgray'),

      }
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
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text>selected:</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('#fff')}
            chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            highlights={this.state.highlights}

            extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}

            entryLabelColor={processColor('green')}
            entryLabelTextSize={20}
            entryLabelFontFamily={'HelveticaNeue-Medium'}
            drawEntryLabels={false}

            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{text:'Pie center text!', color: processColor('grey'), fontFamily: 'HelveticaNeue-Medium', size: 15}}
            centerTextRadiusPercent={100}
            holeRadius={0}//40
            holeColor={processColor('#fff')}
            transparentCircleRadius={0} //45
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={360}
            onSelect={this.handleSelect.bind(this)}
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
  },
  chart: {
    flex: 1
  }
});

export default PieChartComponent;

