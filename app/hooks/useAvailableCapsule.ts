import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CapsuleState } from '@/store/capsule';

export default function () {
  const capsules = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.capsules,
  );

  const capsule = useMemo(() => {
    return capsules.find(item => item.available);
  }, [capsules]);

  return {
    capsule,
  };
}
