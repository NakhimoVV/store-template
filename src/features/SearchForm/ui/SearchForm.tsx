import './SearchForm.scss'
import clsx from 'clsx'
import Field from '@shared/ui/Field'
import Button from '@shared/ui/Button'
import { ButtonMode } from '@shared/ui/Button/lib/constants'

type SearchFormProps = {
  className?: string
}

const SearchForm = (props: SearchFormProps) => {
  const { className } = props

  return (
    <form className={clsx(className, 'search-form')}>
      <Field
        className="search-form__field"
        type="search"
        label="Search"
        isLabelHidden
        placeholder="Введите название товара"
        inputMode="search"
      />
      <Button
        className="search-form__button"
        type="submit"
        label="Поиск товара"
        isLabelHidden
        iconName="search"
        mode={ButtonMode.RIGHT_ROUND}
      />
    </form>
  )
}

export default SearchForm
