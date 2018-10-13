export function addData(data){
    return {
        type: "ADD",
        payload: {
            ...data,
            id: Date.now()
        }
    }
}

export function updateData(data){
    return {
        type: "UPDATE",
        payload: data
    }
}

export function deleteData(data){
    return {
        type: "DELETE",
        payload: data
    }
}
