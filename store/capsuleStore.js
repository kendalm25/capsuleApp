import { create } from "zustand";

const fakeCapsulePrompts = [
  {
    question: "Where do you go to take a break from studying?",
    category: "food",
    status: "expired",
    releaseDate: new Date("2023-11-30"),
    answer: "",
  },
  {
    question: "What is your favorite place to eat on campus?",
    category: "food",
    status: "answered",
    releaseDate: new Date("2023-12-01"),
    answer: "I love eating at the Axe and Palm!",
  },
  {
    question: "What is your favorite place to study on campus?",
    category: "study",
    status: "answered",
    releaseDate: new Date("2023-12-02"),
    answer: "I love studying at the Green Library!",
  },
  {
    question: "What is your favorite place to hang out on campus?",
    category: "hangout",
    status: "answered",
    releaseDate: new Date("2023-12-03"),
    answer: "I love hanging out at the Oval!",
  },
  {
    question: "What is your favorite place to eat off campus?",
    category: "food",
    status: "locked",
    releaseDate: new Date("2023-12-04"),
    answer: "",
  },
  {
    question: "What is your favorite place to study off campus?",
    category: "study",
    status: "locked",
    releaseDate: new Date("2023-12-05"),
    answer: "",
  },
  {
    question: "What is your favorite place to hang out off campus?",
    category: "hangout",
    status: "locked",
    releaseDate: new Date("2023-12-06"),
    answer: "",
  },
  {
    question: "What is your favorite place to eat in the Bay Area?",
    category: "food",
    status: "locked",
    releaseDate: new Date("2023-12-07"),
    answer: "",
  },
];

const fakeCapsules = [
  {
    id: "1",
    question: "Where do you go for the best artisanal pastries?",
    category: "food",
    answer:
      "Tartine Bakery is my go-to! Their croissants are out of this world.",
    dateTime: "2023-12-03T09:00",
    location: {
      name: "Tartine Bakery",
      lat: 37.7615,
      long: -122.4241,
    },
    tags: ["pastries", "bakery", "artisanal"],
  },
  {
    id: "2",
    question: "Can you recommend a great jogging route?",
    category: "fitness",
    answer: "Running around Lake Lagunita is amazing, especially at dawn!",
    dateTime: "2023-12-04T06:30",
    location: {
      name: "Lake Lagunita",
      lat: 37.423,
      long: -122.165,
    },
    tags: ["jogging", "outdoors", "lake"],
  },
  {
    id: "3",
    question: "What's a hidden gem for a weekend picnic?",
    category: "leisure",
    answer: "I love the serenity of the Windy Hill Open Space Preserve.",
    dateTime: "2023-12-05T12:00",
    location: {
      name: "Windy Hill Preserve",
      lat: 37.3773,
      long: -122.236,
    },
    tags: ["picnic", "nature", "hidden gem"],
  },
  {
    id: "4",
    question: "Any local spots for amazing street food?",
    category: "food",
    answer:
      "Check out the food trucks near the Palo Alto Caltrain on weekends!",
    dateTime: "2023-12-06T18:00",
    location: {
      name: "Palo Alto Caltrain Station",
      lat: 37.4439,
      long: -122.1651,
    },
    tags: ["street food", "local", "trucks"],
  },
  {
    id: "5",
    question: "Best place for a coffee date?",
    category: "social",
    answer: "Philz Coffee in Palo Alto has a great vibe for a casual date.",
    dateTime: "2023-12-07T16:00",
    location: {
      name: "Philz Coffee, Palo Alto",
      lat: 37.4497,
      long: -122.1601,
    },
    tags: ["coffee", "date", "casual"],
  },
  {
    id: "6",
    question: "Where do you find unique gifts and souvenirs?",
    category: "shopping",
    answer:
      "The Stanford Bookstore has some really unique Stanford memorabilia!",
    dateTime: "2023-12-08T15:00",
    location: {
      name: "Stanford Bookstore",
      lat: 37.4249,
      long: -122.1697,
    },
    tags: ["gifts", "souvenirs", "bookstore"],
  },
  {
    id: "7",
    question: "Your favorite spot for a weekend bike ride?",
    category: "outdoors",
    answer:
      "Portola Valley's scenic roads are perfect for a peaceful bike ride.",
    dateTime: "2023-12-09T08:00",
    location: {
      name: "Portola Valley",
      lat: 37.3845,
      long: -122.2353,
    },
    tags: ["bike", "weekend", "scenic"],
  },
  {
    id: "8",
    question: "Where's a good place for stargazing?",
    category: "outdoors",
    answer: "The Stanford Observatory on a clear night is absolutely magical.",
    dateTime: "2023-12-10T22:00",
    location: {
      name: "Stanford Observatory",
      lat: 37.4073,
      long: -122.169,
    },
    tags: ["stargazing", "night", "observatory"],
  },
  {
    id: "9",
    question: "What's the best local farmers' market?",
    category: "food",
    answer: "California Avenue Farmers' Market on Sundays is my weekly ritual!",
    dateTime: "2023-12-11T09:00",
    location: {
      name: "California Avenue Farmers' Market",
      lat: 37.4289,
      long: -122.145,
    },
    tags: ["farmers market", "local", "fresh"],
  },
  {
    id: "10",
    question: "Any recommendations for a casual dinner with friends?",
    category: "dining",
    answer: "Oren's Hummus Shop on University Ave is great for groups.",
    dateTime: "2023-12-12T19:00",
    location: {
      name: "Oren's Hummus Shop",
      lat: 37.4449,
      long: -122.1619,
    },
    tags: ["dinner", "friends", "casual"],
  },
  {
    id: "11",
    question: "Where to find the best vintage clothing?",
    category: "shopping",
    answer: "Crossroads Trading on University Ave has some amazing finds!",
    dateTime: "2023-12-13T14:00",
    location: {
      name: "Crossroads Trading",
      lat: 37.4458,
      long: -122.1616,
    },
    tags: ["vintage", "clothing", "shopping"],
  },
  {
    id: "12",
    question: "Favorite place to unwind with a book?",
    category: "relaxation",
    answer: "The Stanford Arboretum is quiet and perfect for reading.",
    dateTime: "2023-12-14T13:00",
    location: {
      name: "Stanford Arboretum",
      lat: 37.4313,
      long: -122.1697,
    },
    tags: ["reading", "unwind", "nature"],
  },
  {
    id: "13",
    question: "Best local theater for a movie night?",
    category: "entertainment",
    answer: "The Stanford Theatre plays classic movies in a vintage setting!",
    dateTime: "2023-12-15T20:00",
    location: {
      name: "Stanford Theatre",
      lat: 37.4452,
      long: -122.1612,
    },
    tags: ["movie", "theater", "night out"],
  },
  {
    id: "14",
    question: "Where to enjoy live jazz music?",
    category: "music",
    answer: "The Stanford Jazz Festival hosts some fantastic live sessions.",
    dateTime: "2023-12-16T20:30",
    location: {
      name: "Stanford Jazz Festival",
      lat: 37.4243,
      long: -122.1651,
    },
    tags: ["jazz", "music", "live"],
  },
  {
    id: "15",
    question: "Any cool tech meetups in the area?",
    category: "tech",
    answer: "Hacker Dojo in Mountain View has some really engaging tech talks.",
    dateTime: "2023-12-17T18:00",
    location: {
      name: "Hacker Dojo",
      lat: 37.4143,
      long: -122.0774,
    },
    tags: ["tech", "meetup", "community"],
  },
  {
    id: "16",
    question: "Where's the best spot for a sunrise view?",
    category: "nature",
    answer:
      "The top of the Stanford Dish trail offers a breathtaking sunrise view.",
    dateTime: "2023-12-18T06:00",
    location: {
      name: "Stanford Dish Trail",
      lat: 37.4144,
      long: -122.1651,
    },
    tags: ["sunrise", "view", "nature"],
  },
  {
    id: "17",
    question: "Best place for a late-night snack?",
    category: "food",
    answer:
      "Late Nite at Lagunita's dining hall is perfect for midnight cravings!",
    dateTime: "2023-12-19T23:00",
    location: {
      name: "Lagunita's Dining Hall",
      lat: 37.4225,
      long: -122.1653,
    },
    tags: ["late night", "snack", "food"],
  },
  {
    id: "18",
    question: "Favorite local spot for craft beer?",
    category: "drinks",
    answer: "The Tap Room at Whole Foods has a great selection of craft beers.",
    dateTime: "2023-12-20T17:00",
    location: {
      name: "Whole Foods Tap Room",
      lat: 37.4483,
      long: -122.1597,
    },
    tags: ["craft beer", "local", "drinks"],
  },
];

const fakeCabinets = [
  {
    id: "1",
    name: "Campus Tips",
    tags: ["food", "study", "hangout"],
    createdAt: "2021-06-01",
    capsule_ids: ["5", "2"],
    createdAt: new Date("2023-11-28"),
    editedAt: new Date("2023-11-28"),
  },
];

const sentCapsules = [
  {
    id: "1",
    question: "What's a local business you'd recommend?",
    category: "shopping",
    answer:
      "There is a really cute boutique in Downtown Palo Alto that is really affordable and chic! It's called Leaf & Petal",
    dateTime: "2023-11-28T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.43358803600001,
      long: -122.18041604630488,
    },
    tags: ["shopping", "off-campus", "local"],
  },
  {
    id: "2",
    question: "What's your favorite movie quote and why?",
    category: "random",
    answer:
      "I love the godfather, so 'I'm gonna make him an offer he can't refuse.' is a classic.",
    dateTime: "2023-11-29T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.41980917493959,
      long: -122.15115173659909,
    },
    tags: ["random", "fun"],
  },
];

const justViewedCapsules = [
  {
    id: "1",
    question: "What's one sport you've always wanted to try?",
    category: "random",
    answer:
      "I really wanted to try ballet dancing when I was younger but it was too expensive.",
    dateTime: "2023-11-29T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.41980917493959,
      long: -122.15115173659909,
    },
    tags: ["fun"],
  },
];

function getUniqueTagsAndCategories(capsules) {
  const tagsSet = new Set();
  const categoriesSet = new Set();

  capsules.forEach((capsule) => {
    // Add category to categories set
    categoriesSet.add(capsule.category);

    // Add each tag to tags set
    capsule.tags.forEach((tag) => tagsSet.add(tag));
  });

  // Convert sets to arrays
  const uniqueTags = Array.from(tagsSet);
  const uniqueCategories = Array.from(categoriesSet);

  return {
    uniqueTags,
    uniqueCategories,
  };
}

getUniqueTagsAndCategories(fakeCapsules);

export const useCapsuleStore = create((set, get) => ({
  // State
  capsulePrompts: [...fakeCapsulePrompts],
  capsules: [...fakeCapsules],
  cabinets: [...fakeCabinets],
  sentCapsules: [...sentCapsules],
  justViewedCapsules: [...justViewedCapsules],

  // Actions
  addCapsuleToCabinet: (cabinetId, capsule) =>
    set((state) => {
      const cabinet = state.cabinets.find((c) => c.id === cabinetId);
      if (cabinet) {
        cabinet.capsule_ids.push(capsule.id);
      }
      return { cabinets: [...state.cabinets] };
    }),

  removeCapsuleFromCabinet: (cabinetId, capsuleId) =>
    set((state) => {
      const cabinet = state.cabinets.find((c) => c.id === cabinetId);
      if (cabinet) {
        cabinet.capsule_ids = cabinet.capsule_ids.filter(
          (id) => id !== capsuleId
        );
      }
      return { cabinets: [...state.cabinets] };
    }),

  createCabinet: (cabinet) =>
    set((state) => ({ cabinets: [...state.cabinets, cabinet] })),

  editCabinet: (cabinetId, newCabinet) =>
    set((state) => {
      const cabinets = state.cabinets.map((cabinet) =>
        cabinet.id === cabinetId ? newCabinet : cabinet
      );
      return { cabinets };
    }),

  editCabinetName: (cabinetId, newName) =>
    set((state) => {
      const cabinets = state.cabinets.map((cabinet) =>
        cabinet.id === cabinetId ? { ...cabinet, name: newName } : cabinet
      );
      return { cabinets };
    }),

  editCabinetTags: (cabinetId, newTags) =>
    set((state) => {
      const cabinets = state.cabinets.map((cabinet) =>
        cabinet.id === cabinetId ? { ...cabinet, tags: newTags } : cabinet
      );
      return { cabinets };
    }),

  getCabinet: (cabinet_id) => {
    const cabinet = get().cabinets.find((c) => c.id === cabinet_id);
    if (cabinet) {
      return cabinet;
    } else {
      return null;
    }
  },
}));

export const TAGS = [
  "adventure",
  "appreciation",
  "artisanal",
  "bakery",
  "bar",
  "bay-area",
  "bike",
  "bookstore",
  "cafe",
  "calm",
  "campus",
  "casual",
  "clothing",
  "club",
  "coffee",
  "community",
  "craft beer",
  "date",
  "dining",
  "dinner",
  "dorm",
  "drinks",
  "entertainment",
  "event",
  "farmers market",
  "fear",
  "fitness",
  "food",
  "fresh",
  "friends",
  "fun",
  "gifts",
  "hangout",
  "happy",
  "hidden gem",
  "indoor",
  "jazz",
  "jogging",
  "lake",
  "late night",
  "leisure",
  "live",
  "local",
  "meetup",
  "movie",
  "music",
  "nature",
  "night",
  "night out",
  "nightlife",
  "observatory",
  "off-campus",
  "organization",
  "outdoors",
  "party",
  "passionate",
  "pastries",
  "picnic",
  "random",
  "reading",
  "relaxation",
  "restaurant",
  "scenic",
  "shopping",
  "sincere",
  "snack",
  "social",
  "souvenirs",
  "stargazing",
  "street food",
  "study",
  "sunrise",
  "tech",
  "theater",
  "travel",
  "trucks",
  "unwind",
  "view",
  "vintage",
  "weekend",
];

export const SUBSET_TAGS = [
  "food",
  "coffee",
  "outdoors",
  "shopping",
  "fitness",
  "nature",
  "dining",
  "entertainment",
  "tech",
  "leisure",
  "social",
];
