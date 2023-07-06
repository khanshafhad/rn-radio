{
  /**
  * @params
  * *  Whether the radio button is selected or not (required)
  * * Callback function when the radio button is pressed (required)
  Custom styles for the radio button
  Custom styles for the selected radio button
  Custom styles for the inner circle of the selected radio button

 **/
}

import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export const CustomRadioButton = ({
  selected,
  onPress,
  buttonStyle,
  selectedButtonStyle,
  innerCircleStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.defaultButtonStyle,
          buttonStyle,
          selected && styles.selectedButtonStyle, // Apply selectedButtonStyle conditionally
        ]}>
        {selected && (
          <View style={[styles.defaultInnerCircleStyle, innerCircleStyle]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButtonStyle: {
    borderColor: 'rgba(0, 112, 252, 1)', // Apply selected button border color
  },
  defaultInnerCircleStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 112, 252, 1)',
  },
});
