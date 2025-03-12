# UserInformation
Welcome to the UserInformation project! This is a mobile application built using React Native CLI for iOS, designed to display and manage user information fetched from an external API.

# Overview
The UserInformation app is a cross-platform mobile application developed with React Native, utilizing the React Native CLI for a customized setup. It targets iOS devices and provides a user-friendly interface to:

Fetch and display user data (e.g., name, email, avatar) from a public API.

Navigate through a list of users using Previous/Next buttons.

The project was initialized with React Native version 0.74.1 and uses Node.js 22.2.0 with npm 10.8.1 as of March 11, 2025.

# Features
User Data Display: Shows details such as ID, UID, username, email, and avatar image.

Navigation: Allows users to cycle through a set of 80 users.

iOS Compatibility: Optimized for iOS 18.2 and tested on simulators.

React Native CLI: Custom setup for enhanced control over the development process.

# Prerequisites
Node.js: v22.2.0 or later

npm: v10.8.1 or later

Xcode: Latest version with iOS 18.2 SDK

React Native CLI: Installed globally (npm install -g react-native-cli)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the repository

```
git clone https://github.com/CodesbyLakshay/UserInformation.git
cd UserInformation
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:


### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

- EMFILE Error: If you encounter EMFILE: too many open files, increase the macOS file descriptor limit:
```
ulimit -n 65536
```

- Ensure Watchman is installed (brew install watchman) and restart Metro with:
```
npm start -- --reset-cache --watchman
```
# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
