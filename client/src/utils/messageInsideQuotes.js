function getMessage(inputString) {
    const regex = /'([^']*)'/;
    const matches = inputString.match(regex);
    if (matches && matches.length >= 2) {
        return matches[1];
    } else {
        return null; // No content in single quotes found
    }
}

export default getMessage