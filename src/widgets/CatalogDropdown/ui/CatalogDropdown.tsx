'use client'

import './CatalogDropdown.scss'
import clsx from 'clsx'
import { useState } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import Button from '@shared/ui/Button'

type CatalogDropdownProps = {}

const CatalogDropdown = (props: CatalogDropdownProps) => {
  const {} = props
  const [isOpen, setIsOpen] = useState(false)

  const categories = useCategoryStore((state) => state.categories)

  return (
    <div className="catalog-dropdown">
      <Button
        className="catalog-dropdown__button"
        type="button"
        label="Каталог"
        iconName="catalog"
        iconPosition="before"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <div
        className={clsx('catalog-dropdown__inner container', {
          'is-active': isOpen,
        })}
      >
        <div className="catalog-dropdown__content">
          <div className="catalog-dropdown__content-categories categories">
            <h2 className="categories__title h4">Выберите категорию:</h2>
            <ul className="categories__list">
              {categories.map((category) => (
                <li className="categories__item" key={category.id}>
                  <h3 className="h6">{category.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="catalog-dropdown__content-subcategories subcategories">
            <h2 className="subcategories__title h4">{categories[0]?.title}</h2>
            <ul className="subcategories__list">
              {categories[0]?.subcategories.map((sub) => (
                <li className="subcategories__item" key={sub.id}>
                  <h3 className="h6">{sub.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogDropdown
