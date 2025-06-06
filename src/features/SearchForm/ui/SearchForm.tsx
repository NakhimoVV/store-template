import './SearchForm.scss'
import Field from '@shared/ui/Field'
import Button from '@shared/ui/Button'
import classNames from 'classnames'

type SearchFormProps = {
  className?: string
}

const SearchForm = (props: SearchFormProps) => {
  const { className } = props

  return (
    <form className={classNames(className, 'search-form')}>
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
        mode="right-round"
      />
    </form>
  )
}

export default SearchForm
