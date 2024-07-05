"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { addInterestEvent } from "@/app/actions";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const ActionButton = ({ eventId, interestedUserIds, fromDetails }) => {
  const { auth } = useAuth();

  const router = useRouter();

  const isInterested = interestedUserIds?.find((id) => id === auth?.id);

  const [interested, setInterested] = useState(isInterested);

  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (auth) {
      await addInterestEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  }

  async function markGoing() {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested {interested}
      </button>

      <button
        onClick={markGoing}
        className="text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButton;
