import { MouseEventHandler } from "react"

interface IBaseMouseEvents {
    onClick?: MouseEventHandler

    onMouseDown?: MouseEventHandler
    onMouseUp?: MouseEventHandler

    onMouseEnter?: MouseEventHandler
    onMouseLeave?: MouseEventHandler
    onMouseOut?: MouseEventHandler
    onMouseOver?: MouseEventHandler
}

interface IBaseComponentProps extends IBaseMouseEvents {
    id?: string
    className?: string
}

export type { IBaseComponentProps, IBaseMouseEvents }