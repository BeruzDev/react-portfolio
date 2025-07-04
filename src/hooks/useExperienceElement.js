import Practicas from '../assets/Icons/Other/folder-code.svg?react'
import Modelista from '../assets/Icons/Other/clipboard-list.svg?react'
import Estudios from '../assets/Icons/Other/graduation-cap.svg?react'

export const useExperienceElement = () => {
  const dataToFill = [
    {
      icon: Practicas,
      title: 'Experiencia En Desarrollo Web',
      description: 'Cuatro meses de practicas en',
      descriptionBold: 'Kennwort Consulting',
      button: 'Referencias',
      onclick: () =>
        window.open(
          '/Documents/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete.pdf'
        ),
    },
    {
      icon: Modelista,
      title: 'Experiencia Como Modelista',
      description: 'Diez años como Clay Modeler en',
      descriptionBold: 'EDAG Engineering Spain, S.L.',
      button: 'Recomendación',
      onclick: () =>
        window.open(
          '/Documents/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf'
        ),
    },
    {
      icon: Estudios,
      title: 'Educación',
      description: 'ILERNA Formación Profesional',
      descriptionBold: 'Desarrollo de aplicaciones Web',
      button: 'Expediente',
      onclick: () =>
        window.open(
          '/Documents/finished_grade_certificate_CENSORED.pdf'
        ),
    },
  ]

  return { dataToFill }
}
