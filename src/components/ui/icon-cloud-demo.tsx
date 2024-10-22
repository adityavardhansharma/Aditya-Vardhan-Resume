import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "python",
    "solidity",
    "react",
    "drizzle",
    "neondb",
    "html5",
    "css3",
    "nodedotjs",
    "c",
    "nextdotjs",
    "cplusplus",
    "matplotlib",
    "c",
    "powerbi",
    "uipath",
    "wordpress",
    "mongodb",
    "firebase",
    "pnpm",
    "linux",
    "flask",
    "huggingface",
    "machinelearning",
    "streamlit",
    "netlify",
    "vercel",
    "r",
    "tensorflow",
    "mysql",
    "docker",
    "git",
    "mysql",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "webstorm",
    "pycharm",
    "tailwindcss",
    "vuedotjs"
];

export function IconCloudDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8">
            <IconCloud
                iconSlugs={slugs}
                options={{ dragControl: true }}
            />
        </div>
    );
}