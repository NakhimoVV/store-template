'use client'

import './CatalogDropdown.scss'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useCategoryStore } from '@/entities/category/model/store'
import Categories from '@/entities/category/ui/Categories'
import Subcategories from '@/entities/category/ui/Subcategories'
import { useClickOutSide } from '@shared/hooks/useClickOutSide'
import Button from '@shared/ui/Button'

//TODO: добавить ссылки на items и TAB-usability

const CatalogDropdown = () => {
  const categories = useCategoryStore((state) => state.categories)
  const firstCategory = categories[0]

  const [isOpen, setIsOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const currentCategory = categories.find(
    (category) => category.id === activeCategoryId,
  )

  useClickOutSide(elementRef, () => setIsOpen(false))

  useEffect(() => {
    if (firstCategory) {
      setActiveCategoryId(firstCategory.id)
    }
  }, [firstCategory])

  return (
    <div className="catalog-dropdown" ref={elementRef}>
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
          <Categories
            categories={categories}
            activeCategoryId={activeCategoryId}
            onHoverItem={setActiveCategoryId}
          />
          <Subcategories
            title={currentCategory?.title}
            subcategories={currentCategory?.subcategories}
          />
        </div>
      </div>
    </div>
  )
}

export default CatalogDropdown
