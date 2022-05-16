import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar
  } from 'react-native';
  import SearchBar from './components/SearchBar'
  import { Avatar } from 'react-native-paper';

  const Category = ({ navigation }) => {
      return(
          <View style={styles.container}>
            <StatusBar backgroundColor="skyblue" translucent={true}/>
            <SearchBar/>
              <Text style={styles.txt}> Search by Specialty</Text>

              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    } >
                    <Avatar.Image
                        source={require('./asset/gyno.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Gynocalogist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/neuro.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Neurologist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/surgeon.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Genral Physician
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/heart.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Heart Surgeon
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/skin.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Skin Specialist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/dentist.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Dentist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/urology.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Urologist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/eye2.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Eye Specialist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/psychiat.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Psychiatrist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Doctor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/diabetes2.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Diabetes
                        </Text>
                    </TouchableOpacity>
              </View>
           </View>
      );
  }

  export default Category;

  const styles = StyleSheet.create({
    container:{
        flex: 1
    },
      txt:{
          fontWeight: '900',
          fontSize: 18,
          margin: 10
      },
      cardtext:{
          fontSize: 16,
          margin: 9,
          width: "80%",
          color: "black"
      },
      card: {
        flexDirection: 'row',
        margin: 10,
        width: "45%"

      },
      cardImg: {
          backgroundColor: "transparent"
      },
      main: {
          flexDirection: 'row'

      },

});