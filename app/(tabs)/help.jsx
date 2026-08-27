import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

//recommended help

const recommendedHelp = [
  { id: "trafficRules", label: "Do Traffic Rules apply to Yulu?" },
  {
    id: "yuluDex",
    label: "How to use Yulu Dex",
  },
  {
    id: "walletDepleted",
    label: "Can I continue riding if my wallet balance is depleted?",
  },
  {
    id: "endRideIssue",
    label: "Issues with ending the ride at a Yulu Zone",
  },
  {
    id: "ridingInstructions",
    label: "Instructions for riding",
  },
];
//help support

function ListHeader() {
  return (
    <View>
      {/*  header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <TouchableOpacity>
          <Text style={styles.viewTicketsLink}>View tickets</Text>
        </TouchableOpacity>
      </View>

      {/* Search Query */}

      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#777"
          style={styles.searchOutline}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your Query Here"
          placeholderTextColor="#9B9B9B"
        />
      </View>

      {/* Help with Yulu */}

      <TouchableOpacity style={styles.yuluhelpcard} activeOpacity={0.7}>
        <View style={styles.yuluTextWrap}>
          <Text style={styles.yuluTextTitle}>Need help with Yulu?</Text>
          <Text style={styles.yuluTextSubTitle}>
            Go To The Nearest Yulu Center
          </Text>
        </View>

        {/* <Text style={styles.chevron}> */}
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#504f4f"
          style={styles.helpChevron}
        />
        {/* </Text> */}
      </TouchableOpacity>

      {/* chat with us */}

      <TouchableOpacity style={styles.chatRow} activeOpacity={0.7}>
        <View style={styles.chatIconText}>
          <Ionicons
            name="chatbubbles-outline"
            size={25}
            color="#555555"
            style={styles.chatIcon}
          />
          <Text style={styles.chatText}>Chat with us</Text>
          {/* <Text style={styles.chevron}> */}
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#504f4f"
            style={styles.chatChevron}
          />
          {/* </Text> */}
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recommended help</Text>
    </View>
  );
}

/* recommended help below */

function ListFooter() {
  return (
    <View>
        <View style={styles.helpSeparator} />
    
    <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.allCategories}>All categories</Text>
    </TouchableOpacity>
    </View>

  );
}

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <FlatList
        data={recommendedHelp}
        keyExtractor={(item) => item.id}
        style={styles.container}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.helpSeparator} />}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.helpRow} activeOpacity={0.7}>
            <Text style={styles.helpLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#504f4f" style={styles.chevron} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

//styling

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    paddingBottom: 24,
  },

  //header
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 500,
    color: "#111111",
  },
  viewTicketsLink: {
    fontSize: 15,
    fontWeight: 400,
    color: "#2F7BF5",
  },

  //search bar
  searchBar: {
    flexDirection: "row",
    // justifyContent:'flex-start',
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    paddingHorizontal: 13,
    marginHorizontal: 17,
    height: 40,
  },
  searchOutline: {
    width: 18,
    height: 20,
    marginRight: 5,
    tintColor: "#9B9B9B",
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111111",
    padding: 0,
    marginHorizontal: 5,
  },

  //yuluhelpcard
  yuluhelpcard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff3d3",
    borderWidth: 1,
    borderColor: "#ffdc5f",
    marginHorizontal: 17,
    marginTop: 16,
    padding: 18,
    borderRadius: 8,
  },
  yuluTextWrap: {
    flexShrink: 1,
  },
  yuluTextTitle: {
    fontSize: 17,
    fontWeight: "400",
    color: "#111111",
  },
  yuluTextSubTitle: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 4,
  },
//   helpChevron:{

//   },
  chatRow: {
    // flexDirection:"row",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginHorizontal: 17,
    marginTop: 12,
    padding: 9,
  },

  chatIconText: {
    flexDirection: "row",
    alignItems: "center",
  },
    chatIcon:{
      width: 25,
      height: 25,
      marginLeft:9,
    },
  chatText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "450",
    color: "#111111",
    marginLeft: 10,
  },
  chatChevron: {
    marginLeft: 0,
    marginRight: 10,
  },

  chevron: {
    fontSize: 20,
    color: "#504f4f",
    marginLeft: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111111",
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 10,
  },
  helpRow:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    marginHorizontal: 20,
  },
  helpSeparator:{
    height: 1,
    backgroundColor: "#EDEDED",
    marginHorizontal: 20,
  },
  helpLabel:{
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#111111",
    paddingRight: 12,
  },
  allCategories:{
    fontSize: 18,
    fontWeight: "500",
    color: "#111111",
    marginHorizontal: 20,
    marginTop: 20,
  },



});
