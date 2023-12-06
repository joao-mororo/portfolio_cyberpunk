import Project from '@/models/Project'
import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import upload from '@/utils/multer'

export const POST = async (req) => {
    try {
        const { name, image, repo, site } = await req.json()

        await connect()

        const newProject = new Project({
            name,
            image: upload.single('file'),
            repo,
            site
        })
 
        newProject.save()

        return NextResponse.json({
            message: "Projeto publicado",
            status: 201
        })
    } catch (err) {
        return NextResponse.json({
            message: "Erro ao publicar projeto",
            status: 500
        })
    }
}
