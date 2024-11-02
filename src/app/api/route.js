export async function GET(request) {

    const response = { "version": "1.0" }

    const headers = new Headers({
        "Content-Type": "application/json",
    })
    const options = { status: 200, headers: headers }

    return new Response(JSON.stringify(response), options)
}