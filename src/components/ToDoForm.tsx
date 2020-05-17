import React, {useRef} from 'react';

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<ToDoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === `Enter`) {
            props.onAdd(ref.current!.value)
            ref.current!.value = ``
        }
    }

    return (
        <div className="input-field mt2">
            <input
                ref={ref} 
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
                placeholder="type here..."/>
            <label htmlFor="title" className="active">
                Add ToDo
            </label>
        </div>
    )
}
