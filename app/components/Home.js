"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicator
} from "react-native";

export default class Home extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds,
      data: props.data
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (this.props.data !== data) {
      this.setState({ data });
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={[styles.indicator_height]}
            size="small"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.ds.cloneWithRows(this.state.data)}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      );
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {parseInt(rowID) + 1}
          {". "}
          {rowData.title}
        </Text>
        <Text style={styles.description}>{rowData.description}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    // height: 50,
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: "600"
  },

  description: {
    marginTop: 5,
    fontSize: 14
  },

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 20
  },

  indicator_height: {
    height: 80
  }
});
