import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const menuItems = [
  {
    id: "saverPacks",
    icon: <Ionicons name="wallet-outline" size={28} color="#555" />,
    label: "Saver Packs",
  },
  {
    id: "rideHistory",
    icon:  <Ionicons name="document-text-outline" size={28} color="#555" />,
    label: "Ride History",
  },
  {
    id: "earnWithYulu",
    icon: <Feather name="trending-up" size={28} color="#555" />,
    label: "Earn with Yulu",
    badge: "NEW",
  },
  {
    id: "offers",
    icon: <MaterialIcons name="local-offer" size={28} color="#555" />,
    label: "Offers",
  },

  {
    id: "referEarn",
    icon: <Ionicons name="gift-outline" size={28} color="#555" />,
    label: "Refer & Earn ₹200",
    badge: "NEW",
  },
  {
    id: "rideCharges",
    icon: <Ionicons name="card-outline" size={28} color="#555" />,
    label: "Ride Charges",
  },
  {
    id: "settings",
    icon: <Feather name="settings" size={28} color="#555" />,
    label: "Settings",
  },
  {
    id: "requestCentre",
    icon: <MaterialIcons name="add-location-alt" size={28} color="#555" />,
    label: "Request a Yulu Centre",
  },
];

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ----------- profile card--------------- */}
        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/images/profile/p1.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />

          <Text style={styles.phoneNumber}>7010503421</Text>

          <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
            <Image
              source={require("../../assets/images/profile/p2.png")}
              style={styles.editIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/*------------ menu List--------------- */}

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuRow}
              activeOpacity={0.6}
            >
              <View style={styles.menuIconWrap}>
                {/* <Image
                  source={item.icon}
                  style={styles.menuIcon}
                  resizeMode="contain"
                /> */}
                {item.icon}
              </View>

              <Text style={styles.menuLabel}>{item.label}</Text>

              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>




        {/* <View>
          <Feather name="settings" size={24} color="black" />
          <MaterialIcons name="add-location-alt" size={24} color="black" />
          <Ionicons name="gift-outline" size={24} color="black" />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container:{
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingBottom: 24,
  },



  profileCard: {
    flexDirection:'row',
    alignItems:"center",
    backgroundColor:"#e8f2f6",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 6,
    padding: 16,
    height:160,
    position: "relative",
  },
  profileImage:{
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#DDDDDD",

  },
  phoneNumber:{
    fontSize: 24,
    fontWeight: "450",
    color: "#111111",
    marginLeft: 16,

  },
  editButton:{
    position: "absolute",
    top: 16,
    right: 16,
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",

  },
  editIcon: {
    width: 32,
    height: 32,
    borderRadius:7,
  },

  //menu
  menuList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  menuIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F0F0F1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  menuLabel: {
    fontSize: 18,
    fontWeight: "400",
    color: "#111111",
    flexShrink: 1,
  },
  badge: {
    backgroundColor: "#d0574a",
    borderRadius:7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 20,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "500",
  },


})

