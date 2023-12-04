import { useSelector } from "react-redux";
import { CapsuleState } from "@/store/capsule";
import { useMemo } from "react";

export default function () {
  const capsules = useSelector(
    (state: { capsule: CapsuleState }) => state.capsule.capsules
  );

  return useMemo(() => {
    const today = [];
    const yesterday = [];
    const earlier = [];

    const now = new Date();
    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).getTime();
    const yesterdayStart = todayStart - 24 * 60 * 60 * 1000;

    for (let i = 0; i < capsules.length; i++) {
      const timestamp = capsules[i].date;

      if (timestamp >= todayStart) {
        today.push(capsules[i]);
      } else if (timestamp >= yesterdayStart) {
        yesterday.push(capsules[i]);
      } else {
        earlier.push(capsules[i]);
      }
    }

    return { today, yesterday, earlier };
  }, [capsules]);
}
