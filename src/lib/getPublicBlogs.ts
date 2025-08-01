"use server"


const url = process.env.NEXT_PUBLIC_API_URL as string

export const GetPublicBlogs = async () => {
    try {
        const res = await fetch(`${url}blogs/public`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': "application/json"
            }
        })

        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}