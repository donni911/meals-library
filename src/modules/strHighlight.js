const strHighlight = (value, input) => {
        const escapeRegExp = (str) =>
            str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return value.replace(
            new RegExp(`(${escapeRegExp(input)})`, "ig"),
            '<span class="text-secondary">' + "$1" + "</span>"
        );
};

export default strHighlight;
