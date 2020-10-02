import React from 'react';
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...props }) => (
                    <MenuItem key={id} {...props} />
                ))

            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);