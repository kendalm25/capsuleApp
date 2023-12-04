import { createSlice } from "@reduxjs/toolkit";

function getRandomRegion() {
  return {
    latitude: Number((37.78825 + (Math.random() - 0.5) / 20).toFixed(4)),
    longitude: Number((-122.4324 + (Math.random() - 0.5) / 20).toFixed(4)),
  };
}

// In order to demonstrate that the randomly generated capsules can be together,
// a fixed random area coordinate is created in advance
const randomRegions = [...Array(4)].map(() => getRandomRegion());

const slice = createSlice({
  name: "capsule",
  initialState: {
    capsules: [],
    flair: [
      "Happy",
      "Appreciation",
      "Passionate",
      "Fear",
      "Sincere",
      "Fun",
      "Calm",
    ],
    cabinets: [],
  } as CapsuleState,
  reducers: {
    resetCapsuleStore: (state) => {
      Object.assign(state, {
        capsules: [],
        flair: [
          "Happy",
          "Appreciation",
          "Passionate",
          "Fear",
          "Sincere",
          "Fun",
          "Calm",
        ],
        cabinets: [],
      });
    },
    createCapsule: (
      state: CapsuleState,
      {
        payload,
      }: {
        payload: { capsule: Partial<Capsule> };
      }
    ) => {
      state.capsules = [
        ...(state.capsules || []),
        {
          id: String(Date.now()),
          title: new Date().toLocaleString(),
          content: "mock content",
          flairs: [state.flair[Math.floor(Math.random() * state.flair.length)]],
          cabinet: undefined,
          date: Date.now(),
          region:
            randomRegions[Math.floor(Math.random() * randomRegions.length)],
          available: false,
          ...payload.capsule,
        },
      ];
    },
    makeRandomAvailable: (state: CapsuleState) => {
      const index = Math.floor(Math.random() * state.capsules.length);

      const capsules = [...state.capsules];

      capsules.splice(index, 1, { ...capsules[index], available: true });

      state.capsules = capsules;
    },
    viewCapsule: (
      state: CapsuleState,
      {
        payload,
      }: {
        payload: string;
      }
    ) => {
      const index = state.capsules.findIndex((item) => item.id === payload);

      const capsules = [...state.capsules];

      capsules.splice(index, 1, { ...capsules[index], available: false });

      state.capsules = capsules;
    },
    deleteCapsule: (
      state: CapsuleState,
      {
        payload,
      }: {
        payload: string;
      }
    ) => {
      state.capsules = state.capsules.filter((item) => item.id !== payload);
    },
    createCabinet: (
      state: CapsuleState,
      {
        payload,
      }: {
        payload: string;
      }
    ) => {
      state.cabinets = [...(state.cabinets || []), payload];
    },
    storeToCabinet: (
      state: CapsuleState,
      {
        payload: { capsule, cabinet },
      }: {
        payload: {
          capsule: string;
          cabinet: string;
        };
      }
    ) => {
      state.capsules = state.capsules.map((item) =>
        item.id === capsule ? { ...item, cabinet } : item
      );
    },
  },
});

export const {
  storeToCabinet,
  createCapsule,
  makeRandomAvailable,
  createCabinet,
  viewCapsule,
  deleteCapsule,
  resetCapsuleStore,
} = slice.actions;

export default slice.reducer;

export interface Capsule {
  id: string;
  title: string;
  content: string | undefined;
  flairs: string[] | undefined;
  cabinet: string | undefined;
  date: number;
  region:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
  available: boolean;
}

export type CapsuleState = {
  capsules: Capsule[];
  flair: string[];
  cabinets: string[];
};
