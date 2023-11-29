import { useSelector } from 'react-redux';
import { CapsuleState } from '@/store/capsule';

export default function () {
  const flairs = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.flair,
  );

  return {
    flairs,
  };
}
