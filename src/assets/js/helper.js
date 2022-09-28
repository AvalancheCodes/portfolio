export const loadHtml = async (route) => {
    const response = await fetch(route)
        .then(data => data.text());
    return  response;
}