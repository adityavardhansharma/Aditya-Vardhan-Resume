import TypingAnimation from "@/components/magicui/typing-animation";

export function TypingAnimationDemo() {
    const anText = "Data Science | Machine Learning | Gen AI | Fullstack Web Dev";
    return (
        <TypingAnimation
            className="text-2xl font-bold text-black dark:text-white whitespace-nowrap"
            text={anText}
            duration={50}
        />
    );
}
