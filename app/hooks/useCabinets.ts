import { useSelector } from 'react-redux';
import { CapsuleState } from '@/store/capsule';

export default function () {
  const cabinets = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.cabinets,
  );

  return {
    cabinets,
  };
}
