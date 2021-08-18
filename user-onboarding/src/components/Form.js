import React from 'react';

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name,valueToUse)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Add a user</h2>
                    <div className='errors'>
                        {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>
                    </div>
                </div>
                <label>
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>SUBMIT</button>
            </form>
        </>
    )
}