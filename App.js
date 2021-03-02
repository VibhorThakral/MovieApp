import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
} from 'react-native';


class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*Top View*/}
        <View style={styles.topBar}>   
          <Image source={require('./assets/back.png')}  style={styles.topBarImg}/>    
          <Text style={styles.topBarText}>Product Details</Text>
          <Image source={require('./assets/bookmark.png')}  style={styles.topBarImg}/>   
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {/* Mid View */}
          <View style={styles.midView}>
            <Image style={styles.imgView} source={require('./assets/poster.png')} />
            
            <Text style={[styles.headingText, styles.textcenter]}>How To Train Your Dragon The Hidden World</Text>
            <Text style={styles.textcenter}>Part III</Text>
            <View style={styles.buttonGrid}>
              <Text style={styles.btnSmall}>Adventure</Text>
              <Text style={styles.btnSmall}>Family</Text>
              <Text style={styles.btnSmall}>Fantasy</Text>
            </View>
          </View>

          {/* Border View */}
          <View style={styles.borderView}></View>

          {/* Bottom View */}
          <View>
            <View style={styles.movieInfo}>
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoSubText}>Year</Text>
                <Text style={styles.movieInfoMainText}>2019</Text>
              </View>
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoSubText}>Country</Text>
                <Text style={styles.movieInfoMainText}>USA</Text>
              </View>
              <View style={styles.movieInfoItem}>
                <Text style={styles.movieInfoSubText}>Length</Text>
                <Text style={styles.movieInfoMainText}>112 min</Text>
              </View>
            </View>

            <View style={styles.movieDetails}>
              <Text style={styles.movieDetailsHeading}>About Movie</Text>
              <Text style={styles.movieDetailsText}>
                When Hiccup discovers Toothless isn't the only Night Fury, he must seek "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.
              </Text>
              <Text style={styles.movieDetailsHeading}>Screenshots</Text>
              <View style={styles.screenshots}>
                <Image source={require('./assets/ss3.jpg')} style={styles.screenshot} />
                <Image source={require('./assets/ss4.jpg')} style={styles.screenshot} />
              </View>
              <View style={styles.btnView}>
                <Text style={styles.btnText}>BUY TICKET</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  topBarText: {
    textAlign: 'center',
    fontSize: 22
  },  
  topBarImg: { 
    height: 22,
    width: 22,
  },
  scrollViewContainer: {
    backgroundColor: '#F8F9FD'
  },
  textcenter: {
    textAlign: 'center'
  },
  midView: {
    width: '70%',
    alignSelf: 'center',
  },
  borderView:{
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  imgView: {
    height: 350,
    width: '100%',
    marginVertical: 30, 
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  headingText: {
    marginBottom: 10,
    fontSize: 21
  },
  buttonGrid: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80
  },
  btnSmall: {
    backgroundColor: '#2F68FB',
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    color: 'white',
    borderRadius: 15
  },
  movieInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  movieInfoItem: {
    marginHorizontal: 10,  
  },
  movieInfoSubText : {
    textAlign:'center',
    color: '#8a8a8a',
    fontSize: 14,
    marginBottom: 4
  },
  movieInfoMainText: {
    textAlign: 'center',
    fontSize: 16
  },
  movieDetails: {
    paddingHorizontal: 20
  },
  movieDetailsHeading: {
    fontSize: 16,
    marginVertical: 20
  },
  movieDetailsText: {
    color: '#8a8a8a'
  },
  screenshots: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  screenshot: {
    backgroundColor: 'brown',
    height: 140,
    width: '48%',
    borderRadius: 15
  },
  btnView: {
    backgroundColor: '#2F68FB',
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default App;