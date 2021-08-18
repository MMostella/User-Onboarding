import React from 'react';

export default function Form(props) {
    const { values, change } = props;

    return (
        <>
            <form>
                <div>
                    <h2>Add a user</h2>
                </div>
                <label>
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={change}
                    />
                </label>
                <label>
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={change}
                    />
                </label>
                <label>
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={change}
                    />
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={change}
                    />
                </label>
                <button type='submit'>SUBMIT</button>
            </form>
        </>
    )
}