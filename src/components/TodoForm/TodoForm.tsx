import Button from '@components/Button';
import Input from '@components/Input';
import React, { FormEvent, useRef } from 'react';
import { Props } from './types';

const TodoForm: React.FunctionComponent<Props> = ({ addTodo }) => {
    const inputEl = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = inputEl.current.value.trim();

        if (value) {
            addTodo(value);
            inputEl.current.value = '';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input ref={inputEl} placeholder="Enter Todo" />
            <Button solid type="submit">
                Add Todo
            </Button>
        </form>
    );
};

export default TodoForm;
