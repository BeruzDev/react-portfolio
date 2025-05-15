import { useMemo } from 'react'
import ToggleImg from '../assets/Images/Projects/project-1.png'
import TypingImg from '../assets/Images/Projects/project-2.png'
import ChatImg from '../assets/Images/Projects/project-3.png'
import IchibanImg from '../assets/Images/Projects/project-4.png'
import CraftImg from '../assets/Images/Projects/project-5.png'
import WorkImg from '../assets/Images/Projects/project-work-in-progress.png'
import Css from '../assets/Icons/Logos/css.svg?react'
import ExpressDark from '../assets/Icons/Logos/Express.js_dark.svg?react'
import ExpressLight from '../assets/Icons/Logos/Express.js_light.svg?react'
import Html from '../assets/Icons/Logos/html5.svg?react'
import JavaScript from '../assets/Icons/Logos/javascript.svg?react'
import MongoDb from '../assets/Icons/Logos/mongodb.svg?react'
import MySql from '../assets/Icons/Logos/mysql.svg?react'
import NodeJs from '../assets/Icons/Logos/nodejs.svg?react'
import ReactDark from '../assets/Icons/Logos/React_dark.svg?react'
import ReactLight from '../assets/Icons/Logos/React_light.svg?react'
import Sass from '../assets/Icons/Logos/sass.svg?react'
import Supabase from '../assets/Icons/Logos/supabase.svg?react'
import TypeScript from '../assets/Icons/Logos/typescript.svg?react'
import SocketDark from '../assets/Icons/Logos/Socket.io_dark.svg?react'
import SocketLigth from '../assets/Icons/Logos/Socket.io_light.svg?react'
import GithubIcon from '../assets/Icons/Other/github.svg?react'
import GithubIconLight from '../assets/Icons/Other/github-white.svg?react'
import LinkIcon from '../assets/Icons/Other/link.svg?react'
import LinkIconWhite from '../assets/Icons/Other/link-white.svg?react'

export const useProjectElement = () => {
  const techIcon = (icon) => ({ light: icon, dark: icon })

  const dataToFill = [
    {
      image: ToggleImg,
      title: 'Toggle Comments',
      description:
        'Extensión para VSCode que permite alternar la visibilidad de los comentarios sin modificar el código, ideal para estudiantes que necesitan tomar muchos apuntes y, al mismo tiempo, quieren ver el código con claridad.',
      technologies: [techIcon(TypeScript)],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open(
          'https://github.com/BeruzDev/vsc_extension_toggle_comments'
        ),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () =>
        window.open(
          'https://marketplace.visualstudio.com/items?itemName=BeruzDev.toggle-comments-visibility'
        ),
    },
    {
      image: TypingImg,
      title: 'A Typing Game',
      description:
        'Una aplicación web diseñada para mejorar la velocidad y precisión en la mecanografía. A Typing Game permite a los usuarios practicar con palabras, frases, o incluso fragmentos de código en varios lenguajes, proporcionando un seguimiento de métricas en tiempo real.',
      technologies: [
        {
          light: ReactLight,
          dark: ReactDark,
        },
        techIcon(Sass),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/a-typing-game'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://atypinggame.netlify.app/'),
    },
    {
      image: ChatImg,
      title: 'NodeJs Chat',
      description:
        'Aplicación de chat en tiempo real desarrollada para permitir la comunicación entre múltiples usuarios, el contenido del chat se borra automáticamente cada 15 minutos. Para probarla como un solo usuario, basta con abrir varias pestañas y simular distintas personas.',
      technologies: [
        techIcon(NodeJs),
        {
          light: ExpressLight,
          dark: ExpressDark,
        },
        {
          light: SocketLigth,
          dark: SocketDark,
        },
        techIcon(MySql),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/Chat-node.js'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://chat-node-js-2u1m.onrender.com/'),
    },
    {
      image: IchibanImg,
      title: 'Ichiban Clon',
      description:
        'Ichiban Scroll Animation es una página web que presenta una animación de desplazamiento muy bien hecha. He clonado y mejorado algunos puntos de la experiencia de usuario y la interfaz.',
      technologies: [techIcon(Html), techIcon(Css), techIcon(JavaScript)],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/ichiban-scroll'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://ichiban-clone.netlify.app/'),
    },
    {
      image: CraftImg,
      title: 'Craft it!',
      description:
        'Craft it! es una aplicación web full stack que permite a los usuarios acortar enlaces largos, gestionarlos de forma sencilla y exportarlos en formato JSON. Está pensada para ser intuitiva, moderna y segura, con soporte para autenticación mediante OAuth con Google y GitHub, y también permite su uso sin registro.',
      technologies: [
        techIcon(NodeJs),
        {
          light: ExpressLight,
          dark: ExpressDark,
        },
        techIcon(Supabase),
        {
          light: ReactLight,
          dark: ReactDark,
        },
        techIcon(Css),
      ],
      github: { light: GithubIcon, dark: GithubIconLight },
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/link-shortener'),
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://craftit.vercel.app/'),
    },
  ]

  const reverseData = dataToFill.reverse()

  return { reverseData }
}
