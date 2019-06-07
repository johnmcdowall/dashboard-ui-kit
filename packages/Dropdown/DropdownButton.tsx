/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */

import * as React from 'react'
import classnames from 'classnames'
import { Button, ButtonPropsBase, ButtonRefObject } from '@duik/Button'

import { OpenStateControls } from '@duik/use-open-state'
import cls from './styles.scss'

export type DropdownButtonProps<P extends {} = {}> =
  & OpenStateControls
  & ButtonPropsBase
  & JSX.IntrinsicElements['button']
  & P

export const DropdownButton = React.forwardRef((props: DropdownButtonProps, ref: ButtonRefObject) => {
  const {
    // remove this from ...rest
    handleClose,
    handleOpen,
    setOpenState,
    // using
    handleToggle,
    isOpen,
    children,
    className,
    ...rest
  } = props
  return (
    <Button
      className={classnames(cls['dropdown-toggle'], className)}
      onFocus={handleOpen}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isOpen ? 'true' : 'false'}
      {...rest}
      ref={ref}
    >
      {children}
    </Button>
  )
})


DropdownButton.defaultProps = {
  children: 'Action',
};


DropdownButton.displayName = 'DropdownButton'

export default DropdownButton;
