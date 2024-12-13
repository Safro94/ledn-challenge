import { FC, useEffect, useRef, useState } from 'react'
import {
  DownArrow,
  DropdownContainer,
  DropdownMenu,
  DropdownMenuItem,
  DropdownToggleButton,
  UpArrow,
} from './Dropdown.styles'
import { D } from '@tanstack/react-query-devtools/build/legacy/ReactQueryDevtools-Cn7cKi7o'

interface Item {
  id: string
  text: string
  onItemClick?: (item: string) => void
}

interface Props {
  buttonLabel: string
  items: Item[]
}

export const Dropdown: FC<Props> = ({ buttonLabel, items }) => {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // close dropdown on outside click
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  return (
    <DropdownContainer ref={menuRef}>
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
                key={item.id}
                id={`dropdown-item-${item.id}`}
                onClick={() => {
                  item.onItemClick?.(item.id)
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
