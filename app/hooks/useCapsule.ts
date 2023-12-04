import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CapsuleState } from '@/store/capsule';

export default function (id: string) {
  const capsules = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.capsules,
  );

  const capsule = useMemo(() => {
    return capsules.find(item => item.id === id);
  }, [capsules, id]);

  return {
    capsule,
  };
}
