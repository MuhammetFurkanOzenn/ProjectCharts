import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-charts-wrapper';

const AnalysisPageLineChartComponent = props => {
    let data = props.data;
    
    return (
        <View style={styles.container}>
            <LineChart style={styles.chart}
                data={data}
            />
        </View>
    );
};

export default AnalysisPageLineChartComponent;



const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    View1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight / 15,
        marginBottom: windowHeight / 15,
    },
    chart: {
        // width:windowWidth*3/4,
        height:windowHeight*9/10,
    },
});
