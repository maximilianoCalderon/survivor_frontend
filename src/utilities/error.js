export function translateError(e) {
    console.log(e)
    if (e.response) {
        if (e.response.data) {
            if (e.response.data.message) {
                 console.log(e.response.data.message)
                 return e.response.data.message;
            }
             console.log(e.response.data)
             return e.response.data;
        }
         console.log(e.response)
         return e.response;
    }else {
        return e.toString();
    }
} 