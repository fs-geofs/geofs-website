import { promises as fs } from "node:fs";
import DOMPurify from "isomorphic-dompurify"

export async function GET(request) {

    //.next/server is the path to the build folder that is created when you run next command
    const dir_path = __dirname.replace(".next/server/app/api/jobs", "content/gi/jobs/");

    // query directory for files
    const filenames = (await fs.readdir(dir_path))
        .sort() // sort alphabetically
        .reverse()  // reverse so that newest is on top

    const response_data = []

    for(var i=0; i<filenames.length; i++){
        const filename = filenames[i] // get file name
    
        //read file to buffer
        const fileBuffer = await fs.readFile(dir_path + filename);
        const data = fileBuffer.toString().replaceAll("\n", " ");
    
        //sanitize content
        const cleanHtml = DOMPurify.sanitize(data)
    
        //add to response data dictionary
        response_data.push({
          id: filename,
          content: cleanHtml
        })
      }

    const headers = new Headers({
        "Content-Type": "application/json",
    })
    const options = { status: 200, headers: headers }
    return new Response(JSON.stringify(response_data), options);
}