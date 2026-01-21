
export const projects = [
    {
        id: 1,
        title: "remmate.io",
        shortDescription: "Intelligent Personal Reminder & Note-Taking App",
        description: "Remmate is a cutting-edge personal productivity application designed to streamline task management and note-taking through the power of Artificial Intelligence. Unlike traditional reminder apps, Remmate leverages Google's Gemini AI to understand natural language, allowing users to create complex reminders simply by typing as they speak.",
        category: "01 / WEB APP",
        tags: ["React", "TypeScript", "Firebase", "Gemini AI", "Tailwind CSS"],
        color: "bg-blue-900",
        image: "/remmate-logo.png",
        links: {
            demo: "#",
            github: "#"
        },
        features: [
            {
                title: "AI-Powered Reminder Creation",
                description: "Stop fiddling with date pickers. Just type 'Remind me to call John next Tuesday at 3 PM' and Gemini AI parses it automatically."
            },
            {
                title: "Intelligent Note Editor",
                description: "Transform rough ideas into polished notes with grammar fixes, summarization, and AI writing assistance."
            },
            {
                title: "Secure & Real-time Cloud Sync",
                description: "Powered by Firebase Auth & Firestore for instant syncing across devices with offline PWA support."
            }
        ],
        techStack: {
            frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
            backend: ["Firebase Auth", "Firebase Firestore", "Google Generative AI (Gemini)"]
        },
        gallery: [
            // Add screenshots here later
        ]
    },
    {
        id: 2,
        title: "ZenSleep",
        shortDescription: "AI-Powered Sleep Analysis Ecosystem with IoT Integration.",
        description: "ZenSleep is a comprehensive sleep health platform combining IoT wearable hardware with Generative AI to provide real-time sleep monitoring and personalized improvement insights. Unlike traditional trackers, it uses Google's Gemini AI to interpret sleep patterns and offer medical-grade advice.",
        category: "02 / WEB APP",
        tags: ["React", "IoT", "Gemini AI", "AWS", "ESP32"],
        color: "bg-indigo-900",
        // image: "/zensleep-logo.png",
        links: { demo: "#", github: "#" },
        features: [
            {
                title: "AI-Driven Sleep Coaching",
                description: "Analyzes sleep logs to generate Sleep Health Scores and actionable behavioral recommendations using Gemini 1.5 Flash."
            },
            {
                title: "IoT Motion Tracking",
                description: "Real-time micro-movement and sudden wake detection using ESP32 and MPU6050 sensors."
            },
            {
                title: "Cloud & Serverless Architecture",
                description: "AWS Lambda infrastructure with Firebase Firestore for real-time data ingestion and storage."
            }
        ],
        techStack: {
            frontend: ["React", "Vite", "TailwindCSS", "Framer Motion", "Recharts"],
            backend: ["Firebase Auth", "Firestore", "AWS Lambda", "API Gateway"],
            hardware: ["ESP32", "Arduino Nano", "MPU6050", "WebSerial API"],
            ai: ["Google Gemini 1.5 Flash"]
        }
    },
    {
        id: 3,
        title: "AI Proctoring System",
        shortDescription: "IEEE standard-compliant Chrome Extension for automated exam monitoring.",
        description: "A professional-grade automated proctoring solution designed to maintain exam integrity. Unlike basic tools, this system implements IEEE standards and runs a real YOLOv8 machine learning model directly in the browser for high-performance, private, and real-time detection of unauthorized objects.",
        category: "03 / EXTENSION",
        tags: ["Chrome Extension", "YOLOv8", "TensorFlow.js", "Firebase", "Web Security"],
        color: "bg-emerald-900",
        links: { demo: "#", github: "#" },
        features: [
            {
                title: "Real-Time AI Detection",
                description: "Runs YOLOv8n via ONNX.js in Web Workers for 60fps detection of banned objects (phones, people) locally."
            },
            {
                title: "Enterprise Security",
                description: "Implements AES-GCM 256-bit encryption for sensitive data and tamper-proof audit logging."
            },
            {
                title: "Live Proctor Dashboard",
                description: "Monitoring interface for invigilators to view real-time status and violation snapshots."
            }
        ],
        techStack: {
            core: ["Chrome Extension API (Manifest V3)", "JavaScript ES6+", "HTML5/CSS3"],
            ai: ["YOLOv8", "ONNX Runtime Web", "Web Workers"],
            backend: ["Firebase Auth", "Firestore", "Cloudinary"],
            security: ["Web Crypto API (AES-GCM)", "SHA-256 Hashing"]
        }
    },
    {
        id: 4,
        title: "Exploratory Projects",
        shortDescription: "A collection of innovative prototypes in AI, AR, and Cybersecurity.",
        description: "A diverse collection of advanced prototypes exploring the boundaries of Healthcare AI, E-commerce AR, and Cybersecurity. This series demonstrates practical implementations of complex concepts, from multimodal AI health assistants to virtual try-on systems and malware analysis tools.",
        category: "04 / R&D",
        tags: ["Generative AI", "Augmented Reality", "Cybersecurity", "Python", "Streamlit"],
        color: "bg-rose-900",
        links: { demo: "#", github: "#" },
        features: [
            {
                title: "AI Virtual Doctor",
                description: "Multimodal health assistant powered by Gemini 2.0 Flash. analyzes symptoms and images (e.g., rashes) to provide structured preliminary assessments and care recommendations."
            },
            {
                title: "Virtual Dressing Room",
                description: "Web-based AR shopping experience allowing users to virtually 'try on' clothes by overlaying digital garments onto uploaded photos."
            },
            {
                title: "Advanced Malware Detection",
                description: "Cybersecurity system for safe handling and static/dynamic analysis of live malware samples from 'theZoo' repository."
            }
        ],
        techStack: {
            ai: ["Google Gemini 2.0 Flash", "Pillow (PIL)"],
            web: ["Flask (Python)", "Streamlit", "HTML5/JS"],
            security: ["Live Malware Analysis", "Static/Dynamic Analysis Tools"],
            data: ["theZoo Database", "JSON Inventory"]
        }
    }
];

export const categories = ["ALL", "WEB APP", "AI TOOL", "EXTENSION", "R&D", "MOBILE", "IOT"];
