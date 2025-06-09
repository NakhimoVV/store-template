import React, { useMemo } from 'react'
import './Grid.scss'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

type GridProps = {
  classNameForItem?: string
  columns: number
  wideElement?: number
  wide2?: boolean // Элемент занимает 2 колонки
  children: React.ReactNode
}

const Grid = (props: GridProps) => {
  const {
    columns = 1,
    children,
    wideElement = 0,
    wide2 = false,
    classNameForItem,
  } = props

  const childrenArray = React.Children.toArray(children)
  const childrenWithIds = useMemo(() => {
    return childrenArray.map((child) => {
      return {
        id: nanoid(6),
        element: child,
      }
    })
  }, [childrenArray])

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {childrenWithIds.map(({ element, id }, index) => {
        const isWideElement = wideElement === index + 1

        if (isWideElement) {
          return (
            <li
              className={clsx(classNameForItem, 'grid__item', {
                [`grid__item--wide${wide2 && '-2'}`]: wideElement > 0,
              })}
              key={id}
            >
              {element}
            </li>
          )
        }

        return (
          <li className={clsx(classNameForItem, 'grid__item')} key={id}>
            {element}
          </li>
        )
      })}
    </ul>
  )
}

export default Grid
