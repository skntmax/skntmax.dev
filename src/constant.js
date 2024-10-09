export const constants =  {
    btcode_live_cd:"btcode_live_cd",
    btcode_live_cd_key:"btcode_live_cd_key"
}

export function getUserObj(obj, skip_key) {
    let res = {}

    for (let key in obj) {

        if (!skip_key.includes(key)) {
            res[key] = obj[key]
        }

    }

    return res
}
