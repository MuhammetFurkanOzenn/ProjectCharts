import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, processColor, ScrollView, Button, TouchableOpacity, _Image } from 'react-native'
import { HorizontalBarChart, LineChart } from 'react-native-charts-wrapper';
import AllChartsComponent from '../../components/AllChartsComponent';
import AnalysisPageLineChartComponent from '../../components/AnalysisPageLineChartComponent';
import BarChartComponent from '../../components/BarChartComponent';
import CandleStickChartComponent from '../../components/CandleStickChartComponent';
import GroupBarChartComponent from '../../components/GroupBarChartComponent';

// import InfiniteScrollLineChartComponent from '../../components/InfiniteScrollLineChartComponent';
import LineChartComponent from '../../components/LineChartComponent';
import LineChartGradientComponent from '../../components/LineChartGradientComponent';
import LinkageChartComponent from '../../components/LinkageChartComponent';
import PieChartComponent from '../../components/PieChartComponent';
/**
 * # BAR CHART DONE # EXCEPT HİGLİGTS PROP | DIDNT TEST
 * # HORİZONTAL BAR CHART DONE # 
 * 
 * 
 * 
 */




const AnalysisScreen = props => {
    let data = props.data;
    let chartConfig = props.chartConfig;
    const screenWidth = Dimensions.get("window").width;
    
    const [_index, set_index] = useState(1)
    const increase = () => {
        if (true) {             //!= sizeOfCharts
            set_index(_index + 1)
            console.log("Increase Worked")
        }
    }
    const decrease = () => {
        if (_index != 1) {
            set_index(_index - 1)
            console.log("Decrease Worked")
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerForButtons}>
                <TouchableOpacity onPress={() => increase()}><Text>Increase</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => decrease()}><Text>Decrease</Text></TouchableOpacity>                
                <Text>{_index}</Text>
            </View>
            <View style={styles.containerInside}>
                <AllChartsComponent 
                    index={_index} 
                    
                    dataBarC = {dataBarChart} 
                    // legendBarC = {legendBarChart} 
                    // xAxisBarC = {xAxisBarChart} 
                    // highlightsBarC = {higligtsBarChart}

                ></AllChartsComponent>
            </View>
        </View>
    );
};

export default AnalysisScreen;

// 

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    containerForButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,

    },
    containerInside: {
        flex: 1,

    },
    View1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight / 15,
        marginBottom: windowHeight / 15,
    },
    chart: {
        width: windowWidth * 3 / 4,
        height: windowHeight * 3 / 4,
    },
});

//**  */
const data = { dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 4 }, { y: 1 }, { y: 1.2 }, { y: 1 }] }] }

//** LİNE CHART PROPS */

const dataLineChart = {
    dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 4 }, { y: 12 }, { y: 1.2 },] }]
};

//** BAR CHART PROPS */
const legendBarChart = {
    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5
};

const dataBarChart = {
    dataSets: [{
        values: [{ y: 111 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
        label: 'Bar dataSet',
        config: {
            color: processColor('teal'),
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
        }
    }],

    config: {
        barWidth: 0.7,
    }
};
const higligtsBarChart = {
    highlights: [{ x: 3 }, { x: 6 }],
};
const xAxisBarChart = {
    valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    granularityEnabled: true,
    granularity: 1,

};

//** HORIZONTAL BAR CHART PROPS */

const legendHorizontalBarChart = {

    enabled: true,
    textSize: 14,
    form: 'SQUARE',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5,

}


const dataHorizontalBarChart = {
    dataSets: [{
        values: [{ y: 101 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
        label: 'Bar dataSet',
        config: {
            color: processColor('teal'),
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
        }
    }],
};

const xAxisHorizontalBarChart = {
    valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    position: 'BOTTOM',
    granularityEnabled: true,
    granularity: 1,
    labelCount: 10,
}
const yAxisHorizontalBarChart = {
    left: { axisMinimum: 0 }
}