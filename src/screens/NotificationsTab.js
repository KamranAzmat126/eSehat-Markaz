
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';

const IconInCircle = (
    { circleSize, borderWidth = 2,
      borderColor = "black", ...props }) => (
    <View
        style={{
            width: circleSize,
            height: circleSize,
            borderRadius: .5 * circleSize,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#f7faf8'
        }}
    >
        <IconFA
            {...props}
        />
    </View>
)


export default function NotificationsTab() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'bold'
                }}>Latest Notifications</Text>
            </View>
            <View style={styles.notify}>
                <View style={styles.notification}>
                    <IconInCircle
                        name="bell-o"
                        size={25}
                        color="#57D4EB"
                        style={styles.thumbnail}
                        borderWidth={1}
                        circleSize={50}
                    />
                </View>
                <View style={styles.notificationLine}>
                    <Text style={styles.note}>
                        Your appoinment has been booked successfully.
                    </Text>
                </View>

            </View>
            <View style={styles.notify}>
                <View style={styles.notification}>
                    <IconInCircle
                        name="bell-o"
                        size={25}
                        color="#57D4EB"
                        style={styles.thumbnail}
                        borderWidth={1}
                        circleSize={50}
                    />
                </View>
                <View style={styles.notificationLine}>
                    <Text style={styles.note}>
                        Your appoinment has been reschedule.
                    </Text>
                </View>

            </View>
            <View style={styles.notify}>
                <View style={styles.notification}>
                    <IconInCircle
                        name="bell-o"
                        size={25}
                        color="#57D4EB"
                        style={styles.thumbnail}
                        borderWidth={0}
                        circleSize={50}
                    />
                </View>
                <View style={styles.notificationLine}>
                    <Text style={styles.note}>
                        Your appoinment has been canceled.
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        height: '100%',
        width: 'auto'
    },
    note: {
        fontSize: 16,
        color: 'black',
        padding: 15,
    },
    notify: {
        flexDirection: 'row',

        marginTop: 5,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
    },
    title: {
        height: 30,
        paddingLeft: 20,
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.3
    },
    thumbnail: {
        height: 68,
        width: 68,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 43,
        marginTop: 40,
    },
    notification: {
        paddingLeft: 10,
        height: 'auto',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    notificationLine: {
        flex: 1
    }
});