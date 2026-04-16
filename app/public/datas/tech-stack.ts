import { TechStack } from "@/app/types";
import { PiNetworkThin } from "react-icons/pi";
import { SiExpress, SiFastapi, SiGraphql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

export const TECH_STACK_DATAS: TechStack[] = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'SocketIO', icon: SiSocketdotio },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Python', icon: SiPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'RestAPI', icon: PiNetworkThin },
    { name: 'GraphQL', icon: SiGraphql },
]