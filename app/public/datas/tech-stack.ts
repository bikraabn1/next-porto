import { TechStack } from "@/app/types";
import { PiNetworkThin } from "react-icons/pi";
import { SiExpress, SiFastapi, SiGraphql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";

export const TECH_STACK_DATAS: TechStack[] = [
    { name: 'React', icon: SiReact, docsLink: 'https://react.dev' },
    { name: 'Next.js', icon: SiNextdotjs, docsLink: 'https://nextjs.org'},
    { name: 'TypeScript', icon: SiTypescript, docsLink: 'https://www.typescriptlang.org' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, docsLink: 'https://tailwindcss.com' },
    { name: 'Node.js', icon: SiNodedotjs, docsLink: 'https://nodejs.org/en/download/current' },
    { name: 'Express', icon: SiExpress, docsLink: 'https://expressjs.com' },
    { name: 'SocketIO', icon: SiSocketdotio, docsLink: 'https://socket.io' },
    { name: 'PostgreSQL', icon: SiPostgresql, docsLink: 'https://www.postgresql.org'},
    { name: 'Python', icon: SiPython, docsLink: 'https://www.python.org' },
    { name: 'FastAPI', icon: SiFastapi, docsLink: 'https://fastapi.tiangolo.com' },
    { name: 'RestAPI', icon: PiNetworkThin, docsLink: 'https://www-ibm-com.translate.goog/think/topics/rest-apis?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc' },
    { name: 'GraphQL', icon: SiGraphql, docsLink: 'https://graphql.org' },
]