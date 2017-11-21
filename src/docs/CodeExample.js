import React from 'react';
import PropTypes from 'prop-types';
import { PrismCode } from "react-prism";
import '../prism';
import 'prismjs/themes/prism-okaidia.css';

class CodeExample extends React.Component {
    render() {
        return (
            <pre ref={ref => { this.element = ref }}>
                <PrismCode className="language-jsx">
                    {this.props.children}
                </PrismCode>
            </pre>
        )
    }
}

CodeExample.propTypes = {
    children: PropTypes.string.isRequired
}

export default CodeExample;