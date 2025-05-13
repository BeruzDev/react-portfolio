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

export const useProjectElement = () => {
  const techIcon = (icon) => ({ light: icon, dark: icon })

  const dataToFill = [
    {
      image: ToggleImg,
      title: 'Toggle Comments',
      description: 'Extensión VSCode',
      technologies: [
				techIcon(TypeScript)
			],
      github: 'Github',
      githubOnclik: () =>
        window.open(
          'https://github.com/BeruzDev/vsc_extension_toggle_comments'
        ),
      link: 'Marketplace',
      linkOnclick: () =>
        window.open(
          'https://marketplace.visualstudio.com/items?itemName=BeruzDev.toggle-comments-visibility'
        ),
    },
    {
      image: TypingImg,
      title: 'A Typing Game',
      description: 'Practica Mecanografía',
      technologies: [
        {
          light: ReactLight,
          dark: ReactDark,
        },
        techIcon(Sass),
      ],
      github: 'Github',
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/a-typing-game'),
      link: 'Link',
      linkOnclick: () => window.open('https://atypinggame.netlify.app/'),
    },
    {
      image: ChatImg,
      title: 'NodeJs Chat',
      description: 'Chatea en tiempo real',
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
      github: 'Github',
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/Chat-node.js'),
      link: 'Link',
      linkOnclick: () => window.open(''),
    },
    {
      image: IchibanImg,
      title: 'Ichiban Clon',
      description: 'Animación de scroll',
      technologies: [
				techIcon(Html), 
				techIcon(Css), 
				techIcon(JavaScript)
			],
      github: 'Github',
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/ichiban-scroll'),
      link: 'Link',
      linkOnclick: () => window.open('https://ichiban-clone.netlify.app/'),
    },
    {
      image: CraftImg,
      title: 'Craft it!',
      description: 'Acortador de URLs',
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
      github: 'Github',
      githubOnclik: () =>
        window.open('https://github.com/BeruzDev/link-shortener'),
      link: 'Link',
      linkOnclick: () => window.open('https://craftit.vercel.app/'),
    },
  ]

  return { dataToFill }
}
