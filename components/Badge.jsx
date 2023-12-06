import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tinycolor from "tinycolor2";

export const Badge = ({ color, text }) => {
  const badgeColor = tinycolor(color).setAlpha(0.3).toRgbString(); // set opacity to 60%
  const textColor = tinycolor(color).darken(30).toString(); // darken color by 20%

  return (
    <View style={[styles.badge, { backgroundColor: badgeColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export const TagsBadges = ({ tags }) => {
  return (
    <View style={styles.badges}>
      {tags.map((tag) => {
        return (
          <Badge key={tag} color={tagColors[tag.toLowerCase()]} text={tag} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});

const tagColors = {
  study: "#4C9F70", // Green for focus and growth
  hangout: "#FFA07A", // Light Salmon for a relaxed, friendly vibe
  food: "#FF6347", // Tomato Red for appetite and energy
  "off-campus": "#6495ED", // Cornflower Blue for exploration and freedom
  campus: "#8A2BE2", // Blue Violet for academic spirit
  "bay-area": "#FF7F50", // Coral for the vibrant Bay Area culture
  dorm: "#FFD700", // Gold for the comfort and value of dorm life
  club: "#DA70D6", // Orchid for creativity and community
  organization: "#32CD32", // Lime Green for growth and collaboration
  event: "#BA55D3", // Medium Orchid for excitement and uniqueness
  party: "#DB7093", // Pale Violet Red for fun and energy
  travel: "#20B2AA", // Light Sea Green for adventure and relaxation
  adventure: "#008080", // Teal for boldness and excitement
  outdoors: "#3CB371", // Medium Sea Green for nature and freshness
  indoor: "#D2691E", // Chocolate for warmth and comfort
  restaurant: "#FF4500", // Orange Red for dining enthusiasm
  cafe: "#BDB76B", // Dark Khaki for casual, cozy gatherings
  bar: "#C71585", // Medium Violet Red for nightlife and excitement
  nightlife: "#800080", // Purple for mystery and vibrancy
  happy: "#FFD700", // Gold for happiness and positivity
  appreciation: "#FF69B4", // Hot Pink for warmth and gratitude
  passionate: "#FF4500", // Orange Red for intensity and energy
  fear: "#778899", // Light Slate Gray for the unknown and mystery
  sincere: "#BDB76B", // Dark Khaki for trustworthiness and earnestness
  fun: "#FF69B4", // Hot Pink for playful and spirited
  calm: "#ADD8E6", // Light Blue for tranquility and peace
};
