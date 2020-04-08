import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCode, faUserAstronaut, faChess } from '@fortawesome/free-solid-svg-icons'

//AuthStack
import Loading from './src/AuthFlow/Loading'
import Welcome from './src/AuthFlow/Welcome'
import Signin from './src/AuthFlow/Signin'

//AppStack
//IndexStack
import Index from './src/AppFlow/IndexStack/Index'

//LeaderboardStack
import Rankings from './src/AppFlow/RankingsStack/Rankings'

//ProfileStack
import Profile from './src/AppFlow/ProfileStack/Profile'

const config = {
  defaultNavigationOptions: {
    headerShown: false,
    headerStyle: {
      backgroundColor: '#1E1E1E'
    },
    headerTitleStyle: {
      color: '#4DC6AE'
    },
    headerTintColor: '#4DC6AE',
  }
}

const IndexStack = createStackNavigator(
  {
    Index,
  },
  config
)

const RankingsStack = createStackNavigator(
  {
    Rankings,
  },
  config
)

const ProfileStack = createStackNavigator(
  {
    Profile
  },
  config
)

const AppStack = createBottomTabNavigator(
  {
    '/index': {
      screen: IndexStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return <FontAwesomeIcon
            icon={faCode}
            size={25}
            style={focused ? { color: '#4DC6AE' } : { color: '#CCCCCC' }}
          />
        }
      }
    },
    '/rankings': {
      screen: RankingsStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return <FontAwesomeIcon
            icon={faChess}
            size={25}
            style={focused ? { color: '#4DC6AE' } : { color: '#CCCCCC' }}
          />
        }
      }
    },
    '/user': {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return <FontAwesomeIcon
            icon={faUserAstronaut}
            size={25}
            style={focused ? { color: '#4DC6AE' } : { color: '#CCCCCC' }}
          />
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: '#4DC6AE',
        inactiveTintColor: '#CCCCCC',
        style: {
          height: 60,
          backgroundColor: '#1E1E1E'
        }
      }
    }
  })

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerShown: false,
      }
    },
    Signin: {
      screen: Signin,
      navigationOptions: {
        headerShown: false,
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#121212'
      },
      headerBackTitle: ' ',
      headerTitleStyle: {
        color: '#EEEEEE'
      }
    }
  })

export default createAppContainer(createSwitchNavigator(
  {
    Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading'
  }
))