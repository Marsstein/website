import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

type LoadingState = {
  text: string;
};

export const InlineMultiStepLoader = ({
  loadingStates,
  duration = 2000,
}: {
  loadingStates: LoadingState[];
  duration?: number;
}) => {
  const [currentState, setCurrentState] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;

    hasStarted.current = true;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < loadingStates.length) {
        setCurrentState(currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [isInView, loadingStates.length, duration]);

  return (
    <div ref={ref} className="space-y-3">
      {loadingStates.map((state, index) => {
        const isCompleted = index < currentState;
        const isCurrent = index === currentState;
        const isPending = index > currentState;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={false}
              animate={{
                scale: isCurrent ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.3,
                repeat: isCurrent ? Infinity : 0,
                repeatDelay: 1.5
              }}
            >
              {isCompleted ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </motion.div>
              ) : isCurrent ? (
                <motion.div
                  className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center"
                  animate={{
                    borderColor: ["#2563eb", "#3b82f6", "#2563eb"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
              )}
            </motion.div>
            <motion.span
              className={cn(
                "text-base transition-all duration-300",
                isCompleted && "text-emerald-700 font-medium",
                isCurrent && "text-blue-700 font-medium",
                isPending && "text-gray-500"
              )}
              animate={{
                x: isCurrent ? [0, 2, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isCurrent ? Infinity : 0,
                repeatDelay: 1
              }}
            >
              {state.text}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};