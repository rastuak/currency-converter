"use client"
import { getConvResponse } from "@/libs/api-libs"
import { useRef } from "react"

const Convertingtab = () => {
    const searchRef = useRef()

    const handleConvert = async (event) => {
        let amount = searchRef.current.value
        amount = parseFloat(amount.replace(',', '.'))
        const fromCur = document.getElementById("fromCurrency").value
        const toCur = document.getElementById("toCurrency").value
        const convElem = document.getElementById("convertResult")

        if (event.key === "Enter" || event.type === "click") {
            if (!amount) {
                event.preventDefault()
                convElem.textContent = "Invalid"
                alert("input valid amount")
                return
            }
            if (fromCur === "" || toCur === "") {
                event.preventDefault()
                convElem.textContent = "Invalid"
                alert("select valid currencies")
                return
            }
            event.preventDefault()
            const response = await getConvResponse(fromCur,toCur,amount)
            const result = (response.value)
            convElem.textContent = `${amount} ${fromCur} = ${result} ${toCur}`
        }
    }

    return (
        <>
            <div className='py-4 px-8 bg-gray-100 shadow-xl text-start w-full'>
                <h1 className="">
                    Amount :
                </h1>
                <form onSubmit={handleConvert}
                    onKeyDown={handleConvert}
                >
                    <input placeholder='0'
                        className='w-full p-1.5 left-0 right-0 rounded-md h-12'
                        ref={searchRef}
                        id="amount"
                    />
                </form>
                <div className="grid grid-cols-2 my-3 h-12 text-gray-700">
                    <div className="grid grid-rows-1 mx-1">
                        <select id="fromCurrency" className="rounded-md">
                            <option value="">from..</option>
                            <option value="USD">USD</option>
                            <option value="IDR">IDR</option>
                            <option value="JPY">JPY</option>
                            <option value="BTC">BTC</option>
                        </select>
                    </div>
                    <div className="grid my grid-rows-1 mx-1 h-12 text-gray-700">
                        <select id="toCurrency" className="rounded-md">
                            <option value="">to..</option>
                            <option value="USD">USD</option>
                            <option value="IDR">IDR</option>
                            <option value="JPY">JPY</option>
                            <option value="BTC">BTC</option>
                        </select>
                    </div>
                </div>
                <button
                    className="border mb-2 w-full p-1.5 h-12 left-0 right-0 rounded-xl bg-white"
                    onClick={handleConvert}
                >
                    Convert
                </button>
                    Result:
                    <div id="convertResult" className="h-12"></div>
            </div>

        </>
    )
}

export default Convertingtab