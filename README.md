# rn-radio

rn-radio is a reusable React Native component that provides a customizable radio button interface for your applications.

## Installation

You can install the rn-radio library using npm or yarn.

```bash
npm install rn-radio

or

yarn add rn-radio

## Usage

 import { CustomRadioButton } from 'rn-radio';

// Use the CustomRadioButton component in your application
// Example usage:
<CustomRadioButton
  selected={selectedOption === 'Option 1'}
  onPress={() => handleRadioButtonPress('Option 1')}
  buttonStyle={{ borderColor: 'red' }}
  selectedButtonStyle={{ borderColor: 'green' }}
  innerCircleStyle={{ backgroundColor: 'yellow' }}
/>



Certainly! If you want to use the name "rn-radio" for your custom radio button library, here's an updated example for the README.md file:

markdown
Copy code
# rn-radio

rn-radio is a reusable React Native component that provides a customizable radio button interface for your applications.

## Installation

You can install the rn-radio library using npm or yarn.

```bash
npm install rn-radio
or

bash
Copy code
yarn add rn-radio
Usage
Import the CustomRadioButton component from the library in your React Native project and use it as follows:

javascript
Copy code
import { CustomRadioButton } from 'rn-radio';

// Use the CustomRadioButton component in your application
// Example usage:
<CustomRadioButton
  selected={selectedOption === 'Option 1'}
  onPress={() => handleRadioButtonPress('Option 1')}
  buttonStyle={{ borderColor: 'red' }}
  selectedButtonStyle={{ borderColor: 'green' }}
  innerCircleStyle={{ backgroundColor: 'yellow' }}
/>
Props
The CustomRadioButton component accepts the following props:

selected (boolean, required): Whether the radio button is selected or not.
onPress (function, required): Callback function triggered when the radio button is pressed.
buttonStyle (object): Custom styles for the radio button container.
selectedButtonStyle (object): Custom styles for the selected radio button container.
innerCircleStyle (object): Custom styles for the inner circle of the selected radio button.
License

This library is licensed under the MIT License.