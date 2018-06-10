"use strict";

import React from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  View,
  Text,
} from "react-native";

export default class ItemDetails extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {

  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.navigation.state.params;

    return (
      <View>
        <Text style={styles.title}>
          {1}
          {". "}
          {user.name}
        </Text>
        <Text style={styles.description}>
          {user.email}
        </Text>
        <Text style={styles.description}>
          {user.company.name}
        </Text>
        <Text style={styles.description}>
          Contact No: {user.phone}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "600"
  },

  description: {
    marginTop: 5,
    fontSize: 14
  },
});