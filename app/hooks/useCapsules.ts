import { useSelector } from "react-redux";
import { CapsuleState } from "@/store/capsule";

export default function () {
  const capsules = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.capsules
  );

  return {
    capsules,
  };
}
