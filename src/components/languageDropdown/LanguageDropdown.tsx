import { Dropdown } from 'components/dropdown'
import { useTranslation } from 'react-i18next'

enum Languages {
  EN = 'en',
  ES = 'es',
}

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const items = [
    {
      id: Languages.EN,
      text: Languages.EN.toUpperCase(),
      onItemClick: changeLanguageHandler,
    },
    {
      id: Languages.ES,
      text: Languages.ES.toUpperCase(),
      onItemClick: changeLanguageHandler,
    },
  ]

  return <Dropdown items={items} buttonLabel={i18n.language.toUpperCase()} />
}
