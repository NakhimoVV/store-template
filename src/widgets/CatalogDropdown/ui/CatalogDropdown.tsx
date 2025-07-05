'use client'

import './CatalogDropdown.scss'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import Button from '@shared/ui/Button'

type CatalogDropdownProps = {}

const CatalogDropdown = (props: CatalogDropdownProps) => {
  const {} = props
  const categories = useCategoryStore((state) => state.categories)
  const firstCategory = categories[0]

  const [isOpen, setIsOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

  useEffect(() => {
    if (firstCategory) {
      setActiveCategoryId(firstCategory.id)
    }
  }, [firstCategory])
  //TODO: Повторение кода и закрытие меню при клике вне (например, используя useEffect с click-слушателем)
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
                <li
                  className={clsx('categories__item', {
                    'is-active': category.id === activeCategoryId,
                  })}
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                >
                  <h3 className="h6">{category.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="catalog-dropdown__content-subcategories subcategories">
            <h2 className="subcategories__title h4">{firstCategory?.title}</h2>
            <ul className="subcategories__list">
              {categories
                .find((category) => category.id === activeCategoryId)
                ?.subcategories.map((sub) => (
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
