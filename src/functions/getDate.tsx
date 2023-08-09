function getDate () {
    const date  = new Date();
    const month = date.getMonth() + 1;
    const day   = date.getDate();

    return `${day}, ${month}`
}

export default getDate;