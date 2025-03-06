import { cn } from "@/lib/utils";

// Simplified version with JavaScript-style defaults and implementation
const AnimatedContainer = (props) => {
  // Use standard JavaScript object destructuring with defaults
  const { children, animation = "fade-in", delay = 0, className } = props;

  // Simple direct return with style as a JavaScript object
  return (
    <div
      className={cn(`animate-${animation}`, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
