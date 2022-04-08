const tree = {
    value: "A",
    left: {
        value: "B",
        left: {
            value: "D",
            left: {
                value: "G",
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: "E",
            left: null,
            right: {
                value: "H",
                left: {
                    value: "K",
                    left: null,
                    right: null
                }
            }
        }
    },
    right: {
        value: "C",
        left: {
            value: "F",
            left: {
                value: "I",
                left: null,
                right: null
            },
            right: {
                value: "J",
                left: null,
                right: null
            }
        },
        right: null
    }
};

module.exports = tree