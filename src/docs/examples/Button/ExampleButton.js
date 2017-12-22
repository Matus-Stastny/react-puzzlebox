import React from 'react';
import Button from 'components/Button';

/** Submit button */
export default function SubmitButton() {
    return <Button label="Submit" onClick={() => console.log('clicked')} />;
}