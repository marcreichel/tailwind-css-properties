module.exports = function({ addBase, theme }) {
    const cssProperties = {};
    const colors = theme('colors');
    for (let color in colors) {
        if (colors.hasOwnProperty(color)) {
            if (typeof colors[color] === 'string') {
                cssProperties[`--${color}`] = colors[color];
            } else if (typeof colors[color] === 'object') {
                for (let shade in colors[color]) {
                    if (colors[color].hasOwnProperty(shade)) {
                        cssProperties[`--${color}-${shade}`] = colors[color][shade];
                    }
                }
            }
        }
    }

    const root = {
        ':root': cssProperties,
    };

    addBase(root);
};
