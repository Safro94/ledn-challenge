import { useState } from 'react'
import {
  DownArrow,
  DropdownContainer,
  DropdownMenu,
  DropdownMenuItem,
  DropdownToggleButton,
  UpArrow,
} from './Dropdown.styles'
import { useClickOutside } from '@mantine/hooks'
import { DROPDOWN_CONTAINER_TEST_ID } from 'components/languageDropdown/__tests__/LanguageDropdown.test'

interface Item<T> {
  id: T
  text: string
}

interface Props<T> {
  buttonLabel: string
  items: Item<T>[]
  onClick: (id: T) => void
}

export const Dropdown = <T,>({ buttonLabel, items, onClick }: Props<T>) => {
  const [open, setOpen] = useState(false)
  const menuRef = useClickOutside(() => setOpen(false))

  return (
    <DropdownContainer ref={menuRef} data-testid={DROPDOWN_CONTAINER_TEST_ID}>
      <DropdownToggleButton
        id='dropdown-button'
        type='button'
        onClick={() => setOpen((prevState) => !prevState)}
        aria-label={buttonLabel}
        aria-haspopup='true'
        aria-expanded={open}
        aria-controls='dropdown-menu'
      >
        {buttonLabel}
        {open ? <UpArrow /> : <DownArrow />}
      </DropdownToggleButton>

      {open && (
        <DropdownMenu>
          <ul role='menu' id='dropdown-menu' aria-labelledby='dropdown-button'>
            {items.map((item) => (
              <DropdownMenuItem
                role='menuitem'
                key={String(item.id)}
                id={`dropdown-item-${item.id}`}
                onClick={() => {
                  onClick(item.id)
                  setOpen(false)
                }}
              >
                {item.text}
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenu>
      )}
    </DropdownContainer>
  )
}
