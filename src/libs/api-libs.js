export const getConvResponse = async (from,to,amount) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_MY_KEY}&from=${from}&to=${to}&amount=${amount}`)
    const conv = await response.json()
    return conv
}


export const getConvres = async ( from, to, amount ) => {
    const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_MY_KEY}&from=${from}&to=${to}&amount=${amount}` )
    const data = await res.json()
    return data
}
