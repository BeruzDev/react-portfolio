import Practicas from '../assets/Icons/Other/folder-code.svg?react'
import Modelista from '../assets/Icons/Other/clipboard-list.svg?react'
import Estudios from '../assets/Icons/Other/graduation-cap.svg?react'

export const useExperienceElement = () => {
  const dataToFill = [
    {
      icon: Practicas,
      tittle: 'Experiencia En Desarrollo Web',
      description: 'Cuatro meses de practicas en',
      descriptionBold: 'Kennwort Consulting & Technologies',
      button: 'Referencias',
      onclick: () =>
        window.open(
          '/public/Documents/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete.pdf'
        ),
    },
    {
      icon: Modelista,
      tittle: 'Experiencia Como Modelista',
      description: 'Diez años como Clay Modeler en',
      descriptionBold: 'EDAG Engineering Spain, S.L.',
      button: 'Recomendación',
      onclick: () =>
        window.open(
          '/public/Documents/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf'
        ),
    },
    {
      icon: Estudios,
      tittle: 'Educación',
      description: 'ILERNA Formación Profesional',
      descriptionBold: 'Desarrollo de aplicaciones Web',
      button: 'Expediente',
      onclick: () =>
        window.open(
          '/public/Documents/finishedz_grade_certificate_CENSORED.pdf'
        ),
    },
  ]

  return { dataToFill }
}
