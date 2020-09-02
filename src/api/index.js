export const apiGet = (url) => () => fetch(url).then(res => res.json());

export const apiPut = (url, id, object) => () =>
    fetch(
        `${url}/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(object),
            headers: new Headers({ 'Content-Type': 'application/json' })
        }
    ).then(res => res.json())
        .then(res => {
            if (res.error) {
                return Promise.reject(res.validation);
            }
            return res;
        });

export const apiPost = (url, object) => () =>
    fetch(
        `${url}`,
        {
            method: 'POST',
            body: JSON.stringify(object),
            headers: new Headers({ 'Content-Type': 'application/json' })
        }
    ).then(res => res.json())
        .then(res => {
            if (res.error) {
                return Promise.reject(res.validation);
            }
            return res;
        });