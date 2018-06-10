"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Users`
  });

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers(1, 10);
  }

  _onPressRow = (rowID, rowData) => {
    const { navigation } = this.props;
    navigation.navigate("Details", {
      user: rowData
    });
  };

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
            <FlatList
                data={this.props.users}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderRow}
                ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
      );
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderRow = ({ item, index }) => {
    return (
        <TouchableOpacity onPress={() => this._onPressRow(index, item)}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {parseInt(index) + 1}
              {". "}
              {item.name}
            </Text>
            <Text style={styles.description}>
              {item.email}
            </Text>
            <Text style={styles.description}>
              {item.company.name}
            </Text>
            <Text style={styles.description}>
              Contact No: {item.phone}
            </Text>
          </View>
        </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
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
    paddingTop: 10
  },

  indicator_height: {
    height: 80
  },
  separator: {
    height: 1,
    width: "83%",
    backgroundColor: "#CED0CE",
    marginLeft: "17%"
  }
});