import { Dropdown } from 'components/dropdown'
import { useTranslation } from 'react-i18next'

enum Languages {
  EN = 'en',
  ES = 'es',
}

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()

  const changeLanguageHandler = (lang: Languages) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Dropdown<Languages>
      onClick={changeLanguageHandler}
      items={Object.values(Languages).map((value) => ({
        id: value,
        text: value.toUpperCase(),
      }))}
      buttonLabel={i18n.language.toUpperCase()}
    />
  )
}
