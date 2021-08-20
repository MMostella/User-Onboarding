import React from 'react';

export default function Form(props) {
    const { 
        values, 
        change, 
        submit, 
        disabled, 
        errors 
    } = props;

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
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>
                    </div>
                </div>
                <label>{' First Name: '} 
                    <input 
                        type='text'
                        name='first_name'
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>
                <label>{' Last Name: '} 
                    <input 
                        type='text'
                        name='last_name'
                        value={values.last_name}
                        onChange={onChange}
                    />
                </label>
                <label>{' Email: '} 
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>{' Password: '} 
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>{' Terms and Condition: '}
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button id='submitButton' disabled={disabled}>SUBMIT</button>
            </form>
        </>
    )
}