import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CapsuleState } from '@/store/capsule';

export default function () {
  const capsules = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.capsules,
  );

  const cabinets = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.cabinets,
  );

  const cabinetList = useMemo(() => {
    const unstoredKey = null;
    const capsuleMap = new Map();

    capsules.forEach(item => {
      const cabinet = item.cabinet || unstoredKey;
      capsuleMap.set(cabinet, [...(capsuleMap.get(cabinet) || []), item]);
    });

    return [
      {
        cabinet: 'Unstored Capsules',
        capsules: capsuleMap.get(unstoredKey) || [],
      },
    ].concat(
      cabinets.map(item => ({
        cabinet: item,
        capsules: capsuleMap.get(item) || [],
      })),
    );
  }, [capsules, cabinets]);

  return {
    cabinetList,
  };
}
