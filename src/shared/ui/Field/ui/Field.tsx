import './Field.scss'
import clsx from 'clsx'
import getIdFromTitle from '@shared/ui/Field/lib/getIdFromTitle'
import type { InputHTMLAttributes } from 'react'

type FieldProps = {
  className?: string
  label: string
  isLabelHidden?: boolean
  id?: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  isRequired?: boolean
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
}

const Field = (props: FieldProps) => {
  const {
    className,
    label,
    isLabelHidden = false,
    id = getIdFromTitle(label),
    type,
    placeholder,
    isRequired,
    inputMode,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  // TODO: продумать универсальность и корректность атрибутов

  return (
    <div className={clsx(className, 'field')}>
      <label
        className={clsx('field__label', {
          'visually-hidden': isLabelHidden,
        })}
        htmlFor={id}
      >
        {label}{' '}
        {isRequired && (
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          name={label.toLowerCase()}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
        />
      </div>
    </div>
  )
}

export default Field
