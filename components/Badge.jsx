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
  local: "#32CD32", // (Lime Green) to represent growth and collaboration within the community.
  shopping: "#DB7093", //(Pale Violet Red) symbolizing the fun and energy associated with discovering and acquiring new items
  random: "#778899", //(Light Slate Gray) to signify the unknown and a sense of mystery that comes with randomness
  pastries: "#FFDAB9",
  bakery: "#F5DEB3", // Wheat for warm and inviting bakeries
  artisanal: "#DEB887", // Burlywood for craftsmanship and quality
  jogging: "#48D1CC", // Medium Turquoise for activity and freshness
  lake: "#1E90FF", // Dodger Blue for serenity and water
  picnic: "#FFD700", // Gold for outdoor meals and sunshine
  "hidden gem": "#FF69B4", // Hot Pink for excitement and discovery
  "street food": "#FFA500", // Orange for vibrant and diverse food scenes
  trucks: "#FF4500", // Orange Red for mobility and convenience
  coffee: "#6B8E23", // Olive Drab for robustness and energy
  date: "#FF69B4", // Hot Pink for romance and enjoyment
  casual: "#F4A460", // Sandy Brown for relaxed and informal settings
  gifts: "#BC8F8F", // Rosy Brown for thoughtfulness and care
  souvenirs: "#DAA520", // Goldenrod for memorabilia and keepsakes
  bookstore: "#8B4513", // Saddle Brown for knowledge and exploration
  bike: "#228B22", // Forest Green for eco-friendliness and adventure
  weekend: "#20B2AA", // Light Sea Green for leisure and enjoyment
  scenic: "#66CDAA", // Medium Aquamarine for beauty and tranquility
  stargazing: "#191970", // Midnight Blue for the night sky and wonder
  observatory: "#483D8B", // Dark Slate Blue for discovery and learning
  "farmers market": "#9ACD32", // Yellow Green for freshness and local produce
  fresh: "#00FF7F", // Spring Green for freshness and vitality
  friends: "#FFD700", // Gold for warmth and companionship
  vintage: "#8B008B", // Dark Magenta for nostalgia and uniqueness
  clothing: "#FFC0CB", // Pink for fashion and style
  reading: "#556B2F", // Dark Olive Green for knowledge and reflection
  unwind: "#4682B4", // Steel Blue for relaxation and calm
  movie: "#A52A2A", // Brown for entertainment and escapism
  theater: "#8B0000", // Dark Red for drama and performance
  "night out": "#800000", // Maroon for excitement and nightlife
  jazz: "#FF6347", // Tomato for soulfulness and rhythm
  live: "#FF4500", // Orange Red for energy and immediacy
  tech: "#4682B4", // Steel Blue for innovation and technology
  meetup: "#32CD32", // Lime Green for community and interaction
  community: "#4169E1", // Royal Blue for unity and belonging
  sunrise: "#FFA07A", // Light Salmon for beginnings and beauty
  view: "#87CEEB", // Sky Blue for vistas and clarity
  "late night": "#696969", // Dim Gray for nocturnal activities
  snack: "#FFD700", // Gold for quick bites and treats
  "craft beer": "#CD853F", // Peru for variety and craftsmanship
};
