import connect from "@/utils/db"
import Chat from '@/models/Chat'
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connect()
        // const data = await Chat.find({}).json()
        const data = ['um', 'dois']

        if (!data) {
            return NextResponse({
                message: "Nenhum dado encontrado",
                status: 204
            })
        }

        return NextResponse({
            message: "Mensagens coletadas",
            status: 200,
            data
        })
    } catch (error) {
        throw new Error(error)
    }
}
