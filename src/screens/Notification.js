import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import { Pressable } from 'react-native';
import NotificationsTab from './screens/NotificationsTab';
import NotFoundScreen from './screens/NotFoundScreen';
import Dashboard from './screens/Dashboard';
import ReportTab from './screens/ReportTab';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HistoryTab from './screens/HistoryTab';
import UserProfile from './screens/UserProfile';
import ForgotPassword from './screens/ForgotPassword';
import Reports from './screens/Reports';


const MyTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: "rgb(18, 47, 245)",
  },
};

export default function Navigation({ colorScheme }) {
    
  return (
      <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
          {/* <RootNavigator /> */}
          <RootNavigator />
      </NavigationContainer>
  );
}const Stack = createNativeStackNavigator();

function RootNavigator() {

    return (
        <Stack.Navigator >
            {/* <Stack.Screen name="loadingScreen" component={loadingScreen}  options={{headerShown: false,}}/> */}
        
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false, }} />
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{
                headerShown: false,
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false, }} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false, }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="NotificationsTab" component={NotificationsTab} options={{
                    headerStyle: {
                        backgroundColor: '#00adb4',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, title: 'Notifications'
                }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

    return (
        <BottomTab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: "#d7cfcf", 
                tabBarInactiveTintColor: "white", 
                tabBarActiveBackgroundColor: "#393d46", 
                tabBarInactiveBackgroundColor: '#00adb4'
            }}>
            <BottomTab.Screen
                name="Dashboard"
                component={Dashboard}
                options={({ navigation, route }) => ({
                    title: 'Dashboard', headerStyle: {
                        backgroundColor: "#00adb4",
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('NotificationsTab')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="bell-o"
                                size={25}
                                color='white'
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Reports"
                component={Reports}
                options={({ navigation }) => ({
                    title: 'Report a Crime', headerStyle: {
                        backgroundColor: '#00adb4',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => <TabBarIcon name="edit" 
                    color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('NotificationsTab')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="bell-o"
                                size={25}
                                color='white'
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="HistoryTab"
                component={HistoryTab}
                options={({ navigation }) => ({
                    title: 'My Reports', headerStyle: {
                        backgroundColor: '#00adb4',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => <TabBarIcon name="th-list" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('NotificationsTab')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="bell-o"
                                size={25}
                                color='white'
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Profile"
                component={UserProfile}
                options={({ navigation }) => ({
                    title: 'Profile', headerStyle: {
                        backgroundColor: '#00adb4',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color }) => <TabBarIcon name="user-circle-o" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('NotificationsTab')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="bell-o"
                                size={25}
                                color='white'
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />

        </BottomTab.Navigator>
    );
}


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

