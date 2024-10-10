import PropTypes from 'prop-types'
import './textarea.css'

const Textarea = ({name, placeholder, label, cols, rows, width }) => {
    return (
        <label className="textarea-label">
            <span className="textarea-span">{label}</span>
        <textarea name={name} style ={{width: width}}cols={cols} rows={rows} className="textarea">{placeholder}</textarea>
        </label>
    );
}

Textarea.propTypes = {
    name: PropTypes.node.isRequired,
    placeholder: PropTypes.node,
    label: PropTypes.node.isRequired,
    cols: PropTypes.node.isRequired,
    rows: PropTypes.node.isRequired,
    width: PropTypes.node
}

Textarea.defaultProps = {
    name: 'textarea',
    label: 'textarea',
    cols: '63',
    rows: '5'
}

export default Textarea;