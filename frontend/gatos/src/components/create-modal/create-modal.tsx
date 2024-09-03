import { useEffect, useState } from "react"
import { useGatosDataMutate } from "../../hooks/useGatosDataMutate"
import { GatosData } from "../../interface/GatosData"
import "./modal.css"

interface InputProps {
    label: string,
    value: string,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps) {
    const [nomeGato, setNomeGato] = useState("")
    const [foto, setFoto] = useState("")
    const [lugar, setLugar] = useState("")
    const { mutate, isSuccess } = useGatosDataMutate()

    const submit = () => {
        const gatoData: GatosData = {
            nomeGato,
            foto,
            lugar
        }
        mutate(gatoData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal()
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre nova foto:</h2>
                <form className="input-container">
                    <Input label="Nome do Gato" value={nomeGato} updateValue={setNomeGato}></Input>
                    <Input label="Foto" value={foto} updateValue={setFoto}></Input>
                    <Input label="Lugar" value={lugar} updateValue={setLugar}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
            </div>
        </div>
    )
}