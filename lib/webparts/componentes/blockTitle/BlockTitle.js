import * as React from 'react';
import styles from './blockTitle.module.scss';
var blockTitle = function (_a) {
    var children = _a.children, type = _a.type;
    return (React.createElement("div", null,
        React.createElement("div", { className: styles[type] },
            React.createElement("h2", null, children))));
};
blockTitle.defaultProps = { type: styles.title__left };
export default blockTitle;
//# sourceMappingURL=BlockTitle.js.map