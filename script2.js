const getPeoplePromise = (fetch) => {
    return fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            return {
                count: data.count,
                results: data.results,
            };
        })
        .catch((error) => {
            console.log(error);
        });
};

const getPeople = async (fetch) => {
    const request = await fetch('https://swapi.dev/api/people');
    const data = await request.json();
    console.log(data);

    return {
        count: data.count,
        results: data.results,
    };
};

module.exports = {
    getPeoplePromise,
    getPeople,
};
