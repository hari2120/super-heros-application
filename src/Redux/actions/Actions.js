export const GET_HERO_DATA = "GET_HERO_DATA"

export const gettingData = (payload) => {
    console.log(payload);
    return {
        type:GET_HERO_DATA,
        payload
    }
}