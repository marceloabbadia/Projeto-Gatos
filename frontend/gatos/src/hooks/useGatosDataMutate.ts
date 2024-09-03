import axios, { AxiosPromise } from "axios"
import { GatosData } from "../interface/GatosData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const postData = async (data: GatosData): AxiosPromise<any> => {
    const response = await axios.post(API_URL + '/gatos', data)
    return response
}

export function useGatosDataMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['gatos-data']
            });
        }
    })
    return mutate

}