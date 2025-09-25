import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-green-500", className)}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-green-500 fill-green-500", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 11 11 13 15 9" />
    </svg>
  );
};

type LoadingState = {
  text: string;
};

const LoaderCore = ({ loadingStates, value = 0 }: {
  loadingStates: LoadingState[];
  value?: number;
}) => {
  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col mt-8">
      {loadingStates.map((loadingState, index) => {
        const distance = Math.abs(index - value);
        const opacity = Math.max(1 - distance * 0.2, 0);

        return (
          <motion.div
            key={index}
            className={cn("text-left flex gap-4 mb-6")}
            initial={{ opacity: 0, y: -(value * 40) }}
            animate={{ opacity: opacity, y: -(value * 40) }}
            transition={{ duration: 0.5 }}
          >
            <div>
              {index > value && (
                <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
              )}
              {index === value && (
                <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </div>
              )}
              {index < value && (
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <span
              className={cn(
                "text-gray-700",
                value === index && "text-gray-900 font-medium",
                value > index && "text-green-600"
              )}
            >
              {loadingState.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (loop) {
          return (prev + 1) % loadingStates.length;
        } else {
          return Math.min(prev + 1, loadingStates.length - 1);
        }
      });
    }, duration);

    return () => clearInterval(interval);
  }, [loading, loadingStates.length, duration, loop]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl"
        >
          <div className="h-96 relative">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
          <div className="absolute inset-0 bg-white/90 dark:bg-black/90 -z-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};