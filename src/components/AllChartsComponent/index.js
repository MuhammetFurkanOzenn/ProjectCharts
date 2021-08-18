import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, processColor, ScrollView, Button, TouchableOpacity } from 'react-native'
import { HorizontalBarChart, LineChart } from 'react-native-charts-wrapper';
import AnalysisPageLineChartComponent from '../../components/AnalysisPageLineChartComponent';
import BarChartComponent from '../../components/BarChartComponent';
import CandleStickChartComponent from '../../components/CandleStickChartComponent';
import GroupBarChartComponent from '../../components/GroupBarChartComponent';

// import InfiniteScrollLineChartComponent from '../../components/InfiniteScrollLineChartComponent';
import LineChartComponent from '../../components/LineChartComponent';
import LineChartGradientComponent from '../../components/LineChartGradientComponent';
import LinkageChartComponent from '../../components/LinkageChartComponent';
import PieChartComponent from '../../components/PieChartComponent';
import HorizontalBarChartComponent from '../HorizontalBarChartComponent';

/**
 * # BAR CHART DONE # EXCEPT HİGLİGTS PROP | DIDNT TEST
 * # HORİZONTAL BAR CHART DONE # 
 * 
 * 
 * 
 */




const AllChartsComponent = props => {
    let {dataBarC, legendBarC, xAxisBarC, highlightsBarC} = props;
    let index = props.index;            //proptype ile integer tanımla !
    //let data = props.data;
    let chartConfig = props.chartConfig;
    const screenWidth = Dimensions.get("window").width;
    const [_values, setValues] = useState([{ y: 101 }, { y: 105 }, { y: 95 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }]);
    const changeValues = () => {
        
        setValues(_values = [{ y: 101 }, { y: 105 }, { y: 95 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }])
        console.log("Values Changed...")
        
    }

    // checkSwitch = (index) => {

    // }
    // const [visibleHorizontalBarChart, doHorizontalBarChartVisible] = React.useState(visibleHorizontalBarChart => !visibleHorizontalBarChart);
    // const [visiblePieChart, doPieChartVisible] = React.useState(visiblePieChart => !visiblePieChart);
    // const buttonHandler = () => {
    //     // doBarChartVisible(visibleBarChart => !visibleBarChart)
    //     this.setState({ visibleBarChart: true })
    //     console.log(visibleBarChart);
    // }

    // useEffect(() => {
    //     console.log(visibleBarChart);
    // }, [visibleBarChart]);

    //** USE ENUM */
    const ChartsEnum = { "BAR_CHART": 1, "HORIZONTAL_BAR_CHART": 2 }    //....
    Object.freeze(ChartsEnum)       // Values doesn't change

    switch (index) {
        case ChartsEnum.BAR_CHART:
            return (
                <View style={styles.container}>
                    <BarChartComponent data={dataBarC} legend={legendBarChart} highlights={higligtsBarChart} xAxis={xAxisBarChart} ></BarChartComponent>
                </View>
            );

        case ChartsEnum.HORIZONTAL_BAR_CHART:
            return (
                <View style={styles.container}>
                    <HorizontalBarChartComponent data={dataBarChart} legend={legendHorizontalBarChart} xAxis={xAxisHorizontalBarChart} yAxis={yAxisHorizontalBarChart}></HorizontalBarChartComponent>
                </View>
            );
        case 3:
            return (
                <View style={styles.container}>
                    <LineChartGradientComponent></LineChartGradientComponent>
                </View>
            );
        case 4:
            return (
                <View style={styles.container}>
                    <AnalysisPageLineChartComponent data={dataLineChart}></AnalysisPageLineChartComponent>
                </View>
            );
        case 5:
            return (
                <View style={styles.container}>
                    <LineChartComponent></LineChartComponent>
                </View>
            );
        case 6:
            return (
                <View style={styles.container}>
                    <CandleStickChartComponent></CandleStickChartComponent>
                </View>
            );
        case 7:
            return (
                <View style={styles.container}>
                    <LinkageChartComponent></LinkageChartComponent>
                </View>
            );
        case 8:
            return (
                <View style={styles.container}>
                    <PieChartComponent></PieChartComponent>
                </View>
            );
        default:
            return (
                <View style={styles.container}>
                    <View style={styles.containerInside}>
                        <GroupBarChartComponent></GroupBarChartComponent>
                    </View>
                </View>
            );
    }
    
    
};

export default AllChartsComponent;

{/* <AnalysisPageLineChartComponent data={dataLineChart}></AnalysisPageLineChartComponent> */ }


{/* <HorizontalBarChartComponent data={dataHorizontalBarChart} legend={legendHorizontalBarChart} xAxis={xAxisHorizontalBarChart} yAxis={yAxisHorizontalBarChart}></HorizontalBarChartComponent> */ }
{/* data = {dataHorizontalBarChart} legend = {legendHorizontalBarChart} xAxis = {xAxisHorizontalBarChart} yAxis = {yAxisHorizontalBarChart} */ }


{/* <InfiniteScrollLineChartComponent></InfiniteScrollLineChartComponent> */ }
{/* <LineChartGradientComponent></LineChartGradientComponent> */ }

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
//** GENERAL PROPS */

const _values= ([{ y: 101 }, { y: 105 }, { y: 95 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }]);


//**  */
const data = { dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 4 }, { y: 1 }, { y: 1.2 }, { y: 1 }] }] }

//** LİNE CHART PROPS */

const dataLineChart = {
    dataSets: [{ label: "demo", values: [{ y: 16 }, { y: 4 }, { y: 12 }, { y: 1.2 },] }]
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
        values: _values,
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
        values: _values,
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