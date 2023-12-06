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
    question: "What is your favorite place to eat on campus?",
    category: "food",
    answer: "I love eating at the Axe and Palm!",
    dateTime: "2023-11-28T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.43358803600001,
      long: -122.18041604630488,
    },
    tags: ["food", "campus"],
  },
  {
    id: "2",
    question: "What is your favorite place to study on campus?",
    category: "study",
    answer: "I love studying at the Green Library!",
    dateTime: "2023-11-29T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.41980917493959,
      long: -122.15115173659909,
    },
    tags: ["study", "campus"],
  },
  {
    id: "3",
    question: "What is your favorite place to hang out on campus?",
    category: "hangout",
    answer: "I love hanging out at the Oval!",
    dateTime: "2023-11-30T12:00",
    location: { name: "Stanford Campus", lat: 37.419122, long: -122.176023 },
    tags: ["hangout", "campus"],
  },
  {
    id: "4",
    question: "What is your favorite place to eat off campus?",
    category: "food",
    answer: "I love eating at the Axe and Palm!",
    dateTime: "2023-12-01T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.43358803600001,
      long: -122.15115173659909,
    },
    tags: ["food", "off-campus"],
  },
  {
    id: "5",
    question: "What is your favorite place to study off campus?",
    category: "study",
    answer: "I love studying at the Green Library!",
    dateTime: "2023-12-02T12:00",
    location: {
      name: "Stanford Campus",
      lat: 37.41980917493959,
      long: -122.18041604630488,
    },
    tags: ["study", "off-campus"],
  },
];

const fakeCabinets = [
  {
    id: "1",
    name: "Campus Tips",
    tags: ["food", "study", "hangout"],
    createdAt: "2021-06-01",
    capsule_ids: ["5", "2"],
  },
];

export const useCapsuleStore = create((set, get) => ({
  // State
  capsulePrompts: [...fakeCapsulePrompts],
  capsules: [...fakeCapsules],
  cabinets: [...fakeCabinets],

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
    console.log("getState", get());
    const cabinet = get().cabinets.find((c) => c.id === cabinet_id);
    console.log("cabinet_id", cabinet_id, "getCabinet", cabinet);
    if (cabinet) {
      return cabinet;
    } else {
      return null;
    }
  },
}));

export const TAGS = [
  "food",
  "study",
  "hangout",
  "bay-area",
  "campus",
  "dorm",
  "club",
  "organization",
  "event",
  "party",
  "travel",
  "adventure",
  "outdoors",
  "indoor",
  "restaurant",
  "cafe",
  "bar",
  "nightlife",
];
