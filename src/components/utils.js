export const joinCSSClass = (classList) => {
    if (Array.isArray(classList) && classList.length)
        return classList.join(" ");
    return "";
};
