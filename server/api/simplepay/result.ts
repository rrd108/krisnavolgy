interface SimplePayResult {
    r: number   // response code
    t: string   // transaction id
    e: 'success' | 'fail' | 'timeout' | 'cancel'   // event
    m: string   // merchant id
    o: string   // order id
}

export default defineEventHandler(async (event) => {
    const { r, s } = await readBody(event)

    const _r = atob(r)
    const isValid = checkSignature(_r, s, process.env.SIMPLEPAY_MERCHANT_KEY as string)
    const responseJson: SimplePayResult = JSON.parse(_r)
    const response = {
        responseCode: responseJson.r,
        transactionId: responseJson.t,
        event: responseJson.e,
        merchantId: responseJson.m,
        orderId: responseJson.o,
    }

    return {response, isValid}
})
