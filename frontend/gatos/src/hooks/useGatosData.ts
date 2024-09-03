import axios, { AxiosPromise } from "axios"
import { GatosData } from "../interface/GatosData"
import { useQuery } from "@tanstack/react-query"
const API_URL = "http://localhost:8080"

const fecthData = async (): AxiosPromise<GatosData[]> => {
    const response = await axios.get(API_URL + '/gatos')
    return response
}

export function useGatosData() {
    const query = useQuery({
        queryFn: fecthData,
        queryKey: ['gatos-data'],
        retry: 2

    })

    return {
        ...query,
        data: query.data?.data
    }


}