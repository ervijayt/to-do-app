
const serviceUrl ='http://localhost:5000/'
const axios = require('axios');
export const IsOnline = false;

export const Post = async (methodName, parameters) => {
    const config = {
        method: 'post',
        url: serviceUrl + methodName,
        data: parameters
    }
    let returnValue;
    try {
        returnValue = await axios(config);
    } catch (error) {
        console.log(error.response);
        returnValue = error;
    }
    return returnValue;
}
