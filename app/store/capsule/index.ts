import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'capsule',
  initialState: {
    capsules: [],
    flair: [
      'Happy',
      'Appreciation',
      'Passionate',
      'Fear',
      'Sincere',
      'Fun',
      'Calm',
    ],
    cabinets: [],
  } as CapsuleState,
  reducers: {
    resetCapsuleStore: state => {
      Object.assign(state, {
        capsules: [],
        flair: [
          'Happy',
          'Appreciation',
          'Passionate',
          'Fear',
          'Sincere',
          'Fun',
          'Calm',
        ],
        cabinets: [],
      });
    },
    createUnSavedMockCapsule: (state: CapsuleState) => {
      state.capsules = [
        ...(state.capsules || []),
        {
          id: String(Date.now()),
          title: new Date().toLocaleString(),
          content: 'mock content',
          flairs: [state.flair[Math.floor(Math.random() * state.flair.length)]],
          cabinet: undefined,
          date: Date.now(),
          distance: undefined,
          available: false,
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
      },
    ) => {
      const index = state.capsules.findIndex(item => item.id === payload);

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
      },
    ) => {
      state.capsules = state.capsules.filter(item => item.id !== payload);
    },
    createCabinet: (
      state: CapsuleState,
      {
        payload,
      }: {
        payload: string;
      },
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
      },
    ) => {
      state.capsules = state.capsules.map(item =>
        item.id === capsule ? { ...item, cabinet } : item,
      );
    },
  },
});

export const {
  storeToCabinet,
  createUnSavedMockCapsule,
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
  distance: string | undefined;
  available: boolean;
}

export type CapsuleState = {
  capsules: Capsule[];
  flair: string[];
  cabinets: string[];
};
