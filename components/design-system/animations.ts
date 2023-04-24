// Defining reusable animations.
import { Variants, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const SectionPopInVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

interface UseAnimation {
  variants: Variants;
  initial: string;
  animate: string;
}

interface UseAnimationArgs {
  // A specific set of animation variants to run this hook with.
  // Currently only supports "hidden" and "visible" variants.
  // By default, we will use SectionPopInVariants.
  variants?: Variants;
  // Ref of the object that we want to animate.
  ref: React.RefObject<HTMLDivElement>;
}

// Stateful hook to help us with triggering an animation once on view.
// By deafult, Framer Motion can track whether the component is in view or not,
// but it will trigger the animation everytime the component is in view.
// This hook returns a set of props to pass to motion.div such that the animation is only triggered
// the first time the component is in view.
export function useAnimateOnViewOnce(args: UseAnimationArgs): UseAnimation {
  const { variants = SectionPopInVariants, ref } = args;
  const isInView = useInView(ref);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  // Track whether the component has been in view before.
  useEffect((): void => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  // TODO: support more initial/animate states.
  const initial = "hidden";
  const animate = hasBeenInView ? "visible" : "hidden";

  return {
    variants,
    initial,
    animate,
  };
}
