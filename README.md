# React Native Calculator App

A modern and user-friendly calculator application built with React Native and Expo. This project was created as part of the technical assessment for Avegen.

## 🔗 Quick Links
- [APK Download](https://drive.google.com/drive/folders/1lxFiHuUKD9yEfkpwduc94XnBSq2f5078?usp=sharing)
- [Source Code](https://github.com/darpanneve/avengen)

## ✨ Features

- Clean and modern UI design
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal point calculations
- Clear function
- Error handling for invalid operations
- Custom footer signature
- Green highlight for equals button
- Responsive layout

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## 📱 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/darpan_calculator.git
```

2. Navigate to project directory:
```bash
cd darpan_calculator
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npx expo start
```

## 📁 Project Structure

```
darpan_calculator/
  ├── App.js                 # Main application entry
  ├── components/            # React components
  │   ├── Calculator.js      # Main calculator logic
  │   ├── Display.js         # Display component
  │   ├── Keypad.js         # Keypad layout
  │   ├── Button.js         # Button component
  │   └── Footer.js         # Footer with signature
  ├── package.json
  └── eas.json              # Expo build configuration
```

## 🚀 Building the APK

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to your Expo account:
```bash
eas login
```

3. Configure the build:
```bash
eas build:configure
```

4. Start the build process:
```bash
eas build -p android --profile preview
```

## 🎯 Technical Decisions

- **React Native & Expo**: Chosen for rapid development and easy deployment
- **Component-Based Architecture**: For better code organization and reusability
- **StyleSheet API**: Used for optimized styling performance
- **Modular Structure**: Each component has a single responsibility

## 🧪 Testing

To run the app on your device:
1. Download the APK from the provided Google Drive link
2. Install on any Android device running Android OS version 12 or above
3. Grant necessary permissions if prompted

## 👤 Developer

- **Name**: Darpan Neve
- **Project**: Avegen Technical Assessment