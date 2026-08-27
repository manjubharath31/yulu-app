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
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { TabView, TabBar } from "react-native-tab-view";
import Svg, { Defs, Pattern, Rect, Line } from "react-native-svg";

// ----------------------------------------------------
// SAVER PACK TAB
// ----------------------------------------------------

function SaverPackRoute() {
  return (
    <View style={styles.emptyState}>
      <Image
        source={require("../../assets/images/money/m2.png")}
        style={styles.emptyImage}
        resizeMode="contain"
      />

      <Text style={styles.emptyStateText}>You don't have any saver pack</Text>
    </View>
  );
}

// ----------------------------------------------------
// ECASH TAB
// ----------------------------------------------------

function ECashRoute() {
  return (
    <View style={styles.emptyState}>
      <Image
        source={require("../../assets/images/money/m2.png")}
        style={styles.emptyImage}
        resizeMode="contain"
      />

      <Text style={styles.emptyStateText}>You don't have any eCash</Text>
    </View>
  );
}

// ----------------------------------------------------
// MONEY SCREEN
// ----------------------------------------------------

export default function Money() {
  // 0 = Saver Pack
  // 1 = eCash
  const [index, setIndex] = useState(0);

  // Tabs
  const [routes] = useState([
    {
      key: "saverPack",
      title: "Saver Pack",
    },
    {
      key: "eCash",
      title: "eCash",
    },
  ]);

  // Which component should be shown
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "saverPack":
        return <SaverPackRoute />;

      case "eCash":
        return <ECashRoute />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------------- HEADER ---------------- */}

        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Yulu Money</Text>

          <TouchableOpacity>
            <Text style={styles.allTransactionLink}>All Transaction</Text>
          </TouchableOpacity>
        </View>

        {/* ---------------- BALANCE CARD ---------------- */}

        <LinearGradient
          colors={["#eff2f6", "#bcdafb"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.balanceCard}
        >
          {/* Diagonal lines */}
          {/* <View style={styles.stripes}>
            {Array.from({ length: 40 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.stripe,
                  {
                    left: index * 22,
                  },
                ]}
              />
            ))}
          </View> */}
          {/* <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
            <Defs>
              <Pattern
                id="diagonalStripes"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <Line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="22"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="2"
                />
              </Pattern>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#diagonalStripes)" />
          </Svg> */}

          <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
            {Array.from({ length: 70 }).map((_, i) => {
              const spacing = 22;
              const x = i * spacing - 150; // start further left so top-right corner is covered
              return (
                <Line
                  key={i}
                  x1={x}
                  y1={-100}
                  x2={x + 350}
                  y2={350}
                  stroke="rgba(255, 255, 255, 0.27)"
                  strokeWidth={1.5}
                />
              );
            })}
          </Svg>

          <Text style={styles.balanceAvailable}>Available balance</Text>

          <Text style={styles.balanceAmount}>₹0.00</Text>

          <Text style={styles.balanceBreakdown}>
            ₹0.00 Yulu Money + ₹0.00 eCash
          </Text>

          <TouchableOpacity style={styles.addMoneyButton} activeOpacity={0.85}>
            <Text style={styles.addMoneyButtonText}>+ Add Yulu Money</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* ---------------- REFUNDABLE DEPOSIT ---------------- */}

        <View style={styles.depositBanner}>
          <View style={styles.depositIconWrap}>
            <Image
              source={require("../../assets/images/money/m1.png")}
              style={styles.depositIcon}
              resizeMode="contain"
            />
          </View>

          <View style={styles.depositText}>
            <Text style={styles.depositTitle}>Refundable deposit</Text>

            <Text style={styles.depositSubtitle}>
              Required to use Yulu services
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.depositPayLink}>Pay ₹199</Text>
          </TouchableOpacity>
        </View>

        {/* ---------------- REACT NATIVE PAPER TABS ---------------- */}

        <View style={styles.tabContainer}>
          <TabView
            navigationState={{
              index,
              routes,
            }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={styles.tabBar}
                indicatorStyle={styles.tabIndicator}
                activeColor="#111111"
                inactiveColor="#9B9B9B"
                pressColor="transparent"
                tabStyle={styles.tabStyle}
                labelStyle={styles.tabLabel}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ----------------------------------------------------
// STYLES
// ----------------------------------------------------

const styles = StyleSheet.create({
  // ---------------- SAFE AREA ----------------

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  contentContainer: {
    paddingBottom: 24,
  },

  // ---------------- HEADER ----------------

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },

  headerTitle: {
    fontSize: 23,
    fontWeight: "500",
    color: "#111111",
  },

  allTransactionLink: {
    fontSize: 14,
    fontWeight: "400",
    color: "#2F7BF5",
  },

  // ---------------- BALANCE CARD ----------------

  balanceCard: {
    marginHorizontal: 16,

    borderRadius: 16,

    paddingVertical: 24,
    paddingHorizontal: 20,

    alignItems: "center",

    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: "#bbd7fc",
    position: "relative",
    overflow: "hidden",
  },

  // stripes: {
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   overflow: "hidden",
  // },

  // stripe: {
  //   position: "absolute",
  //   width: 2,
  //   height: 500,
  //   backgroundColor: "rgba(255, 255, 255, 0.45)",
  //   transform: [
  //     { rotate: "45deg" },
  //   ],
  // },

  balanceAvailable: {
    fontSize: 14,
    color: "#5B6472",
    marginBottom: 8,
  },

  balanceAmount: {
    fontSize: 34,
    fontWeight: "500",
    color: "#111111",
  },

  balanceBreakdown: {
    fontSize: 13,
    color: "#5B6472",
    marginTop: 6,
  },

  addMoneyButton: {
    marginTop: 18,

    backgroundColor: "#2F7BF5",

    borderRadius: 30,

    paddingVertical: 14,
    paddingHorizontal: 28,
  },

  addMoneyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // ---------------- DEPOSIT BANNER ----------------

  depositBanner: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FBE4E2",

    marginHorizontal: 16,
    marginTop: 10,

    borderRadius: 10,

    padding: 16,
  },

  depositIconWrap: {
    width: 32,
    height: 32,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  depositIcon: {
    width: 32,
    height: 32,
  },

  depositText: {
    flex: 1,
  },

  depositTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  depositSubtitle: {
    fontSize: 13,
    color: "#5B6472",
    marginTop: 2,
  },

  depositPayLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2F7BF5",
  },

  // ---------------- TAB VIEW ----------------

  tabContainer: {
    height: 330,
    marginTop: 20,
  },

  tabBar: {
    backgroundColor: "#FFFFFF",

    elevation: 0,
    shadowOpacity: 0,

    shadowColor: "transparent",
  },

  tabIndicator: {
    backgroundColor: "#0F5C4B",
    height: 2,
    marginTop: 8,
    width: "60%",
    backgroundColor: "#0F5C4B",
    borderRadius: 2,
    marginLeft: 35,
  },

  tabStyle: {
    height: 50,
  },

  tabLabel: {
    fontSize: 15,
    fontWeight: "500",
    textTransform: "none",
  },

  // ---------------- EMPTY STATE ----------------

  emptyState: {
    alignItems: "center",

    marginTop: 40,

    paddingHorizontal: 20,
  },

  emptyImage: {
    width: 320,
    height: 200,
  },

  emptyStateText: {
    fontSize: 16,
    color: "#5B6472",

    marginTop: 16,
  },
});
