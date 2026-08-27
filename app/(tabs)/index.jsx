import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function index() {
  const scooterX = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(scooterX, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* top section */}
        {/* 
<View style={styles.hero}> */}

        {/* Large gradient background */}
        {/* <LinearGradient
  colors={[
    "#FFF4C2", // pale gold
    "#E8D5FF", // pale purple
    "#D6E7FF", // pale blue
  ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.heroGradient}
/> */}
        {/* </View> */}

        {/* Scooter animation */}

        <View style={styles.scooterContainer}>
          <Animated.Image
            source={require("../../assets/images/home/Scooter.gif")}
            style={[
              styles.scooter,
              {
                transform: [
                  {
                    translateX: scooterX,
                  },
                ],
              },
            ]}
            resizeMode="contain"
          />
        </View>

        {/* services section */}

        <View style={styles.servicesSection}>
          <Text style={styles.serviceTitle}>Our Services</Text>

          {/* services grid */}

          <View style={styles.servicesGrid}>
            <View style={styles.rentalsCard}>
              <Image
                source={require("../../assets/images/home/h1.png")}
                style={styles.rentalsImage}
                resizeMode="contain"
              />

              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Rentals</Text>
                <Text style={styles.cardSubtitle}>For delivery</Text>
              </View>
            </View>

            {/* right column */}

            <View style={styles.rightColumn}>
              {/* Quick ride */}
              <View style={styles.smallCard}>
                <Image
                  source={require("../../assets/images/home/h2.png")}
                  style={styles.smallImage}
                  resizeMode="contain"
                />

                <Text style={styles.smallCardTitle}>Quick ride</Text>
              </View>

              {/* Flexi rides */}

              <View style={styles.smallCard}>
                <Image
                  source={require("../../assets/images/home/h3.png")}
                  style={styles.smallImage}
                  resizeMode="contain"
                />

                <Text style={styles.smallCardTitle}>Flexi rides</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  contentContainer: {
    paddingBottom: 20,
  },

  //scooty section

  scooterContainer: {
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    // marginTop:100,
  },

  scooter: {
    width: width * 0.8,
    height: height * 0.25,
  },

  // top section

  // hero: {
  //   height: 430,
  //   width: "100%",
  //   position: "relative",
  //   overflow: "hidden",
  // },

  // heroGradient: {
  //   position: "absolute",
  //   top: -80,
  //   left: -80,
  //   right: -80,
  //   height: 500,

  //   borderRadius: 150,

  //   overflow: "hidden",
  // },

  //services

  servicesSection: {
    paddingHorizontal: 20,
    marginTop: 50, //460,
    
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 16,
  },

  // gradientHeader: {
  //   borderRadius: 14,
  //   paddingVertical: 14,
  //   paddingHorizontal: 16,
  //   marginBottom: 16,
  // },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    // marginBottom: 28,
  },

  //grid

  servicesGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop:10,
  },

  //rentals

  rentalsCard: {
    width: (width - 120) / 2,
    // height: 360,
    // backgroundColor: "#F7F7F7",
    // borderRadius: 20,
    // overflow: "hidden",
    flex: 1,
    height: 220,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 10,
    justifyContent: "space-between",
    marginRight:10,
  },

  rentalsImage: {
    width: "50%",
    height: 100,
    // marginTop: 15,
    // alignSelf: "flex-start",
    marginRight:100,
  },

  cardTextContainer: {
    paddingHorizontal: 10,
    paddingVertical:10,
    marginTop: 30,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "300",
    color: "#111111",
  },

  cardSubtitle: {
    // fontSize: 20,
    // color: "#777777",
    // marginTop: 12,
    fontSize: 14,
    color: "#8A8A8E",
    marginTop: 2,
  },

  // -------------------------
  // Right cards
  // -------------------------

  rightColumn: {
    flex: 1,
    // gap: 24,
    justifyContent: "space-between",
  },

  smallCard: {
    // height: 168,
    // backgroundColor: "#F7F7F7",
    // borderRadius: 20,
    // paddingHorizontal: 40,
    // justifyContent: "center",
    height: 100,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
  },

  smallImage: {
    width: 45,
    height: 45,
    // marginBottom: 8,
    alignSelf: "flex-start",
  },

  smallCardTitle: {
    fontSize: 15,
    color: "#111111",
    fontWeight: "300",
  },
});
