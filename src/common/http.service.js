import rest from './rest.service.js'

export default {
    postJson(url, param, payload, callback, exception) {
        rest.postJson(convertPath(url, param), payload, callback, exception);
    },
    postForm(url, param, callback, exception) {
        rest.postForm(url, param, callback, exception);
    }
}

function convertPath(url, param) {
    let paramPath = '';
    for (let key in param) {
        if (param[key] != null || param[key] != undefined) {
            let value = param[key];
            if (value) {
                let prefix = paramPath === '' ? '' : '&';
                paramPath += prefix;
                paramPath += (key + '=' + encodeURIComponent(value));
            }
        }

    } 
    console.log('paramPath', paramPath);
    return url + '?' + paramPath;
}
